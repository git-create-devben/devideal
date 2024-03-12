import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const SubmitIdeals = mutation({
    args:{
        title:v.string(),
        plang:v.string(),
        level:v.string(),
        description:v.string(),
    },
    handler: async (ctx, args) =>{
        const {title, plang, level, description} = args;
         await ctx.db.insert("ideal",{
            title, plang, level, description
        });
    }
})