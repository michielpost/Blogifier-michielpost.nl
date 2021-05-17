using Blogifier.Core.Data;
using Blogifier.Core.Extensions;
using Blogifier.Shared;
using CsvHelper;
using CsvHelper.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace michiel.mvc.Controllers
{
    public class MichielController : Controller
    {
        private readonly ILogger<MichielController> _logger;
        private readonly AppDbContext _dbContext;

        public MichielController(ILogger<MichielController> logger, AppDbContext dbContext)
        {
			_dbContext = dbContext;
            _logger = logger;
        }


        [HttpGet("PostDetail_{id}.aspx")]
        public IActionResult PostDetail([FromRoute]int id)
        {
            var records = LoadCsv();

            var post = records.Where(x => x.NewsID == id).FirstOrDefault();

            if (post != null)
                return RedirectPermanent($"posts/{post.GetSlug()}");

            return new NotFoundResult();

        }

        [HttpGet("importold")]
        public async Task<IActionResult> ImportOld()
        {
            var records = LoadCsv();

            foreach(var rec in records)
            {
                var converter = new ReverseMarkdown.Converter();

                var post = new Post()
                {
                    AuthorId = 1,
                    Content = rec.NewsText,
                    Title = rec.NewsTitle,
                    Description = rec.NewsTitle,
                    DateCreated = rec.NewsCreateDate,
                    DateUpdated = rec.NewsCreateDate,
                    Published = rec.NewsCreateDate,
                    Cover = null,
                    PostType = PostType.Post,
                    Slug = rec.GetSlug()
                };

                post.Description = GetDescription(converter.Convert(post.Description));
                post.Content = converter.Convert(post.Content);
                post.Selected = false;

                await _dbContext.Posts.AddAsync(post);
                if (await _dbContext.SaveChangesAsync() == 0)
                {
                    Serilog.Log.Error($"Error saving post {post.Title}");
                }

                Post savedPost = await _dbContext.Posts.SingleAsync(p => p.Slug == post.Slug);
                if (savedPost == null)
                {
                    Serilog.Log.Error($"Error finding saved post - {post.Title}");
                }

                savedPost.Blog = await _dbContext.Blogs.FirstOrDefaultAsync();
                await _dbContext.SaveChangesAsync();
            }

            return new OkResult();

        }

        private List<CsvBlogPost> LoadCsv()
        {
            var config = new CsvConfiguration(CultureInfo.CurrentCulture);
            config.Delimiter = ";";

            using (var reader = new StreamReader("App_Data\\blog_posts.csv"))
            using (var csv = new CsvReader(reader, config))
            {
                var records = csv.GetRecords<CsvBlogPost>();

                return records.ToList();
            }
        }

        string GetDescription(string description)
        {
            description = description.StripHtml();
            if (description.Length > 450)
                description = description.Substring(0, 446) + "...";
            return description;
        }


    }

    public class CsvBlogPost
    {
        public int NewsID { get; set; }
        public string NewsTitle { get; set; }
        public string NewsText { get; set; }
        public DateTime NewsCreateDate { get; set; }
        public int fkUserID { get; set; }

        public string GetSlug()
        {
            return NewsTitle.ToSlug();
        }

    }

}
