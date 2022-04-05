import { CreateResolversArgs, PluginOptionsSchemaArgs, SourceNodesArgs } from "gatsby";
export { createSchemaCustomization } from "./create-schema-customization";
export declare function pluginOptionsSchema({ Joi }: PluginOptionsSchemaArgs): any;
export declare function sourceNodes(gatsbyApi: SourceNodesArgs, pluginOptions: ShopifyPluginOptions): Promise<void>;
export declare function createResolvers({ createResolvers, cache }: CreateResolversArgs, { downloadImages, typePrefix, shopifyConnections, }: ShopifyPluginOptions): void;
