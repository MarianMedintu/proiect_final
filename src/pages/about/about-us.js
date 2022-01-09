import React from 'react';
import './about-us.scss'

export function AboutUs() {
    return (
        <div className={'aboutUs-container'}>
            <div className={'our-story'}>
                <h1>
                    Our story
                </h1>
                <p>
                    We are Shinerr Candle Studio. Our mission is simple: to create candles with captivating scents,
                    beautiful minimalist design, and the best ingredients. Essentially, everything we love about luxury
                    candles, but at accessible prices. Our dreamy scents are inspired by nature and travel, moments and
                    memories. We use 100% soy wax derived from American-grown soy beans for an eco-friendly, clean burn
                    and lead-free cotton wicks. Our candles are petroleum-free, cruelty-free, phthalate-free, and 100%
                    vegan.

                    Each of our candles is wicked, poured, and labeled by hand by our in-house team of artisans. We like
                    to think of our wares as full sensory experiences—from the artful minimal packaging to the warm
                    candlelight and delicate aromas that fill a room. So, go ahead, light one up.
                </p>
            </div>
            <div className={'article-container'}>
                <div className={'image-block'}>
                    <img
                        src={'https://cdn.shopify.com/s/files/1/0987/6688/files/HMS.Web.OurStory.Section1_650x650.progressive.jpg?v=1594316601'}/>
                </div>
                <div className={'content-block'}>
                    <h4>It Takes a Community To Make a Candle</h4>
                    <p>How do you capture the spirit of a memory in a way that feels personal and recognizable to
                        everyone?</p>
                    <p>That’s the question we ask ourselves every day. Luckily, we’re not the only ones with the
                        answers! We speak to anywhere from 30 to 100 people for every candle we develop, visiting
                        local areas, collecting samples, and even extracting scents from food. We’ve discussed
                        childhood memories with local Texans, why books smell so great with veteran librarians, the
                        flora of Central Park with New York horticulturalists, and the finer points of donuts with
                        Dunkin’ superfans. And that's just the start of our process.</p>
                    <p>We then try hundreds of different scent combinations, checking back in with the community
                        along the way until we’ve found the perfect balance; an authentic fragrance that will also
                        smell great in your home.</p>
                </div>
            </div>
            <div className={'article-container'}>
                <div className={'content-block'}>
                    <h4>Candles Fit For Your Home</h4>
                    <p>We care as much about the ingredients in our products as you care about the products in your
                        home. That’s why all our candles are hand-poured in the US using a natural soy wax blend with
                        100% organic cotton wicks and custom fragrance oils to deliver a long-lasting, great-smelling
                        burn.</p>
                    <p>Our candles are also cruelty-free, non-toxic and contain no lead, plastics, paraben, phthalates
                        or synthetic dyes.</p>
                </div>

                <div className={'image-block'}>
                    <img
                        src={'https://cdn.shopify.com/s/files/1/0987/6688/files/HMS.Web.OurStory.Section2_650x650.progressive.jpg?v=1594316676'}/>
                </div>
            </div>
            <div className={'article-container'}>
                <div className={'image-block'}>
                    <img
                        src={'https://cdn.shopify.com/s/files/1/0987/6688/files/HMS.Web.OurStory.Section3_650x650.progressive.jpg?v=1594316731'}/>
                </div>
                <div className={'content-block'}>
                    <h4>As Unique As Your Memories</h4>
                    <p>Inspired by our loyal fans, we’ve expanded the Homesick range to almost 200 different products
                        representing all the things that matter most - from every US state, to multiple cities and
                        countries, to occasions, people and moments.</p>
                </div>
            </div>
        </div>
    )
}
