import { ButtonWithEmotion } from "@/components/ButtonWithEmotion";
import { ButtonWithStyleX } from "@/components/ButtonWithStyleX";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div>
            <span>Emotion</span>
          </div>
          <div>
            <ButtonWithEmotion />
          </div>
        </div>
        <div>
          <div>
            <span>StyleX</span>
          </div>
          <div>
            <ButtonWithStyleX />
          </div>
        </div>
      </main>
    </>
  )
}
