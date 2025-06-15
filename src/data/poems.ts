export interface Poem {
  id: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
  preview: string;
}

export const poems: Poem[] = [
  // Example poem (paste the rest from original Blog.tsx if needed)
  {
    id: 'a-day-after-i-died',
    title: 'a day after i died',
    date: 'no date',
    tags: ['death', 'existence', 'peace'],
    preview: "what's left in me / there is none / search for reason / but it is done",
    content: `what's left in me
there is none
search for reason
but it is done

a society without me
a splendid dream
luscious and vast
colorful, a fresh new start

oh trust me, silence gets you crazy
makes you question everything and everyone 
a rampage within self
till there is left none

i look upon the people mourning on me
the very people i despised 
i wonder if it's just an act but oh wait
i'm dead, so it's too late

it's pretty peaceful here
i have to say
i feel freedom that i have never felt before
makes me feel okay

she was the only one who accepted me with open arms
she-

off i go wandering to nowhere
somehow, i don't even care
maybe it's because i can't 
because im dead, a life i once had`
  },
  {
  id: 'all-by-myself',
  title: 'all by myself',
  date: '12-08-24',
  tags: ['loneliness', 'perseverance', 'night'],
  preview: "i wanna walk with you somewhere in the edges of night / too bad you're not here...",
  content: `i wanna walk with you somewhere in the edges of night
too bad you're not here, so i have to keep looking for some light
i gotta keep pushing and keep up the fight
through the darkest of days and the endless of nights`
}, {
  id: 'you-did-this-to-yourself',
  title: 'you did this to yourself',
  date: 'no date',
  tags: ['self-blame', 'emptiness', 'abandonment'],
  preview: "all the poetry i have to offer / all the jokes both good and bad / yet that emptiness lingers",
  content: `all the poetry i have to offer
all the jokes both good and bad
yet that emptiness lingers

maybe i simply was never enough
is it my fault, is it yours?
doesn't matter, because the emptiness still lingers

it's wrong to complain about problems
it's wrong to smile through the pain
unless there isn't anything to feel, because the emptiness lingers

people will leave you
and you will suffer
all that is left is the emptiness you have become`
}, {
  id: 'lies',
  title: 'lies',
  date: 'no date',
  tags: ['deception', 'existence', 'facade'],
  preview: "in lies i wander / in broken promises i stand / in anonymity i continue to exist",
  content: `in lies i wander
in broken promises i stand
in anonymity i continue to exist
alone till i cease to exist

her face is nothing more than a facade
hiding dirty secrets waiting to be cast
(....unfinished noises....)`
}, {
  id: 'delusional',
  title: 'delusional',
  date: 'no date',
  tags: ['fantasy', 'longing', 'memory'],
  preview: "i see you on the sidewalks / i see you on the billboards",
  content: `i see you on the sidewalks
i see you on the billboards

that's how i remember it, as it never was
just a speculation without a cause

now i look upon the night sky
wish upon a star
that you hold my hand
and never away far`
}, {
  id: 'eyes-wide-open',
  title: 'eyes wide open',
  date: 'continuation to "blindfold"',
  tags: ['realization', 'love', 'awakening'],
  preview: "you lived rent free in my head / i lied, i did like it...",
  content: `you lived rent free in my head
i lied, i did like it. 
i knew we'd never be together
but then, i still wanted it

you and your stupid eyes
i was bound by it. 
your words full of lies
i was obsessed with it. 

you were pretty, but were you ever beautiful?
were you ever more than your stupid smile and face?
i don't know
but maybe it finally came pretty slow

you lived rent free in my head
i have finally stopped it. 
we'd never be together
you will never be my lover.`
}, {
  id: 'blindfold',
  title: 'blindfold',
  date: 'no date',
  tags: ['obsession', 'love', 'beauty'],
  preview: "you live rent free in my head / i don't like it...",
  content: `you live rent free in my head
i don't like it. 
i wish we could be together
i really want it. 

your eyes befool me
i am bound by it. 
your words kill me
i am obsessed with it. 

god, why are you so beautiful?
your eyes, your voice, your thoughts, your emotions
it is all you. 
just you. 

you live rent free in my head
i can't stop it. 
i wish we could be together
can i be your lover?`
}, {
  id: 'bucky',
  title: 'bucky',
  date: '2023?',
  tags: ['unrequited', 'regret', 'fear'],
  preview: "You see, there was this person called as Bucky / And Oh man, was I lucky",
  content: `You see, there was this person called as Bucky
And Oh man, was I lucky
She was the epitome of being kind
And it completely baffled my mind

Oh the times she looked at me with her round eyes
But I didn't understand that I'm about to get myself bound with lies
I wanted to get to know more about her
But there was one thing holding me back, and that was fear

I tried a million ways to spark a conversation
Guess what, our relationship was nowhere close to motion
We were nothing more than strangers looking at each other
Unfortunately or fortunately it seems all over

One day, she came to talk as a friend
It looks like she had something to lend
Was it love? Was it kindness? You may ask
Nothing serious, it was just a notebook for the upcoming class

The relationship made some progress, but there was something in lack
I was too far from where I started so there was no looking back
I was bombarded by the thoughts of being friend zoned
In the end, all I wanted was a chance to be unalone

The source of regret, was fear
My feelings to her was never clear
Time went by, lightning could strike
I soon came to realize, I was never the person she liked

It felt like getting hit by a truck
It made me feel that I just suck
I wanted go back and start again
'Cause no matter what, I'll love her till the end

I loved her so, so much
But I didn't make my chance to tell her as such
I had no choice but to move on
Regardless of whether it was right or wrong

You see, there was this person called as Bucky
But she and I were never meant to be
Her kindness, an experience to live by
Nevertheless, it was all a lie.`
}, {
  id: 'early',
  title: 'Early',
  date: '08-30-24',
  tags: ['mortality', 'fear', 'sickness'],
  preview: "If my life is like the snow, / That fades before the morning sun...",
  content: `If my life is like the snow,
That fades before the morning sun.
Then I can't help but wish to know,
Am I the only one?

The only one to never see the light,
To never feel its touch, bring a smile to my face.
The only one to suffer out of sight,
Rotting in this bed, destined to miss its grace.

I- I guess what I'm trying to say… Oh fuck poetry I'm scared. 
Scared I wont see the next day. Scared that my heart is beginning to stray. Scared that every day leading up to this moment has amounted to nothing more than just okay. Scared that I will lay here lifeless and gray watching helplessly as my friends and family pray.  Pray that the doctors will somehow miraculously find a way to keep the sickness at bay. And I'm scared that this time things might actually not go my way. 

Maybe I'm just unlucky, maybe this future just wasn't for me, Maybe this short life really was all I was meant to see.

I still wonder if my life were like the stone,
Who eternally smiles upon the rising sun,
Would I have ever gotten the chance,
To be someone.`
}];
