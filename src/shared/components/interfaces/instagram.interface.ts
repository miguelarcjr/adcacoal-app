export interface InstaResponse {
  data: Data;
  status: string;
}

export interface Data {
  user: User;
}

export interface User {
  edge_owner_to_timeline_media: EdgeOwnerToTimelineMedia;
}

export interface EdgeOwnerToTimelineMedia {
  count: number;
  page_info: PageInfo;
  edges: Edge[];
}

export interface PageInfo {
  has_next_page: boolean;
  end_cursor: string;
}

export interface Edge {
  node: Node;
}

export interface Node {
  id: string;
  __typename: string;
  edge_media_to_caption: EdgeMediaToCaption;
  shortcode: string;
  edge_media_to_comment: EdgeMediaToComment;
  comments_disabled: boolean;
  taken_at_timestamp: number;
  dimensions: Dimensions;
  display_url: string;
  edge_media_preview_like: EdgeMediaPreviewLike;
  owner: Owner;
  thumbnail_src: string;
  thumbnail_resources: ThumbnailResource[];
  is_video: boolean;
}

export interface EdgeMediaToCaption {
  edges: Edge2[];
}

export interface Edge2 {
  node: Node2;
}

export interface Node2 {
  text: string;
}

export interface EdgeMediaToComment {
  count: number;
}

export interface Dimensions {
  height: number;
  width: number;
}

export interface EdgeMediaPreviewLike {
  count: number;
}

export interface Owner {
  id: string;
}

export interface ThumbnailResource {
  src: string;
  config_width: number;
  config_height: number;
}
