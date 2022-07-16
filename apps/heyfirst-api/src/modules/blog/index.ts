import prisma from "@/services/prisma";

import type {
  FastifyInstance,
  FastifyPluginCallback,
  RouteShorthandMethod,
} from "fastify";

type BlogPageViewHandler = RouteShorthandMethod & { Params: { slug: string } };

const routes: FastifyPluginCallback = (app, _, done) => {
  app.get<BlogPageViewHandler>(
    "/page_views/:slug",
    async ({ params: { slug } }, res) => {
      // TODO: info log when get blog page view

      const blogPageView = await prisma.blogPageViews.findFirst({
        where: {
          slug,
        },
      });

      if (!blogPageView) {
        return res.status(404).send({ message: "this slug is not found" });
      }

      return res.send({ totalCount: blogPageView.totalCount, slug });
    }
  );

  app.post<BlogPageViewHandler>(
    "/page_views/:slug",
    async ({ params: { slug } }, res) => {
      // TODO: info log when update blog page view

      const blogPageView = await prisma.blogPageViews.findFirst({
        where: {
          slug,
        },
      });

      if (!blogPageView) {
        const blogPageView = await prisma.blogPageViews.create({
          data: {
            slug,
            totalCount: 1,
          },
        });

        return res.send({ totalCount: blogPageView.totalCount, slug });
      }

      const updatedBlogPageView = await prisma.blogPageViews.update({
        where: {
          slug,
        },
        data: {
          totalCount: blogPageView.totalCount + 1,
        },
      });

      return res.send({ totalCount: updatedBlogPageView.totalCount, slug });
    }
  );

  done();
};

export default (app: FastifyInstance) => {
  app.register(routes, {
    prefix: "/blog",
  });
};
