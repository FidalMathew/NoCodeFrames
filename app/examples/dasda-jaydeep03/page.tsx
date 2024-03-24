
import { getTokenUrl } from "frames.js";
import {
    FrameButton,
    FrameContainer,
    FrameImage,
    FrameReducer,
    NextServerPageProps,
    getPreviousFrame,
    useFramesReducer,
} from "frames.js/next/server";
import Link from "next/link";
// import { zora } from "viem/chains";
// import { currentURL } from "../../utils";
import { createDebugUrl } from "../../debug";

// Define the interface for searchParams
interface SearchParams {
    get(param: string): string | null;
    // Add other methods/properties if necessary
}

// Define the interface for NextServerPageProps including searchParams
interface NextServerPagePropsWithSearchParams {
    searchParams?: SearchParams;
    // Add other props if necessary
}

// Define the type for PageProps
type PageProps = {
    searchParams?: SearchParams;
    // Add other props if necessary
};

// This is a react server component only
export default async function Home({ searchParams }: NextServerPagePropsWithSearchParams = {}) {
    const id = searchParams?.get('id') ?? '';

    const idAsNumber = id ? Number(id) : 1;

    const nextId = idAsNumber + 1;



    // then, when done, return next frame
    return (
        <div>
            Mint button example <Link href={createDebugUrl(url)}>Debug</Link>
            {id % 2 == 0 && <meta name="fc:frame:video" content="https://lvpr.tv?v=dasdsa" />}
            <FrameContainer
                pathname="/examples/mint-button"
                postUrl="/examples/mint-button/frames"
            // state={state}
            // previousFrame={previousFrame}
            >
                {(id === undefined || id % 2 != 0) && <FrameImage
                    src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                    aspectRatio="1:1"
                ></FrameImage>}
                <FrameButton action="post" target="https://no-code-frames.vercel.app/examples/dasda-jaydeep03?id=${nextId}">hello test</FrameButton>

            </FrameContainer>
        </div>
    );
  }
