
import '../../Styles/Articles.css';


const BlogContent = () => {
    return (
        <>
        <section className='blog'>
            <h1 className='feamobile'>Explore the Latest Articles</h1>
            <div className='single-blog'>
                <img src={require("../../Images/Blog/1.webp")} alt="" />
                <div>
                    <a href=""><h1>iPhone 15 delays — here's the latest delivery dates</h1></a>
                    <p className='author'>By Alyse Stanley </p>
                    <p className='des'>Today's the day that the iPhone 15 series goes on full sale, but if you've not put in an order already, you may be waiting some time for your iPhone to be delivered.The iPhone 15 Pro and iPhone 15 Pro Max are both facing delays beyond the September 22 release date, with the length of the wait varying by where you order your phone from. If you've not placed your iPhone 15 order yet, and are wondering just when you can expect your new phone to arrive at your doorstep, we've collected the latest shipping data from Apple's own website along with the three major wireless carriers and Best Buy. We looked at ship dates for each color across all four iPhone 15 models at their default storage sizes. (That's 256GB for the iPhone 15 Pro Max and 128GB for all other models).</p>
                </div>
            </div>
            <div className='single-blog'>
                <img src={require("../../Images/Blog/2.webp")} alt="" />
                <div>
                    <a href=""><h1>iOS 17 changing privacy settings without permission — how to change them back</h1></a>
                    <p className='author'>By Tom Pritchard</p>
                    <p className='des'>The launch of any major software rarely goes off without a hitch, and iOS 17 is no exception. Some users have reported that the upgrade has changed their existing privacy settings without permission. Apple says that it will be investigating the issue, because this sort of thing should not be happening just because you updated your phone. This news comes from Mysk, a pair of developers and occasional security researchers, over on Twitter/X. Apparently some users who upgraded to iOS 17 are finding that the Significant Locations and iPhone Analytics have been switched back on — without warning or asking for permission. 🚨PSA: iOS 17 turns these sensitive location options back on. If you have disabled significant locations as well as adding your location information to your iPhone analytics before upgrading to iOS 17, iOS 17 will turn the options on as shown in the screenshot.While significant… pic.twitter.com/ROVEgPqw08September 23, 2023</p>
                </div>
            </div>
            <div className='single-blog'>
                <img src={require("../../Images/Blog/3.webp")} alt="" />
                <div>
                <a href=""><h1>Samsung Galaxy S24 just tipped for early launch to fight iPhone 15</h1></a>
                    <p className='author'>By Tom Pritchard </p>
                    <p className='des'>The launch of the iPhone 15 may have caused quite a stir in the smartphone business. So far the phone seems to have been selling pretty well, despite the economic downturn that's affected the rest of the smartphone industry, and it's claimed that this could be putting Samsung on the offensive. Which could see the Galaxy S24 series arrive even earlier than we expected. According to leaker @Tech_Reve over on Twitter, the Galaxy S24’s launch may be brought forward by “about a month” compared to the Galaxy S23. The S23 series was announced on February 1, ahead of a February 17 release date. If what @Tech_Reve says has any truth to it, it means Samsung could kick off the new year with a brand new series of smartphones.Components for Samsung's Galaxy S24 series will begin production from mid-next month, and the release timing of the Galaxy S24 series is expected to be brought forward by about a month compared to the previous year. https://t.co/n3zspsKbpxSeptember 25, 2023</p>
                </div>
            </div>
            <div className='single-blog'>
                <img src={require("../../Images/Blog/4.webp")}alt="" />
                <div>
                <a href=""><h1>Best iPhone 15 Pro cases in 2023</h1></a>
                    <p className='author'>By TJ Fink</p>
                    <p className='des'>The best iPhone 15 Pro cases have one primary job: keep your new Apple device protected at all costs. Take a gander at our recent iPhone 15 Pro review, however, and you'll see just how important this job really is. Apple's eye-catching aluminum chassis houses a beautiful 6.1-inch OLED display, which reached an impressive 1,550 nits of brightness in our testing. The iPhone 15 Pro also packs in a number of nifty camera upgrades, including a physically bigger main 48-megapixel sensor that shoots 24MP pics by default. (You'll find the same 3x telephoto zoom as the iPhone 14 Pro.). Granted, the iPhone 15 Pro has a rating of IP68 for water and dust resistance all by itself, but you’ll need more protection than that to keep Apple’s optics scratch- and crack-free when you’re snapping high-res pics (or shooting 4K video) on the move. Those killer cameras become instantly obsolete, after all, after just one inadvertent “Hulk smash” to the lenses. Not sure which case is best for you? Not to worry, we’ve already done all the legwork! Here are the best iPhone 15 Pro cases to put on your shortlist. </p>
                </div>
            </div>
            <div className='single-blog'>
            <img src={require("../../Images/Blog/5.webp")} alt="" />
            <div>
            <a href=""><h1>iPhone 16 may not get the A17 Pro chip from iPhone 15 Pro — here's why</h1></a>
                <p className='author'>By Tom Pritchard </p>
                <p className='des'>One of the most annoying things Apple has done recently is release new iPhones with two different chipsets. The latest and best chip goes in the Pro models, while the standard and Plus models end up with last year's chip. That happened to iPhone 15 and iPhone 14, but it turns out that may not happen with the iPhone 16. That doesn’t necessarily mean the iPhone 16 will get an A18 chip, that'll likely remain exclusive to iPhone 16 Pro. Instead, one Weibo user claims Apple will be developing a brand new A17 chipset specifically for the iPhone 16 and iPhone 16 Plus. So no more iPhone 15 hand-me-downs, even if there is still a divide in the processing power of iPhone 16 and 16 Pro.The difference next year is that Apple will allegedly use a totally different manufacturing process for the iPhone 16 chips. Currently the 3nm A17 Pro is built using TSMC’s N3B process, but next year might see Apple switch over to the N3E process. The resulting chips would still be 3nm, complete with all the benefits the smaller size would offer, but they wouldn't be exactly the same.</p>
            </div>
        </div>
        </section>
        </>
    )
}


export default BlogContent;