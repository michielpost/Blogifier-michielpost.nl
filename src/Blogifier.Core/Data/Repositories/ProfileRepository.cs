﻿using Blogifier.Core.Common;
using Blogifier.Core.Data.Domain;
using Blogifier.Core.Data.Interfaces;
using Blogifier.Core.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Blogifier.Core.Data.Repositories
{
    public class ProfileRepository : Repository<Profile>, IProfileRepository
    {
        BlogifierDbContext _db;
        public ProfileRepository(BlogifierDbContext db) : base(db)
        {
            _db = db;
        }

        public IEnumerable<ProfileListItem> ProfileList(Expression<Func<Profile, bool>> predicate, Pager pager)
        {
            var skip = pager.CurrentPage * pager.ItemsPerPage - pager.ItemsPerPage;

            var posts = _db.Profiles.Include(p => p.Assets).Include(p => p.BlogPosts)
                .Where(predicate).Skip(skip);

            // this is work around EF 1.1 not handling "count" fields
            // and can be simplified when moved to EF 2

            var p2 = posts.Select(p => new
            {
                ProfileId = p.Id,
                Title = p.Title,
                Email = p.AuthorEmail,
                Url = ApplicationSettings.BlogRoute + "/" + p.Slug,

                PostCount = p.BlogPosts.Count,
                PostViews = _db.BlogPosts.Where(bp => bp.Profile.Id == p.Id).Sum(bp => bp.PostViews),

                AssetCount = p.Assets.Count,
                DownloadCount = _db.Assets.Where(a => a.ProfileId == p.Id).Sum(a => a.DownloadCount),
                DiskUsage = _db.Assets.Where(a => a.ProfileId == p.Id).Sum(a => a.Length),

                LastUpdated = p.LastUpdated
            }).ToList();

            var xxx = p2;
            
            return p2.Select(p => new ProfileListItem
            {
                ProfileId = p.ProfileId,
                Title = p.Title,
                Email = p.Email,
                Url = p.Url,

                PostCount = p.PostCount,
                PostViews = p.PostViews,

                AssetCount = p.AssetCount,
                DownloadCount = p.DownloadCount,
                DiskUsage = p.DiskUsage,

                LastUpdated = p.LastUpdated
            });
        }
    }
}
