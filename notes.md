# dns
* old - 66.96.149.21 - A (@ and www)
* old - A*66.96.163.136

https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/

https://www.netlifycms.org/docs/add-to-your-site/

https://medium.com/netlify/jamstack-with-gatsby-netlify-and-netlify-cms-a300735e2c5d


# issues
* https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/
* https://github.com/gatsbyjs/gatsby/issues/4103
* note to include a slash before path name
Processing Netlify CMS Output with Gatsby
Gatsby can be configured to process Markdown by following the Adding Markdown Pages guide in the docs. Our config.yml file for Netlify CMS is set up to use the same fields used in the guide, so you can follow the instructions to the letter and should work fine. Note: When configuring the gatsby-source-filesystem plugin in the Adding Markdown Pages Guide, the path to your markdown files should be ${__dirname}/blog.

Once this is complete, get your changes committed and pushed up to your GitHub repo and check your site! The new blog post will be at whatever you entered in the path field when creating your blog entry in Netlify CMS. If you followed the example in Gatsby’s Adding Markdown Pages guide and used “/blog/my-first-blog”, then your blog post would be at “your-site-name.netlify.com/blog/my-first-blog”.