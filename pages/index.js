import Link from "next/link";
import Head from "next/head";

const SocialHead = ({ title, description, previewImage }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{title}</title>

      {/* Open Graph */}
      <meta property="og:url" content={"currentURL"} key="ogurl" />
      <meta property="og:image" content={previewImage} key="ogimage" />
      <meta property="og:site_name" content={"siteName"} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={"twitterHandle"} key="twhandle" />
      <meta name="twitter:image" content={previewImage} key="twImage" />
    </Head>
  );
};

export default function IndexPage() {
  return (
    <>
      <SocialHead
        title={"test title"}
        description="description og test"
        previewImage="https://asset.mediahub.bnpparibas/is/image/bnpparibas/2022%20_%20BCEF%20Entreprises%20_%20Article_Mobilit%C3%A9s%20alternatives_1049x500"
      />
      <div>
        Hello World.{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </>
  );
}
