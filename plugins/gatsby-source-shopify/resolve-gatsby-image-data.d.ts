import { IGatsbyImageData } from "gatsby-plugin-image";
import { IGatsbyImageFieldArgs } from "gatsby-plugin-image/graphql-utils";
import { IShopifyImage } from "./get-shopify-image";
import type { Node } from "gatsby";
export declare function makeResolveGatsbyImageData(cache: any): (image: Node & IShopifyImage, { formats, layout, ...options }: IGatsbyImageFieldArgs) => Promise<IGatsbyImageData>;
