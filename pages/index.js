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
      <meta
        property="og:url"
        content={"https://poc-og-vc.vercel.app/"}
        key="ogurl"
      />
      <meta
        name="image"
        property="og:image"
        content={previewImage}
        key="ogimage"
      />
      <meta property="og:site_name" content={"siteName"} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        name="description"
        property="og:description"
        content={description}
        key="ogdesc"
      />

      {/* Twitter */}
      {/* <meta name="twitter:card" content="summary" key="twcard" /> */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:creator" content={"twitterHandle"} key="twhandle" />
      <meta name="twitter:image" content={previewImage} key="twImage" />
    </Head>
  );
};

export default function IndexPage() {
  return (
    <>
      <SocialHead
        title={
          "Comment déployer la transition écologique dans votre entreprise ?"
        }
        description="La transition écologique, encore trop souvent perçue comme une contrainte, un coût ou un chantier trop complexe, est pourtant une belle opportunité économique. Voici les 3 étapes essentielles pour une transformation efficiente."
        previewImage="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/default/2021/mc20/MC20_front.png?$600x2000$&fmt=png-alpha&fit=constrain"
      />
      <div>
        Hello World. test L_IN
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </>
  );
}
