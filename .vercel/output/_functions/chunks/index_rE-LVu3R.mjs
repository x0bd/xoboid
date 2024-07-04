/* empty css                          */
import { s as createComponent, t as renderTemplate, u as renderComponent, v as maybeRenderHead, x as addAttribute } from './astro/server_CMv_d3ee.mjs';
import { $ as $$Container, a as $$PageLayout } from './PageLayout_CyJO_9HJ.mjs';
import { z } from 'zod';
import { M as MUSIC } from './consts_D65tU1yI.mjs';

async function getAccessToken() {
  const refreshToken = "AQCMw0V4554HWLNfDaNllJyzeyVjTGnqmo23CSVJjp2MK66YQeP_lJNp66G4ktz8d4wDfMHUAsINIFaUcTQ8XXSZ8--QHf2m_01rhz3GzcdBWJ83x9ekAurpe729I-B4sUM";
  const clientId = "fc11f90c13dc4ff989f31d437aba1a63";
  const clientSecret = "0cef0dbb13174172ba20db76ff5e875c";
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken
    })
  });
  const { access_token } = z.object({
    access_token: z.string()
  }).parse(await response.json());
  return { access_token };
}
async function getTopTracks() {
  const { access_token } = await getAccessToken();
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  ).then((res) => res.json());
  const { items } = z.object({
    items: z.array(
      z.object({
        artists: z.array(
          z.object({
            name: z.string()
          })
        ),
        album: z.object({
          name: z.string(),
          images: z.array(
            z.object({
              url: z.string()
            })
          )
        }),
        external_urls: z.object({
          spotify: z.string()
        }),
        name: z.string()
      })
    )
  }).parse(response);
  return items.slice(0, 15).map((item) => ({
    artists: item.artists,
    songUrl: item.external_urls.spotify,
    title: item.name,
    album: item.album.name,
    image: item.album.images[0].url
  }));
}
async function getFollowersOfArtistFromId(id) {
  const { access_token } = await getAccessToken();
  const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  }).then((res) => res.json());
  const { followers } = z.object({
    followers: z.object({
      total: z.number()
    })
  }).parse(response);
  return followers.total;
}
async function getTopArtists() {
  const { access_token } = await getAccessToken();
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=short_term",
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  ).then((res) => res.json());
  const { items } = z.object({
    items: z.array(
      z.object({
        name: z.string(),
        images: z.array(
          z.object({
            url: z.string()
          })
        ),
        external_urls: z.object({
          spotify: z.string()
        }),
        followers: z.object({
          total: z.number()
        })
      })
    )
  }).parse(response);
  return items.slice(0, 15).map((item) => ({
    name: item.name,
    url: item.external_urls.spotify,
    image: item.images[0].url,
    followers: getFollowersOfArtistFromId(
      item.external_urls.spotify.split("/")[item.external_urls.spotify.split("/").length - 1]
    ).then((res) => res.toLocaleString())
  }));
}

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const tracks = await getTopTracks();
  const artists = await getTopArtists();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": MUSIC.TITLE, "description": MUSIC.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-10"> <h1 class="animate font-semibold text-2xl text-black dark:text-white">
Top Tracks
</h1> <div class="animate"> <div class="flex flex-col space-y-4"> ${tracks.map(
    ({ artists: artists2, album, songUrl, title, image }) => renderTemplate`<div class="flex flex-row items-center space-x-4"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-20 h-20 object-cover rounded-md"> <div class="flex flex-col"> <a${addAttribute(songUrl, "href")}> <h3 class="font-semibold text-black dark:text-neutral-100"> ${title} </h3> </a> <p> ${artists2.map(({ name }) => name).join(", ")} </p> <p>${album}</p> </div> </div>`
  )} </div> </div> </div> <div class="space-y-10"> <h1 class="animate font-semibold text-2xl my-8 text-black dark:text-white">
Top Artists
</h1> <div class="animate"> <div class="flex flex-col space-y-4"> ${artists.map(({ name, url, image, followers }) => renderTemplate`<div class="flex flex-row items-center space-x-4"> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="w-20 h-20 object-cover rounded-md"> <div class="flex flex-col"> <a${addAttribute(url, "href")}> <h3 class="font-semibold text-black dark:text-neutral-100"> ${name} </h3> </a> <p>${followers} followers</p> </div> </div>`)} </div> </div> </div> ` })} ` })}`;
}, "C:/Users/synth/Dojo/oss/xoboid/src/pages/music/index.astro", void 0);

const $$file = "C:/Users/synth/Dojo/oss/xoboid/src/pages/music/index.astro";
const $$url = "/music";

export { $$Index as default, $$file as file, prerender, $$url as url };
