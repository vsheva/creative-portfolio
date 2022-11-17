import sanityClient from "@sanity/client";
import imageUrlBuilder from  "@sanity/image-url";

export const client = sanityClient({
   projectId:"50nn8g0d",
   dataset:"production",
    apiVersion:"2022-11-19",
    useCdn: true,
    token: "skfr5Xc4qHHdrd028WRlAm6wKqZPTH4uwgKH3bi6Xsrou6JVuWuyfmJ3Cp0O9TFauJY0ODOyibdeLthtdyerxWUqVywkTeBS9El4IJoKd0HuOMBuFilmThVfF0DUCOZW81TkaswVAw927bC7jdRX5zawhZQzZZ0mM2mMxMZtTgA0hndFx5Ox",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);