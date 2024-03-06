import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentContent extends Schema.Component {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Content';
    icon: 'book';
  };
  attributes: {
    blogs: Attribute.Relation<'content.content', 'oneToMany', 'api::blog.blog'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.content': ContentContent;
    }
  }
}
