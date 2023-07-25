import React from "react";

//a constructed list of posts to appear on the page.
const posts = [
	{
		id: 0,
		postName: "PRETTY HATE MACHINE",
		postDescription: "1989 - NINE INCH NAILS CLASSIC FIRST RECORD, PRODUCED BY TRENT REZNOR WITH FLOOD, JOHN FRYER, KEITH LEBLANC AND ADRIAN SHERWOOD.",
		// postImage: "https://github.com/labs404/jay-labs-react-landing-page/blob/main/src/img/pretty-hate.jpg?raw=trueadded"
        postImage: "https://www.nin.com/wp-content/uploads/2016/08/600px-Halo-2-500x500.jpg"
	},
	{
		id: 1,
		postName: "BROKEN",
		postDescription: "1992 - RECORDED IN SECRET TO AVOID INTERFERENCE FROM THE RECORD LABEL, THE FOLLOW-UP TO PRETTY HATE MACHINE TAKES AN UNEXPECTED ABRUPT TURN INTO SHEER AGGRESSION.",
		postImage: "https://www.nin.com/wp-content/uploads/2016/08/HALO_05_BROKEN_2016_album_cover_srgb_medium-500x500.jpg"
	},	
	{
		id: 2,
		postName: "THE DOWNWARD SPIRAL",
		postDescription: "1994 - A BLEAK AND UNFLINCHING CELEBRATION OF SELF-DESTRUCTION IN THE FORM OF A CONCEPT RECORD THAT SOMEHOW MANAGED TO BECOME A MULTI-PLATINUM WORLDWIDE HIT.  ONE OF THE MOST ADVENTUROUS AND EXPERIMENTAL SOUNDING RECORDS TO EVER TOP THE CHARTS.",
		postImage: "https://www.nin.com/wp-content/uploads/2016/08/HALO_08_TDS_2016_album_cover_srgb_medium-500x500.jpg"
	},	
	{
		id: 3,
		postName: "THE FRAGILE",
		postDescription: "1999 - HIDING FROM THE WORLD AND HIMSELF IN A NEW ORLEANS STUDIO FOR SEVERAL YEARS, A DAMAGED REZNOR CREATES THE SPRAWLING OPUS THE FRAGILE AND THE PALETTE ONCE AGAIN EXPANDS FOR WHAT TO EXPECT FROM NINE INCH NAILS.  A DENSE AND DIFFICULT LISTEN REQUIRING ATTENTION AND REPEATED LISTENINGS, IT IS NOW CONSIDERED BY MANY HARDCORE FANS TO BE THEIR FAVORITE NIN RECORD.",
		postImage: "https://www.nin.com/wp-content/uploads/2016/08/THEFRAGILE_2016_album_cover_srgb_large-500x500.jpg"
	},	
	{
		id: 4,
		postName: "WITH TEETH",
		postDescription: "2005 - AFTER NEARLY DYING MAKING AND TOURING THE FRAGILE, REZNOR CLEANS UP AND REDISCOVERS HIMSELF WITH THE AGGRESSIVE AND ACCESSIBLE WITH TEETH.  GUITARS, HOOKS, DAVE GROHL.",
		postImage: "https://www.nin.com/wp-content/uploads/2016/08/WITH_TEETH_digital_cover_web_JUL10_FIN4-500x500.jpg"
	},	
	{
		id: 5,
		postName: "YEAR ZERO",
		postDescription: "2007 - MUSICALLY AND CONCEPTUALLY WAY AHEAD OF ITS TIME.  AN ELABORATE CONCEPT RECORD SET IN THE NEAR FUTURE (OR THE PRESENT, DEPENDING ON HOW YOU LOOK AT THE POST-TRUMP WORLD), EACH SONG  IS A “SNAPSHOT” OF LIFE SET AGAINST ELABORATELY DECONSTRUCTED ELECTRONICS.  A PUZZLE-BOX THAT REWARDS THE REPEAT LISTENER.",
		postImage: "https://www.nin.com/wp-content/uploads/2016/08/5-YEAR-ZERO.jpg"
	},	
	{
		id: 6,
		postName: "GHOSTS I-IV",
		postDescription: "2008 - DESCRIBED AS “SOUNDTRACKS FOR DAYDREAMS”, GHOSTS I-IV IS A SPRAWLING, ENTIRELY IMPROVISED, INSTRUMENTAL JOURNEY.  MEANT TO BE LISTENED TO ON A RAINY DAY OR A LONG NIGHT DRIVE. REZNOR’S CAREER AS A SUCCESSFUL FILM COMPOSER CAN BE DIRECTLY LINKED TO THIS EXPERIMENT.",
		postImage: "https://www.nin.com/wp-content/uploads/2016/08/6-GHOSTS-500x500.jpg"
	},	
	{
		id: 7,
		postName: "THE SLIP",
		postDescription: "2008 - DESCRIBED BY REZNOR AS “GARAGE ELECTRONICS”, THE SLIP WAS THE RESULT OF AN INSPIRED THREE WEEKS FOLLOWING THE COMPLETION OF GHOSTS I-IV.  AN EXPERIMENT IN WORKING WITH A COMPRESSED TIMELINE, THE RESULTS MAKE FOR A NOISY, SLOPPY AND EXCITING LISTEN WITH SEVERAL SONGS THAT HAVE BEEN LIVE STAPLES.",
		postImage: "https://www.nin.com/wp-content/uploads/2016/08/7-THE-SLIP.jpg"
	},
	{
		id: 8,
		postName: "HESITATION MARKS",
		postDescription: "2013 - SIMULTANEOUSLY REFERENCING THE PAST WHILE POINTED TO THE FUTURE, HESITATION MARKS FINDS NIN RELENTLESSLY EXPERIMENTING WITH NEW TEXTURES, DEEP GROOVES AND RESTRAINT.  THE RESULT MAKES FOR A DEEP, ACCESSIBLE LISTEN WITH LOTS HIDDEN UNDER THE SURFACE.",
		postImage: "https://www.nin.com/wp-content/uploads/2016/08/8-Hesitation-Marks-500x500.jpg"
	},
	{
		id: 9,
		postName: "NOT THE ACTUAL EVENTS",
		postDescription: "2016 - PART ONE OF A THREE EP TRILOGY OF RECORDS.  UNAPOLOGETIC, UNFRIENDLY, DENSE, LYRICALLY COMPLEX, SO-FAR-BEHIND-THE-TIMES-IT’S-AHEAD-OF-ITS-TIME, HIPSTER-REPELLING UNCOMPROMISING MUSIC SMART PEOPLE CAN FUCK TO.  IT MAY NOT BE FOR YOU.",
		postImage: "https://www.nin.com/wp-content/uploads/2016/12/5ADDF4B9-5D58-4084-92C0-14B7BA1FB548-500x500.jpeg"
	},
	{
		id: 10,
		postName: "ADD VIOLENCE",
		postDescription: "2017 - PART TWO. THE VIEW WIDENS AND EVERYTHING IS IN QUESTION.",
		postImage: "https://www.nin.com/wp-content/uploads/2017/07/AV_front_cover_JUL_7_wip38_fin_2000x2000-500x500.jpg"
	},
	{
		id: 11,
		postName: "BAD WITCH",
		postDescription: "2018 - CONCLUSION.  SHADOWS ON THE CAVE WALL.",
		postImage: "https://www.nin.com/wp-content/uploads/2018/05/NIN_BadWitch_Cover_Final_Web_1000-500x500.jpg"
	},
	{
		id: 12,
		postName: "GHOSTS V: TOGETHER",
		postDescription: "2020 - HALO 33",
		postImage: "https://www.nin.com/wp-content/uploads/2020/03/Ghosts_TOGETHER_fin1_1000x1000-500x500.jpg"
	},
	{
		id: 13,
		postName: "GHOSTS VI: LOCUSTS",
		postDescription: "2020 - HALO 34",
		postImage: "https://www.nin.com/wp-content/uploads/2020/03/Ghosts_LOCUSTS_fin1_1000x1000-500x500.jpg"
	}
]


//generates html object for each item in thelist of posts from above.
const listItems = posts.map((post) =>
    <div key={post.id} className="container col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 pb-5 mt-3 d-flex justify-content-center align-items-center">
        <div className="jaysCard card container-fluid p-0 m-0 bg-dark border border-danger-subtle" style={{width: "400px", height: "650px"}}>
            <img src={post.postImage} className="cardImage card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{post.postName}</h5>
                <p className="card-text">{post.postDescription}</p>
                <div className="position-absolute bottom-0 end-0 pe-3">
                    <p className="text-end sticky-bottom"><a href="https://open.spotify.com/artist/0X380XXQSNBYuleKzav5UO" className="btn btn-outline-danger" target="_blank">Spotify</a></p>
                </div>
            </div>
        </div>
    </div>
);

//creates the function Card() -- which calls 'listItems' to populate html objects from an array.
const Card = () => {
    return(
        <>{listItems}</>
    );
}

export default Card;