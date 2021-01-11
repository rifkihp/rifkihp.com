'use strict';

const _ = require('lodash');
const moment = require('moment');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const formatDate = date => moment(date).format('MMMM D, YYYY');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  fmImagesToRelative(node);

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug,
      });
    } else if (typeof node.frontmatter.frontSlug !== 'undefined') {
      createNodeField({
        node,
        name: 'frontSlug',
        value: node.frontmatter.frontSlug,
      });
    } else {
      const value = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: 'slug',
        value,
      });
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(tag => `/tag/${_.kebabCase(tag)}/`);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.category) {
      const categorySlug = `/tag/${_.kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }

    if (node.frontmatter.date) {
      createNodeField({ node, name: 'dateFormatted', value: formatDate(node.frontmatter.date) });
    }
    if (node.frontmatter.dateModified) {
      createNodeField({
        node,
        name: 'dateModifiedFormatted',
        value: formatDate(node.frontmatter.dateModified),
      });
    }
  }
};

module.exports = onCreateNode;
