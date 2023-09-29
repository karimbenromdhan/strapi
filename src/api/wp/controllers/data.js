"use strict";
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::wp.wp", () => ({
  async postdb(ctx, next) {
    var acceptedDomains = ["https://wptest.ddev.site","test2.cme-kurs.de", "4006-196-179-25-52.ngrok-free.app"];
    const found = acceptedDomains.find(
      (element) => element == ctx.req.headers.origin || element == ctx.headers.host
    );
    var data = ctx.request.body;
    if (Array.isArray(data) && data.length > 0 && found) {
      data.map &&
        data.map(async (element) => {
          try {
            console.log("sucesss");
            // const entry = await strapi.entityService.create(
            //   "api::course.course",
            //   {
            //     data: {
            //       wpID: element.ID,
            //       post_author: element.post_author,
            //       post_date: element.post_date,
            //       post_content: element.post_content,
            //       post_title: element.post_title,
            //       post_excerpt: element.post_excerpt,
            //       post_status: element.post_status,
            //       comment_status: element.comment_status,
            //       ping_status: element.ping_status,
            //       post_password: element.post_password,
            //       post_name: element.post_name,
            //       to_ping: element.to_ping,
            //       pinged: element.pinged,
            //       post_content_filtered: element.post_content_filtered,
            //       post_parent: element.post_parent,
            //       guid: element.guid,
            //       menu_order: element.menu_order,
            //       post_type: element.post_type,
            //       post_mime_type: element.post_mime_type,
            //       comment_count: element.comment_count,
            //       filter: element.filter,
            //       kurs_aufrufen: element.kurs_aufrufen,
            //       vnr_nummer: element.vnr_nummer,
            //       gultig_ab: element.gultig_ab,
            //       zertifiziert_in: element.zertifiziert_in,
            //       zertifiziert_durch_link: element.zertifiziert_durch_link,
            //       zertifiziert_durch_name: element.zertifiziert_durch_name,
            //       zertifiziert_bis: element.zertifiziert_bis,
            //       cme_punkte: element.cme_punkte,
            //       zielgruppe: element.zielgruppe,
            //       repeater_autoren: element.repeater_autoren,
            //       redaktion: element.redaktion,
            //       veranstaltungstyp: element.veranstaltungstyp,
            //       lernmaterial: element.lernmaterial,
            //       fortbildungspartner_link: element.fortbildungspartner_link,
            //       fortbildungspartner_name: element.fortbildungspartner_name,
            //       voltext_text: element.voltext_text,
            //     },
            //   }
            // );
          } catch (e) {
            console.log("error");
            return ctx.badRequest("error");
          }
        });
      console.log("success");
      return ctx.send({ msg: "success" });
    } else {
      console.log("error");
      return ctx.badRequest("error");
    }
  },
}));
