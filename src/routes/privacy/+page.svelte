<script>
    import Button from "$lib/Button.svelte";
import Hero from "$lib/Hero.svelte";

    $: myMail = "click to show mail";
    function showMail() {
        myMail = "<a href='mailto:contact@eliasladenburger.com'>contact@eliasladenburger.com</a>"
    }
</script>

<div id="privacy-policy" class="mx-5 text-primaryContrast text-md">
    <section id="policy-header" class="">
        <h1 class="text-2xl my-5">
            Privacy Policy
        </h1>
        <p>I am a strong advocate of privacy rights and do my utmost to protect your privacy.</p>
        <p>This policy describes in detail how I do so.</p>
        <h2 class="text-xl my-5">
            Topics
        </h2>
        <ul class="mx-5 list-disc">
            <li class="list-item">
                <a href="#what-data">What data do I collect?</a>
            </li>
            <li>How do I collect your data?</li>
            <li>How will I use your data?</li>
            <li>How do I store your data?</li>
            <li>What are your data protection rights?</li>
            <li>What are cookies?</li>
            <li>How do I use cookies?</li>
            <li>What types of cookies do I use?</li>
            <li>How to manage your cookies</li>
            <li>Privacy policies of other websites</li>
            <li>Changes to our privacy policy</li>
            <li>How to contact us</li>
            <li>How to contact the appropriate authorities</li>
        </ul>
    </section>

<section id="details"></section>
    <h2 class="text-xl my-5" id="what-collect">
        What data do I collect?
    </h2>

    <p>I collect the following data:</p>

        <ul class="mx-5 list-disc">
            <li><strong>Personal identification information</strong> (Name, email address, phone number, etc.): only if you provide them to me via the contact form.</li>
            <li>As of March 2023, I do not collect any other personal information.</li>
        </ul>

    <h2 class="text-xl my-5" id="how-collect">
        How do I collect your data?
    </h2>
    <p>You directly provide me with most of the data I collect. 
        I collect data and process data when you contact me via e-mail, phone or the contact form on this website.</p>
<!--
        Register online or place an order for any of our products or services.
        Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.
        Use or view our website via your browser’s cookies.
        [Add any other ways I collect data]
-->
        <!--
    I may also receive your data indirectly from the following sources:

        [Add any indirect source of data I have]
-->
    <h2 class="text-xl my-5" id="how-use">
        How will I use your data?
    </h2>
    <p>I collect your data so that I can process your inquiries and orders.</p>
<!--
If you agree, I will share your data with our partner companies so that they may offer you their products and services.

    [List organizations that will receive data]

When I process your order, I may send your data to, and also use the resulting information from, credit reference agencies to prevent fraudulent purchases.
-->

<h2 class="text-xl my-5" id="how-store">
    How do I store your data?
</h2>

I will keep your e-mail address and phone number for a period of two years beyond our latest contact.
Once this time period has expired, I will delete your data.

<!--
<h2 class="text-xl my-5" id="marketing">
    Marketing
</h2>

I would like to send you information about products and services of ours that I think you might like, as well as those of our partner companies.

    [List organizations that will receive data]

If you have agreed to receive marketing, you may always opt out at a later date.

You have the right at any time to stop I from contacting you for marketing purposes or giving your data to other members of the I Group.

If you no longer wish to be contacted for marketing purposes, please click here.
-->
<h2 class="text-xl my-5" id="rights">
    What are your data protection rights?
</h2>
<p>
As a natural person and visitor of this website, you have various rights with regards to your privacy:
</p>
<ul>
    <li>
        <b>The right to access</b>: You have the right to request I for copies of your personal data. 
        I may charge you a small fee for this service.
</li>
<li>
<b>The right to rectification</b>: You have the right to request that I correct any information you believe is inaccurate. 
You also have the right to request I to complete the information you believe is incomplete.
</li>
<li>
<b>The right to erasure</b>: You have the right to request that I erase your personal data, under certain conditions.
</li>
<li>
<b>The right to restrict processing</b>: You have the right to request that I restrict the processing of your personal data, under certain conditions.
</li>
<li>
<b>The right to object to processing</b>: You have the right to object to the processing of your personal data, under certain conditions.
</li>
<li>
<b>The right to data portability</b>: You have the right to request that I transfer the data that I have collected to another organization, or directly to you, under certain conditions.
</li>
</ul>
<p>
If you make a request, I have to respond to you within one month. 
If you would like to exercise any of these rights, please contact me via <a href="/contact">email or contact form</a>.
</p>

<h2 class="text-xl my-5" id="cookies">
    Cookies
</h2>
<p>Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information.</p>
<p>When you visit my website, I may collect information from you automatically through cookies or similar technology.</p>
<p>For further information, visit <a href="https://allaboutcookies.org">https://allaboutcookies.org</a>.</p>

<h2 class="text-xl my-5" id="how-cookies">
    How do I use cookies?
</h2>
<!--
<p>
I uses cookies in a range of ways to improve your experience on our website, including:

    Keeping you signed in
    Understanding how you use our website
    [Add any uses I has for cookies]

<h2 class="text-xl my-5" id="manage-cookies">
    What types of cookies do I use?
</h2>
-->
<p>
    This website does not use cookies.
</p>
<!--

There are a number of different types of cookies. 
My website uses:

    Functionality – I use these cookies so that I recognize you on our website and remember your previously selected preferences. 
    These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are used.
    Advertising – I use these cookies to collect information about your visit to our website, the content you viewed, the links you followed and information about your browser, device, and your IP address. I sometimes shares some limited aspects of this data with third parties for advertising purposes. I may also share online data collected through cookies with our advertising partners. This means that when you visit another website, you may be shown advertising based on your browsing patterns on our website.
    [Add any other types of cookies I uses]
-->

<h2 class="text-xl my-5" id="manage-cookies">
    How to manage cookies
</h2>

<p>
You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. 
However, in a few cases, some of my website features may not function as a result.
</p>

<h2 class="text-xl my-5" id="other-sites">
    Privacy policies of other websites
</h2>

<p>
My website contains links to other websites. 
If you choose to visit other sites by clicking on these links, please be aware that other privacy policies will apply.
</p>

<h2 class="text-xl my-5" id="changes">
    Changes to my privacy policy
</h2>
<p>
I keep this privacy policy under regular review. 
This privacy policy was last updated on March 26th 2023.
</p>

<h2 class="text-xl my-5" id="contact">
    How to contact me
</h2>

<p>
If you have any questions about my privacy policy, the data I hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact me.
</p>

</div>