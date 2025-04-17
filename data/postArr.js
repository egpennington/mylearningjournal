const initialPosts = [
    {
        id: 10,
        date: "July 22, 2024",
        image: "images/herobg2.png",
        title: "Rebooting at 55: My Coding Journey",        
        body: `
        <p>At 55, I decided it was time to learn something new: coding. Front-end programming sounded intriguing, so I dove into HTML, CSS, and JavaScript. My first challenge was setting up my development environment. It felt like learning a new language, but when I saw my first "Hello, World!" displayed on a webpage, I was thrilled! It was a small step, but it sparked a fire in me to keep going. Learning to code has been about perseverance and embracing a beginner's mindset.</p>

        <div class="main-blog-image blogImage"></div>

        <h3>How I stay committed to learning</h3>
        <p>Staying committed to learning code at 55 hasn’t always been easy, but I've found ways to keep myself motivated. I set small, achievable goals and celebrate each win, no matter how minor it seems. When I hit roadblocks, I remind myself why I started: to embrace a new challenge and build something meaningful. Listening to podcasts like <strong>How I Built This</strong> with Guy Raz has been a great source of inspiration, as I hear stories of entrepreneurs who overcame struggles to achieve success. Their journeys remind me that persistence is key and that everyone starts somewhere.</p>

        <p>Another source of motivation has been the <strong>Scrimba podcast</strong> with Alex Booker, which gives practical tips and insights from developers who’ve been through the same struggles. Hearing other coders share their experiences and advice reassures me that it's okay to face setbacks. I often listen to these podcasts while walking or during breaks, using them as a way to stay engaged with the coding community and learn even when I’m not at the computer. These habits keep my commitment strong, turning learning to code into a daily practice rather than a daunting task.</p>

        <h3>How I got started</h3>
        <p>I got started with coding when I realized I wanted to learn something completely new and challenging. The idea of building something from scratch, just by typing commands, fascinated me. I began with basic HTML and CSS tutorials, learning how to structure a webpage and style it. The first time I saw something I created come to life on the screen, it was exhilarating. Seeing my thoughts turn into a functional and visual reality was awesome. It felt like a superpower, and I knew I wanted to experience that feeling again and again.</p>

        <p>Coding quickly became more than just a hobby—it was like a drug, a high that I couldn’t get enough of. The hours would fly by as I dove into projects, trying to make each one better than the last. When I’m coding, I get into the zone where nothing else matters; it’s just me and the code, solving problems and creating. It’s that feeling of flow that keeps me going, even when I hit bumps along the way. It’s not just about learning a new skill; it’s about experiencing the joy of making ideas come alive.</p>
        `,
    },
    {
        id: 9,
        date: "3/12/25",
        image: "images/card4.png",
        title: "Follow your dream",
        body: `<p>Follow your dream. It sounds simple, almost like a slogan you’d find on a poster or a notebook cover. But lately, I’ve been reminded that it’s more than just a phrase—it’s a compass. After stepping away for a while to rest and reset, I’m back in the rhythm of learning again. And more than that, I’m building again. Not just websites or apps, but belief in myself. That I’m not too late. That I can still do this. That I *am* doing this.</p>
        
        <p>There’s a moment in the K-drama <em>Start-Up</em> where Dal-mi reminds Do-san to follow his dream—just like the message that was inscribed on his baseball. That scene hit me hard. Not because it was dramatic or romantic, but because it felt real. Sometimes we forget the dreams we wrote down when we were younger, when we were full of hope and wild ideas. But the truth is, those dreams are still inside us. Sometimes, we just need someone—or something—to remind us to pick them back up.</p>
        
        <p>This time around, I’m learning not just with my head, but with my heart. I'm making things that matter to me, chasing down ideas with the same curiosity I had when I started. And even when it gets tough, I keep coming back to that simple message: Follow your dream. It’s not too late. It never was.</p>`
    },
    {
        id: 8,
        date: "02/25/25",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2070&q=80",
        title: "Finding Calm in Chaos",
        body: `<p>Sometimes, the world feels like a storm. But in that storm, we learn to anchor ourselves. Growth isn't quiet; it's forged in the noise. And for a while, I needed to step away from that noise. I was burned out—mentally drained from trying to absorb so much, so fast. Tutorials blurred together, code errors felt overwhelming, and the joy I had once felt while learning started slipping away. So I paused.</p>
        
        <p>At first, I felt guilty for taking a break. But with time, I realized that rest is part of growth too. I needed space to breathe, to reflect, and to remind myself why I started this journey in the first place. And now, I'm back. Not just learning again, but enjoying it. Building little projects, fixing bugs that used to trip me up, laughing at typos instead of stressing over them. The fire is back—and this time, it's burning steadier.</p>
        
        <p>This break didn’t set me back. It gave me clarity. I’m learning at my own pace now, not to chase some imaginary deadline, but to build a life where learning is part of the rhythm. Progress isn’t always about pushing harder—it’s about knowing when to pause and when to start again. And right now, I'm starting again. With purpose, with joy, and with code.</p>
        
        <p><em>"Rest isn’t quitting. It’s preparing to begin again—wiser, stronger, and more ready than before."</em></p>`
    },
    {
        id: 7,
        date: "4/14/25",
        image: "images/card8.jpg",
        title: "A Walk in the Woods",
        body: `<p>Nature doesn’t hurry, yet everything is accomplished. The forest whispers stories older than time, and I find myself listening more lately.</p>

        <p>It reminds me of a poem I read a long, long time ago.  It starts off, <em>...the earth remembered me, she took me back so tenderly, arranging her dark skirts, her pockets full of lichens and seeds</em></p>

        <p>When I get out to the forest, I feel revived.  Breath more.</p>`
    },
    {
        id: 6,
        date: "4/13/25",
        image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=2070&q=80",
        title: "Reflections in a Coffee Cup - Code and Coffee",
        body: `<p>Early mornings, warm mugs, and half-formed dreams. Sometimes, answers swirl at the bottom of the cup. Before the world wakes up, when it’s just me and a glowing screen, I find space to think clearly. That’s when my best coding moments happen—not when everything’s perfect, but when everything’s quiet.</p>
        
        <p>I used to think programming was just logic and syntax. But more and more, I realize it’s also rhythm and intuition. Mornings like this remind me that learning isn’t always a straight line. Sometimes, you need stillness to understand the bug you couldn’t crack last night. Sometimes, the missing piece clicks in while the coffee is still steeping.</p> <p>Starting this journey later in life, I’ve learned to appreciate those little pauses—the moments between typing and reflecting. Coding isn’t just solving problems; it’s a kind of conversation between what I know and what I’m still learning. And in the quiet hum of early hours, with coffee in hand, I’ve come to love that dialogue.</p>
        
        <p><em>When you sit quite, you can hear more</em></p>`
    },
    {
        id: 5,
        date: "4/12/25",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=2070&q=80",
        title: "Notes from the Edge",
        body: "When you’re on the edge, the view is terrifying—but beautiful. Life doesn’t happen in the center. It happens at the edges, where change begins."
    },
    {
        id: 4,
        date: "10/11/24",
        image: "images/card5.png",
        title: "Stepping Into React: My First Look at a JavaScript Giant. Building One Component at a Time",
        body: `<p>Starting React felt like stepping onto a moving train. Up until then, I was used to writing HTML, CSS, and JavaScript the “classic” way—simple files, simple scripts. But suddenly, I was looking at things like components, props, and JSX. It was exciting… and also kind of intimidating. I remember opening up my first React app created with Vite, and staring at "App.jsx" like it was written in another language.</p>
        
        <p>JSX really threw me at first. Mixing HTML and JavaScript in the same file? It felt wrong—and yet it was surprisingly intuitive once I got the hang of it. I learned that components are like little building blocks, each with their own job, and when you stack them together, they make something powerful. That “click” moment came when I passed props into a component and saw the UI change dynamically. I suddenly understood why people love React so much. It’s not just about building interfaces—it’s about building smarter, more reusable ones.</p>
        
        <p>One of the biggest hurdles was wrapping my head around state. The idea that a component could remember something and react (no pun intended) when it changed was a whole new way of thinking. And "useState"? At first, it looked like some alien syntax, but it quickly became my new best friend. Little by little, I went from copy-pasting examples to tweaking code with confidence, and finally, building my own small projects from scratch.</p> <p>React has a learning curve, sure—but it's also a launchpad. It challenged how I thought about code and made me appreciate the power of modular thinking. Every time I build a new component now, I feel like I’m unlocking a new level in the game. And the best part? I’m just getting started.</p>`
    },
    {
        id: 3,
        date: "7/10/24",
        image: "images/card1.png",
        title: "My First Layout with Flexbox",
        body: `<p>Learning CSS wasn’t easy, but one day, I came across Flexbox. It was confusing at first, trying to understand all the properties. But after a few days of tinkering, I managed to create a responsive layout for the first time! Seeing my design adjust to different screen sizes felt like magic. It was a major win that boosted my confidence. The moment made me realize that I could solve any problem if I kept at it.</p>
        
        <p>Once I got the hang of Flexbox, I started seeing layout problems as puzzles I could solve instead of roadblocks. I began experimenting with alignment, spacing, and nesting elements in new ways. Suddenly, things like centering a div—something that used to feel impossible—became second nature. It felt empowering to finally have control over how my content looked and behaved across devices.</p> <p>That small breakthrough with Flexbox opened the door to a deeper love of CSS. I started reading about Grid, animations, and custom properties. Each new technique added another tool to my toolkit. What used to feel like frustrating trial and error turned into creative play. I learned that with patience and persistence, even the most intimidating concepts can become second nature. And that mindset has carried me into every new challenge I face in coding.</p>
        
        <p>Looking back, I realize that learning Flexbox wasn’t just about mastering a layout tool—it was about learning how to learn. That moment taught me to trust the process, embrace frustration as part of growth, and celebrate the small wins along the way. It reminded me that every developer, no matter how experienced, once struggled with the basics. And that means I’m exactly where I need to be.</p>`
    },
    {
        id: 2,
        date: "4/09/25",
        image: "images/card9.jpg",
        title: "Choices - My First Time Using Radio Buttons and Checkboxes",
        body: `<p>When I first came across radio buttons and checkboxes in HTML, I thought, “How hard could this be?” Just a couple of inputs with a different "type", right? Well, sort of. At first, I didn’t really understand when to use one versus the other. I just knew I wanted to let users make selections—and these seemed like the right tools.</p> <p>Checkboxes were pretty straightforward. I loved how easy it was to let someone pick more than one option. But when I started using radio buttons, I ran into confusion. Why were they grouped together sometimes, and other times they seemed to act independently? That’s when I learned about the magic of the "name" attribute—how all radio buttons with the same "name" are part of a group, and only one can be selected. Once that clicked, I felt like a little door opened in my brain.</p>
        
        <p>Styling them was another adventure. On their own, they looked plain and clunky. But with a little CSS (and a lot of trial and error), I managed to make them more user-friendly and visually clean. I even created a mini survey with checkboxes for hobbies and radio buttons for gender selection. It wasn’t fancy, but it worked—and it was interactive. That was a big win for me.</p>
        
        <p>It’s funny how something so simple can be such a big learning experience. Radio buttons and checkboxes taught me about grouping, user interface thinking, and how even the smallest elements need attention. I came out of it not just with working forms, but with a better understanding of what it means to design for humans.</p>
        
        <p><em>"Every great story begins with a choice — even if it’s just checking the right box." — Unknown</em></p>`
    },
    {
        id: 1,
        date: "5/08/24",
        image: "images/card2.png",
        title: "JavaScript Arrays, My First Struggle",
        body: `<p>JavaScript seemed like a beast compared to HTML and CSS, especially when I encountered arrays. I remember the frustration of trying to loop through an array and manipulate data. After hours of trial and error, I finally got it to work. It felt like solving a puzzle, and that “aha” moment was incredibly rewarding. It taught me to appreciate the process and reminded me that every failure is a step closer to success.</p>
        
        <p>That moment changed how I approached learning JavaScript. Instead of fearing what I didn’t know, I started to get curious about how things worked under the hood. I began experimenting more—breaking things on purpose just to figure out how to fix them. I realized that understanding arrays opened the door to so many possibilities: organizing data, rendering dynamic content, and even building games. It was like unlocking a superpower I didn’t know I had.</p> <p>Looking back, I'm grateful for those early struggles. They made me more patient, more resourceful, and more confident. Every time I figure something out in JavaScript, no matter how small, it fuels me to keep going. Arrays were just the beginning. Now I look at challenges not as obstacles, but as invitations to level up. That mindset shift has been just as valuable as the technical skills I've picked up along the way.</p>`
    },
    {
        id: 0,
        date: "2/09/24",
        image: "images/card3.png",
        title: "The Day I Made My First Form Work",
        body: `<p>Forms in HTML seemed simple at first—just a few fields, right? But making the form validate user input using JavaScript was another story. I struggled with it for days. When I finally managed to get all the validation checks working, I felt like a true programmer. That experience showed me that every small win counts, especially when you're just starting.</p>
        
        <p>Form validation taught me more than just conditionals and event listeners—it taught me patience. Each time I thought I had it figured out, a new bug would pop up, forcing me to dig deeper and think more critically about how my code was behaving. But with every fix, I felt more capable. It wasn’t just about catching empty fields or mismatched emails—it was about building something reliable, something that users could actually interact with confidently.</p> 
        
        <p>That project helped me see how JavaScript brings HTML to life. It’s one thing to design a form, but it’s another to make it smart and user-friendly. It made me appreciate how thoughtful design and functional code go hand-in-hand. Now, when I tackle new features, I carry that lesson with me: small interactions can have a big impact, and even the simplest tools can teach you powerful lessons.</p>
        
        <p><em>"The details are not the details. They make the design." — Charles Eames</em></p>`
    }
]

export default initialPosts