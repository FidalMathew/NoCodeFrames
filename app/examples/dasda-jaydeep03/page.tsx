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


// This is a react server component only
export default async function Home({ searchParams }: NextServerPageProps) {
    const id = searchParams.get('id')

    const idAsNumber = id ? Number(id) : 1

    const nextId = idAsNumber + 1



    // then, when done, return next frame
    return (
        <div>
            Mint button example <Link href={createDebugUrl(url)}>Debug</Link>
            {id % 2 == 0 && <meta name="fc:frame:video" content="${video}" />}
            <FrameContainer
                pathname="/examples/mint-button"
                postUrl="/examples/mint-button/frames"
                // state={state}
                // previousFrame={previousFrame}
            >
                {(id === undefined || id % 2 != 0) && <FrameImage
                    src="${fallbackimage}"
                    aspectRatio="1:1"
                ></FrameImage>}
                ${dynamicButtons}
            </FrameContainer>
        </div>
    );
