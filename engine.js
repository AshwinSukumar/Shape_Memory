
/* =========================================================================
   SHAPE MEMORY TASK — the whole study in one file.

   Practice, Part 1, Part 2 and Part 3 all live here. Which screen you get
   is decided by the address, and moving between screens is a real browser
   navigation, so the page reloads and the URL changes just as it would on
   any ordinary website.

       index.html                            welcome and participant ID
       index.html?trial=practice-01&phase=fix
       index.html?trial=part1-03&phase=fix        the +            500 ms
       index.html?trial=part1-03&phase=show       the shapes      2500 ms
       index.html?trial=part1-03&phase=gap        blank           1200 ms
       index.html?trial=part1-03&phase=ask        target + grid   until click
       index.html?trial=part1-03&phase=feedback   the result
       index.html?trial=part2-01&phase=fix        ... and so on
       index.html?view=break&after=Part+1         break between parts
       index.html?trial=finished                  thank-you screen
       index.html?view=collect                    researcher data export

   Every phase is its own page visit, so Tobii Pro Lab captures one
   screenshot per screen rather than one screenshot of a screen that keeps
   changing.
   ========================================================================= */

/* ---- Language: 'en' or 'ar'. The only difference between the two builds. */
const LANG = 'en';

/* ---- Every trial in the study, in the order they are run.
        Practice and Part 1 first, then Part 2, then Part 3. Breaks are
        inserted automatically wherever the part changes. ---- */
const TRIALS = [{"key":"practice-01","cfg":{"part":"Practice","conditionCode":"practice","trialNumber":1,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_3":"circle","AOI_4":"triangle","AOI_1":"square"},"target":"circle","targetLocation":"AOI_3","isPractice":true,"showProgress":false}},{"key":"practice-02","cfg":{"part":"Practice","conditionCode":"practice","trialNumber":2,"grid":{"rows":2,"cols":2},"objects":["square","circle","triangle"],"placement":{"AOI_1":"square","AOI_2":"circle","AOI_3":"triangle"},"target":"square","targetLocation":"AOI_1","isPractice":true,"showProgress":false}},{"key":"practice-03","cfg":{"part":"Practice","conditionCode":"practice","trialNumber":3,"grid":{"rows":2,"cols":2},"objects":["triangle","circle","square"],"placement":{"AOI_4":"triangle","AOI_1":"circle","AOI_2":"square"},"target":"triangle","targetLocation":"AOI_4","isPractice":true,"showProgress":false}},{"key":"practice-04","cfg":{"part":"Practice","conditionCode":"practice","trialNumber":4,"grid":{"rows":2,"cols":2},"objects":["circle","square","triangle"],"placement":{"AOI_2":"circle","AOI_3":"square","AOI_1":"triangle"},"target":"circle","targetLocation":"AOI_2","isPractice":true,"showProgress":false}},{"key":"trial-1","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":1,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_1":"circle","AOI_2":"triangle","AOI_4":"square"},"target":"circle","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-2","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":2,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_1":"circle","AOI_4":"triangle","AOI_3":"square"},"target":"circle","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-3","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":3,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_2":"circle","AOI_4":"triangle","AOI_3":"square"},"target":"circle","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-4","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":4,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_2":"circle","AOI_4":"triangle","AOI_3":"square"},"target":"circle","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-5","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":5,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_3":"circle","AOI_2":"triangle","AOI_1":"square"},"target":"circle","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-6","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":6,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_3":"circle","AOI_2":"triangle","AOI_1":"square"},"target":"circle","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-7","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":7,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_4":"circle","AOI_3":"triangle","AOI_1":"square"},"target":"circle","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-8","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":8,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_4":"circle","AOI_1":"triangle","AOI_3":"square"},"target":"circle","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-9","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":9,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_1":"triangle","AOI_3":"circle","AOI_4":"square"},"target":"triangle","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-10","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":10,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_1":"triangle","AOI_2":"circle","AOI_4":"square"},"target":"triangle","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-11","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":11,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_2":"triangle","AOI_3":"circle","AOI_1":"square"},"target":"triangle","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-12","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":12,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_2":"triangle","AOI_3":"circle","AOI_1":"square"},"target":"triangle","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-13","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":13,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_3":"triangle","AOI_1":"circle","AOI_2":"square"},"target":"triangle","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-14","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":14,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_3":"triangle","AOI_2":"circle","AOI_1":"square"},"target":"triangle","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-15","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":15,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_4":"triangle","AOI_2":"circle","AOI_1":"square"},"target":"triangle","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-16","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":16,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_4":"triangle","AOI_3":"circle","AOI_2":"square"},"target":"triangle","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-17","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":17,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_1":"square","AOI_2":"circle","AOI_3":"triangle"},"target":"square","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-18","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":18,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_1":"square","AOI_4":"circle","AOI_3":"triangle"},"target":"square","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-19","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":19,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_2":"square","AOI_3":"circle","AOI_4":"triangle"},"target":"square","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-20","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":20,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_2":"square","AOI_4":"circle","AOI_1":"triangle"},"target":"square","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-21","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":21,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_3":"square","AOI_1":"circle","AOI_2":"triangle"},"target":"square","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-22","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":22,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_3":"square","AOI_1":"circle","AOI_2":"triangle"},"target":"square","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-23","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":23,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_4":"square","AOI_3":"circle","AOI_1":"triangle"},"target":"square","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-24","cfg":{"part":"Part 1","conditionCode":"Part 1","trialNumber":24,"grid":{"rows":2,"cols":2},"objects":["circle","triangle","square"],"placement":{"AOI_4":"square","AOI_3":"circle","AOI_2":"triangle"},"target":"square","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-25","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":1,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_1":"diamond","AOI_5":"circle","AOI_2":"square","AOI_6":"triangle"},"target":"diamond","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-26","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":2,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_1":"diamond","AOI_5":"circle","AOI_2":"square","AOI_4":"triangle"},"target":"diamond","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-27","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":3,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_2":"diamond","AOI_1":"circle","AOI_4":"square","AOI_3":"triangle"},"target":"diamond","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-28","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":4,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_2":"diamond","AOI_3":"circle","AOI_6":"square","AOI_4":"triangle"},"target":"diamond","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-29","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":5,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_3":"diamond","AOI_5":"circle","AOI_6":"square","AOI_2":"triangle"},"target":"diamond","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-30","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":6,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_3":"diamond","AOI_4":"circle","AOI_2":"square","AOI_5":"triangle"},"target":"diamond","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-31","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":7,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_4":"diamond","AOI_3":"circle","AOI_1":"square","AOI_6":"triangle"},"target":"diamond","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-32","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":8,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_4":"diamond","AOI_2":"circle","AOI_6":"square","AOI_1":"triangle"},"target":"diamond","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-33","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":9,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_5":"diamond","AOI_6":"circle","AOI_1":"square","AOI_4":"triangle"},"target":"diamond","targetLocation":"AOI_5","isPractice":false,"showProgress":false}},{"key":"trial-34","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":10,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_5":"diamond","AOI_6":"circle","AOI_1":"square","AOI_4":"triangle"},"target":"diamond","targetLocation":"AOI_5","isPractice":false,"showProgress":false}},{"key":"trial-35","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":11,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_6":"diamond","AOI_5":"circle","AOI_2":"square","AOI_3":"triangle"},"target":"diamond","targetLocation":"AOI_6","isPractice":false,"showProgress":false}},{"key":"trial-36","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":12,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_6":"diamond","AOI_3":"circle","AOI_1":"square","AOI_4":"triangle"},"target":"diamond","targetLocation":"AOI_6","isPractice":false,"showProgress":false}},{"key":"trial-37","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":13,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_1":"circle","AOI_3":"diamond","AOI_4":"square","AOI_6":"triangle"},"target":"circle","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-38","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":14,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_1":"circle","AOI_3":"diamond","AOI_5":"square","AOI_4":"triangle"},"target":"circle","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-39","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":15,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_2":"circle","AOI_1":"diamond","AOI_5":"square","AOI_3":"triangle"},"target":"circle","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-40","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":16,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_2":"circle","AOI_1":"diamond","AOI_4":"square","AOI_3":"triangle"},"target":"circle","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-41","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":17,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_3":"circle","AOI_4":"diamond","AOI_1":"square","AOI_2":"triangle"},"target":"circle","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-42","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":18,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_3":"circle","AOI_4":"diamond","AOI_5":"square","AOI_2":"triangle"},"target":"circle","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-43","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":19,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_4":"circle","AOI_3":"diamond","AOI_5":"square","AOI_2":"triangle"},"target":"circle","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-44","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":20,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_4":"circle","AOI_3":"diamond","AOI_5":"square","AOI_6":"triangle"},"target":"circle","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-45","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":21,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_5":"circle","AOI_6":"diamond","AOI_4":"square","AOI_1":"triangle"},"target":"circle","targetLocation":"AOI_5","isPractice":false,"showProgress":false}},{"key":"trial-46","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":22,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_5":"circle","AOI_1":"diamond","AOI_3":"square","AOI_4":"triangle"},"target":"circle","targetLocation":"AOI_5","isPractice":false,"showProgress":false}},{"key":"trial-47","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":23,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_6":"circle","AOI_3":"diamond","AOI_5":"square","AOI_1":"triangle"},"target":"circle","targetLocation":"AOI_6","isPractice":false,"showProgress":false}},{"key":"trial-48","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":24,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_6":"circle","AOI_2":"diamond","AOI_1":"square","AOI_4":"triangle"},"target":"circle","targetLocation":"AOI_6","isPractice":false,"showProgress":false}},{"key":"trial-49","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":25,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_1":"square","AOI_3":"diamond","AOI_6":"circle","AOI_5":"triangle"},"target":"square","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-50","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":26,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_1":"square","AOI_6":"diamond","AOI_3":"circle","AOI_5":"triangle"},"target":"square","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-51","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":27,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_2":"square","AOI_6":"diamond","AOI_5":"circle","AOI_3":"triangle"},"target":"square","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-52","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":28,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_2":"square","AOI_1":"diamond","AOI_3":"circle","AOI_6":"triangle"},"target":"square","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-53","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":29,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_3":"square","AOI_5":"diamond","AOI_4":"circle","AOI_1":"triangle"},"target":"square","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-54","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":30,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_3":"square","AOI_4":"diamond","AOI_6":"circle","AOI_2":"triangle"},"target":"square","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-55","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":31,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_4":"square","AOI_5":"diamond","AOI_3":"circle","AOI_1":"triangle"},"target":"square","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-56","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":32,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_4":"square","AOI_6":"diamond","AOI_5":"circle","AOI_1":"triangle"},"target":"square","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-57","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":33,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_5":"square","AOI_3":"diamond","AOI_1":"circle","AOI_2":"triangle"},"target":"square","targetLocation":"AOI_5","isPractice":false,"showProgress":false}},{"key":"trial-58","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":34,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_5":"square","AOI_1":"diamond","AOI_6":"circle","AOI_4":"triangle"},"target":"square","targetLocation":"AOI_5","isPractice":false,"showProgress":false}},{"key":"trial-59","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":35,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_6":"square","AOI_2":"diamond","AOI_4":"circle","AOI_5":"triangle"},"target":"square","targetLocation":"AOI_6","isPractice":false,"showProgress":false}},{"key":"trial-60","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":36,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_6":"square","AOI_5":"diamond","AOI_3":"circle","AOI_4":"triangle"},"target":"square","targetLocation":"AOI_6","isPractice":false,"showProgress":false}},{"key":"trial-61","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":37,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_1":"triangle","AOI_5":"diamond","AOI_6":"circle","AOI_3":"square"},"target":"triangle","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-62","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":38,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_1":"triangle","AOI_5":"diamond","AOI_6":"circle","AOI_3":"square"},"target":"triangle","targetLocation":"AOI_1","isPractice":false,"showProgress":false}},{"key":"trial-63","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":39,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_2":"triangle","AOI_6":"diamond","AOI_3":"circle","AOI_5":"square"},"target":"triangle","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-64","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":40,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_2":"triangle","AOI_5":"diamond","AOI_4":"circle","AOI_1":"square"},"target":"triangle","targetLocation":"AOI_2","isPractice":false,"showProgress":false}},{"key":"trial-65","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":41,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_3":"triangle","AOI_1":"diamond","AOI_5":"circle","AOI_2":"square"},"target":"triangle","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-66","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":42,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_3":"triangle","AOI_1":"diamond","AOI_4":"circle","AOI_6":"square"},"target":"triangle","targetLocation":"AOI_3","isPractice":false,"showProgress":false}},{"key":"trial-67","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":43,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_4":"triangle","AOI_5":"diamond","AOI_1":"circle","AOI_6":"square"},"target":"triangle","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-68","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":44,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_4":"triangle","AOI_5":"diamond","AOI_2":"circle","AOI_6":"square"},"target":"triangle","targetLocation":"AOI_4","isPractice":false,"showProgress":false}},{"key":"trial-69","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":45,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_5":"triangle","AOI_2":"diamond","AOI_3":"circle","AOI_1":"square"},"target":"triangle","targetLocation":"AOI_5","isPractice":false,"showProgress":false}},{"key":"trial-70","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":46,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_5":"triangle","AOI_1":"diamond","AOI_2":"circle","AOI_4":"square"},"target":"triangle","targetLocation":"AOI_5","isPractice":false,"showProgress":false}},{"key":"trial-71","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":47,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_6":"triangle","AOI_1":"diamond","AOI_3":"circle","AOI_4":"square"},"target":"triangle","targetLocation":"AOI_6","isPractice":false,"showProgress":false}},{"key":"trial-72","cfg":{"part":"Part 2","conditionCode":"Part 2","trialNumber":48,"grid":{"rows":2,"cols":3},"objects":["diamond","circle","square","triangle"],"placement":{"AOI_6":"triangle","AOI_2":"diamond","AOI_5":"circle","AOI_1":"square"},"target":"triangle","targetLocation":"AOI_6","isPractice":false,"showProgress":false}}];

/* Single-file build: there is no next file, and this page starts and ends
   the session itself. */
const NEXT_FILE     = null;
const IS_FIRST_FILE = true;
const IS_LAST_FILE  = true;

/* =========================================================================
   PER-SESSION TRIAL ORDER
   The cards (trials) are fixed. Their PRESENTATION ORDER is randomised once
   per participant, saved in localStorage, and then followed across every
   page of the session. Practice stays in its fixed order; Part 1 and Part 2
   are each shuffled WITHIN themselves (Part 1 always before Part 2, with the
   break between them). The shuffle is constraint-filtered: no target shape
   or target location repeats 3+ times in a row, no identical layout appears
   back-to-back, and a perfectly alternating location pattern is rejected.
   ========================================================================= */
const ORDER_KEY  = 'lmt_order';
const CFG_BY_KEY = {};
TRIALS.forEach(t => { CFG_BY_KEY[t.key] = t.cfg; });

function layoutSig(cfg){
  const p = cfg.placement || {};
  const cells = Object.keys(p).sort().map(k => k + ':' + p[k]).join(',');
  return cfg.target + '@' + cfg.targetLocation + '|' + cells;
}
function shuffledKeys(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function orderOK(keys){
  let shapeRun = 1, locRun = 1;
  for (let i = 1; i < keys.length; i++){
    const a = CFG_BY_KEY[keys[i - 1]], b = CFG_BY_KEY[keys[i]];
    shapeRun = (b.target === a.target) ? shapeRun + 1 : 1;
    locRun   = (b.targetLocation === a.targetLocation) ? locRun + 1 : 1;
    if (shapeRun >= 3 || locRun >= 3) return false;   // 2 in a row allowed, 3+ not
    if (layoutSig(a) === layoutSig(b)) return false;  // no identical layout twice running
  }
  // reject a perfectly period-2 alternation of target location (too predictable)
  if (keys.length >= 4){
    let periodic = true;
    for (let i = 2; i < keys.length; i++){
      if (CFG_BY_KEY[keys[i]].targetLocation !== CFG_BY_KEY[keys[i - 2]].targetLocation){ periodic = false; break; }
    }
    if (periodic) return false;
  }
  return true;
}
function shuffleBlock(keys){
  if (keys.length < 2) return keys.slice();
  for (let attempt = 0; attempt < 500; attempt++){
    const cand = shuffledKeys(keys);
    if (orderOK(cand)) return cand;
  }
  return shuffledKeys(keys);   // fallback; practically never reached
}
function buildSessionOrder(){
  const practice = TRIALS.filter(t => t.cfg.isPractice).map(t => t.key);   // fixed order
  const byPart = {};
  TRIALS.filter(t => !t.cfg.isPractice).forEach(t => {
    (byPart[t.cfg.part] = byPart[t.cfg.part] || []).push(t.key);
  });
  let order = practice.slice();
  Object.keys(byPart).forEach(p => { order = order.concat(shuffleBlock(byPart[p])); });
  return order;
}
function regenerateOrder(){
  const order = buildSessionOrder();
  try { localStorage.setItem(ORDER_KEY, JSON.stringify(order)); } catch (e){}
  return order;
}
function sessionOrder(){
  try {
    const raw = localStorage.getItem(ORDER_KEY);
    if (raw){ const a = JSON.parse(raw); if (Array.isArray(a) && a.length) return a; }
  } catch (e){}
  return regenerateOrder();
}
function nextKeyAfter(key){
  const o = sessionOrder(), i = o.indexOf(key);
  return (i >= 0 && i + 1 < o.length) ? o[i + 1] : null;
}
function positionOf(key){ return sessionOrder().indexOf(key) + 1; }
function firstKeyOfPartAfter(afterPart){
  const o = sessionOrder();
  let lastIdx = -1;
  for (let i = 0; i < o.length; i++){ if (CFG_BY_KEY[o[i]] && CFG_BY_KEY[o[i]].part === afterPart) lastIdx = i; }
  for (let i = lastIdx + 1; i < o.length; i++){ if (CFG_BY_KEY[o[i]] && CFG_BY_KEY[o[i]].part !== afterPart) return o[i]; }
  return null;
}

/* ---- Styling, injected so there is nothing else to upload ---- */
(function injectStyles(){
  const el = document.createElement('style');
  el.textContent = "/* =========================================================\n   Location Memory Task \u2014 stylesheet\n   Design surface: 1920 x 1080, uniformly scaled to the viewport.\n   Grid geometry (cell size, icon size, number of cells) is set\n   from script.js so each part can use a different grid.\n   ========================================================= */\n\n:root{\n  --scale: 1;\n\n  /* Neutral research-task palette (deliberately low-chroma) */\n  --bg:            #ffffff;\n  --ink:           #1d1d1f;\n  --ink-soft:      #5b5f66;\n  --cell-line:     #dcdfe4;\n  --cell-line-hov: #9aa1ab;\n  --cell-fill:     #fbfbfc;\n  --accent:        #2f6f8f;\n  --correct:       #4f9c58;\n  --retry:         #c4715f;\n\n  /* Vertical anchor of the grid centre (constant for both parts) */\n  --grid-center-y: 586px;\n}\n\n*{ box-sizing: border-box; }\n\nhtml, body{\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;                 /* no scrolling */\n  background: var(--bg);\n  color: var(--ink);\n  font-family: \"Segoe UI\", \"Noto Sans Arabic\", Tahoma, \"Helvetica Neue\", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* ---------- Stage ---------- */\n#stage{\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  width: 1920px;\n  height: 1080px;\n  transform: translate(-50%, -50%) scale(var(--scale));\n  transform-origin: center center;\n  background: var(--bg);\n}\n\n.hidden{ display: none !important; }\n\n/* ---------- Instruction / welcome screens ---------- */\n.screen{\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 0 220px;\n  text-align: center;\n  background: var(--bg);\n}\n\nh1{\n  font-size: 62px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  margin: 0 0 26px;\n}\n\nh2{\n  font-size: 52px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n  margin: 0 0 22px;\n}\n\n.body-text{\n  font-size: 30px;\n  line-height: 1.5;\n  color: var(--ink-soft);\n  margin: 4px 0;\n  max-width: 960px;\n}\n\n.field{\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n\n.field label{\n  font-size: 22px;\n  color: var(--ink-soft);\n  letter-spacing: 0.3px;\n}\n\n.field input{\n  width: 320px;\n  padding: 14px 18px;\n  font-size: 26px;\n  text-align: center;\n  color: var(--ink);\n  border: 2px solid var(--cell-line);\n  border-radius: 10px;\n  outline: none;\n  background: #fff;\n}\n\n.field input:focus{ border-color: var(--accent); }\n\n.field-error{\n  min-height: 26px;\n  font-size: 20px;\n  color: #a8402f;\n}\n\n.btn{\n  margin-top: 36px;\n  padding: 18px 62px;\n  font-size: 28px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #fff;\n  background: var(--accent);\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n}\n\n.btn:hover{ background: #275f7c; }\n.btn:focus-visible{ outline: 3px solid #1d1d1f; outline-offset: 3px; }\n\n.btn-secondary{\n  color: var(--accent);\n  background: #fff;\n  border: 2px solid var(--accent);\n}\n.btn-secondary:hover{ background: #eef4f8; }\n\n.button-row{\n  display: flex;\n  gap: 28px;\n  align-items: center;\n}\n\n/* ---------- Task layer ---------- */\n#task-layer{\n  position: absolute;\n  inset: 0;\n}\n\n/* Prompt zone: fixed height, always reserved (empty when unused) so the\n   grid below never shifts. Laid out as a row so the target icon can be\n   large without pushing the grid down. */\n#prompt-zone{\n  position: absolute;\n  top: 18px;\n  left: 0;\n  right: 0;\n  height: 132px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 36px;\n  pointer-events: none;\n}\n\n#prompt-text{\n  font-size: 38px;\n  font-weight: 600;\n  color: var(--ink);\n  letter-spacing: -0.2px;\n}\n\n#feedback-text{\n  font-size: 76px;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n\n#feedback-text.correct{ color: var(--correct); }\n#feedback-text.retry{   color: var(--accent);  }\n\n.target-icon{\n  width: 128px;\n  height: 128px;\n}\n\n.target-icon:empty{ display: none; }\n.target-icon svg{ width: 100%; height: 100%; display: block; }\n\n/* Fixation cross \u2014 centre of the grid area */\n#fixation{ position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: var(--fix-size, 220px); line-height: 1; font-weight: 700; color: #000; user-select: none;}\n\n/* ---------- Grid ----------\n   Width, height, columns, rows, gap and cell size are all written by\n   script.js so Part 1 and Part 2 can use different numbers of boxes\n   while staying centred on the same point. */\n/* Hidden (but still laid out) whenever the fixation cross is on screen */\n#grid.grid-hidden{ visibility: hidden; }\n\n#grid{\n  direction: ltr;\n  position: absolute;\n  left: 50%;\n  top: var(--grid-center-y);\n  transform: translate(-50%, -50%);\n  display: grid;\n}\n\n.cell{\n  border: 3px solid var(--cell-line);\n  border-radius: 16px;\n  background: var(--cell-fill);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Clickable only during the response window */\n.cell.clickable{ cursor: pointer; }\n.cell.clickable:hover{ border-color: var(--cell-line-hov); }  /* subtle only */\n\n.cell.correct{ border-color: var(--correct); }\n\n/* The one-time peek under a wrongly chosen box */\n.cell.hint{\n  border-color: #93A3AE;\n  background: #F3F6F8;\n}\n\n.empty-label{\n  color: #8B9098;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n.cell.shake{\n  border-color: var(--retry);\n  animation: cell-shake 500ms ease;\n}\n\n@keyframes cell-shake{\n  0%, 100% { transform: translateX(0); }\n  12%      { transform: translateX(-14px); }\n  26%      { transform: translateX(14px); }\n  40%      { transform: translateX(-11px); }\n  54%      { transform: translateX(11px); }\n  68%      { transform: translateX(-6px); }\n  84%      { transform: translateX(6px); }\n}\n\n/* Reduced motion: keep the colour cue, drop the movement */\n@media (prefers-reduced-motion: reduce){\n  .cell.shake{ animation: none; }\n}\n\n.cell-icon{\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cell-icon svg{ width: 100%; height: 100%; display: block; }\n\n/* ---------- Progress ---------- */\n#progress{\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 30px;\n  text-align: center;\n  font-size: 20px;\n  letter-spacing: 0.6px;\n  color: #a9aeb5;\n  user-select: none;\n}\n\n\n/* ---------- Practice clap ---------- */\n.clap{\n  width: 132px;\n  height: 132px;\n}\n.clap svg{ width: 100%; height: 100%; display: block; }\n.clap.show{ animation: clap-pop 700ms ease-out; }\n\n@keyframes clap-pop{\n  0%   { transform: scale(0.55); opacity: 0; }\n  35%  { transform: scale(1.12); opacity: 1; }\n  55%  { transform: scale(0.96); }\n  70%  { transform: scale(1.04); }\n  100% { transform: scale(1);    opacity: 1; }\n}\n\n@media (prefers-reduced-motion: reduce){\n  .clap.show{ animation: none; }\n}\n\n/* ---------- Researcher strip (bottom of the page, not the task) ---------- */\n#researcher-footer{\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 8px 20px;\n  background: #f6f7f8;\n  border-top: 1px solid #e3e6e9;\n  font-family: \"Segoe UI\", \"Noto Sans Arabic\", Tahoma, Arial, sans-serif;\n}\n\n#t-footer-note{\n  margin-inline-end: auto;\n  font-size: 13px;\n  letter-spacing: 0.4px;\n  color: #8b9098;\n}\n\n.btn-mini{\n  padding: 7px 16px;\n  font-size: 13px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #fff;\n  background: var(--accent);\n  border: none;\n  border-radius: 7px;\n  cursor: pointer;\n}\n.btn-mini:hover{ background: #275f7c; }\n\n.btn-mini-secondary{\n  color: var(--accent);\n  background: #fff;\n  border: 1px solid var(--accent);\n}\n.btn-mini-secondary:hover{ background: #eef4f8; }\n\n\n/* ---------- Live URL readout (verification only) ---------- */\n#url-readout{\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  z-index: 30;\n  direction: ltr;\n  max-width: 100vw;\n  padding: 3px 10px;\n  font-family: ui-monospace, Consolas, monospace;\n  font-size: 11px;\n  color: #9aa1ab;\n  background: rgba(255,255,255,.92);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n#url-readout:empty{ display: none; }\n\n\n/* Standalone build: the grid must not mirror in the Arabic version */\n#grid{ direction: ltr; }\n\n\n/* ---------- Researcher data view (?view=collect) ---------- */\n.collect{ padding: 34px 40px; direction: ltr; text-align: left; }\n.collect h2{ font-size: 30px; margin: 0 0 6px; }\n.collect p{ font-size: 15px; color: #5b5f66; margin: 4px 0 16px; }\n.collect textarea{\n  width: 100%; height: 340px; font-family: ui-monospace, Consolas, monospace;\n  font-size: 11px; line-height: 1.45; padding: 10px;\n  border: 1px solid #dcdfe4; border-radius: 8px; white-space: pre; overflow: auto;\n}\n.crow{ display: flex; gap: 12px; align-items: center; margin: 14px 0; flex-wrap: wrap; }\n.ccount{ font-size: 14px; color: #5b5f66; }\n";
  document.head.appendChild(el);
})();

/* =========================================================================
   LOCATION MEMORY TASK — STANDALONE TRIAL PAGES
   Built for Tobii Pro Lab "Web" stimuli, one stimulus per trial.

   HOW THIS DIFFERS FROM A SELF-NAVIGATING TASK
   Each trial is a complete, independent web page with its own fixed URL.
   A page NEVER navigates anywhere. It runs its trial and then holds a
   blank fixation screen until Pro Lab advances the timeline to the next
   Web stimulus. Pro Lab owns the sequencing; this page owns one trial.

   Because Pro Lab advances on TIME, every trial page lasts exactly
   TRIAL_PAGE_MS milliseconds regardless of how fast the child responds.
   Set the Duration of every trial Web stimulus in Pro Lab to that value.

   The stimuli for each trial are baked into the page at build time, so a
   page shows the same trial for every participant and needs nothing
   carried over from any other page. Randomise the ORDER in Pro Lab by
   putting the trial stimuli in a Group and setting its action to Shuffle.
   ========================================================================= */

/* ---- Fixed page duration. Must match the Duration set in Pro Lab. ---- */
const TRIAL_PAGE_MS         = 15000;

/* ---- Phase timings ---- */
const FIXATION_DURATION_MS  = 500;
const MEMORY_DURATION_MS    = 2500;
const RETENTION_DURATION_MS = 1200;
const RESPONSE_TIMEOUT_MS   = 0;      // 0 = wait as long as the child needs

/* ---- Feedback and second chances ----
   These belong to PRACTICE ONLY. In the experimental trials the child gets
   one response, no indication of whether it was right, and no hint, so
   accuracy reflects memory rather than what they learned from feedback. */
const PRACTICE_ATTEMPTS     = 2;      // practice: one extra try after a miss
const EXPERIMENTAL_ATTEMPTS = 1;      // real trials: a single response
const SHOW_FEEDBACK_IN_EXPERIMENTAL = false;
const MAX_ATTEMPTS          = 2;      // kept for reference; see the two above

/** Tries allowed on this trial. */
function attemptsAllowed(cfg){
  return cfg.isPractice ? PRACTICE_ATTEMPTS : EXPERIMENTAL_ATTEMPTS;
}

/** Is any correctness feedback shown on this trial? */
function feedbackAllowed(cfg){
  return cfg.isPractice || SHOW_FEEDBACK_IN_EXPERIMENTAL;
}
const FEEDBACK_DURATION_MS  = 900;
const PRACTICE_FEEDBACK_MS  = 1100;
const SHAKE_DURATION_MS     = 520;
const HINT_DURATION_MS      = 1000;
const SHOW_HINT             = true;   // practice only, after a wrong first try

/* Neutral pause between the response and the next trial when no feedback is
   shown. Keeps the rhythm even and gives Pro Lab a clean screenshot. */
const INTERTRIAL_MS         = 900;

/* ---- What is on screen while the page waits for Pro Lab to advance ----

   THIS MATTERS FOR PRO LAB SCREENSHOTS. The manual says the screenshot of
   a web page is "captured before leaving the page", so whatever is showing
   at the END of the hold is what Pro Lab stores as the stimulus image and
   what you draw AOIs on.

     'grid'   the empty response grid, at exactly the coordinates the boxes
              occupied during the trial. This is what you want: the AOIs are
              the boxes, and nothing is revealed to the child.
     'memory' the full memory array with all icons in place. Use only if you
              want the icons visible in the Pro Lab screenshot; it shows the
              child where everything was after the trial has ended.
     'blank'  empty screen with a fixation cross. Produces an EMPTY Pro Lab
              screenshot - do not use unless you capture snapshots manually.
*/
const HOLD_SCREEN           = 'grid';

/* Set by the builder. See the note at the end of the trial engine. */
const AUTO_ADVANCE          = true;

/* Gap between trials when the page advances itself. Also the length of time
   the end-of-trial frame is on screen, which is what Pro Lab screenshots. */
const AUTO_ADVANCE_GAP_MS   = 1000;

/* ---- Layout ---- */
const GRID_AREA_PX          = 866;
const GRID_MAX_WIDTH_PX     = 1500;
const CELL_GAP_PX           = 18;
const ICON_FILL_RATIO       = 0.95;

const ROW_WORDS = { 2: ['upper', 'lower'], 3: ['upper', 'middle', 'lower'] };
const COL_WORDS = { 2: ['left', 'right'],  3: ['left', 'center', 'right']  };

/* =========================================================================
   DATA COLLECTION

   Pages do not share a session, and the Pro Lab Lab browser may start a
   fresh browser session for each Web stimulus. So each page saves its own
   result independently:

     1. POST to DATA_POST_URL, if you set one. This is the only method that
        is guaranteed to work inside the Lab browser, where the manual
        states that downloading is disabled. Strongly recommended.
     2. localStorage, which persists across pages on the same origin. The
        collect.html page reads every stored trial and gives you one CSV.
        Use this if you cannot run a server script.

   Both run at once; neither depends on the other.
   ========================================================================= */
const DATA_POST_URL   = 'https://script.google.com/macros/s/AKfycbyGadKAOSXbn9s8lg5uYL3Kuqd0FXmRtzFDIz2nVOY3tv0DJuSrlXCAC7ilEDtCAblo/exec';
const DATA_SHEET_NAME = 'Shape_Website_Latest';  // fresh tab for the split-file build's renamed columns
const STORE_PREFIX    = 'lmt_trial_';            // one localStorage key per trial
const PID_KEY         = 'lmt_participant_id';
const LOG_KEY         = 'lmt_interaction_log';   // every action, in order
const SCORE_KEY       = 'lmt_score';             // running total

/* ---- Scoring ----
   Found on the first try is worth more than found on the second. Practice
   trials are scored too but flagged, so they can be excluded in analysis. */
const SCORE_FIRST_ATTEMPT  = 1;
const SCORE_SECOND_ATTEMPT = 0.5;
const SCORE_MISS           = 0;

/* Keys for session-level context, so every log row can carry the time
   elapsed since the session and the trial began. */
const SESSION_START_KEY = 'lmt_session_start';
const TRIAL_START_KEY   = 'lmt_trial_start';

/* ---------- Language ----------
   'en' or 'ar'. This is the ONLY difference between the English and the
   Arabic build; the task itself is identical in both. */
/* LANG is declared at the top of this file */

const STRINGS = {
  en: {
    docTitle:    'Location Memory Game',
    welcomeTitle:'Location Memory Game',
    welcome1:    'You will see some pictures appear on the screen.',
    welcome2:    'Try to remember where each picture is.',
    welcome3:    'The pictures will disappear.',
    welcome4:    'Then you will see one picture again.',
    welcome5:    'Click the place where you remember seeing it.',
    pidLabel:    'Participant ID',
    pidPlaceholder: 'e.g. P001',
    pidError:    'Enter a Participant ID to continue.',
    start:       'Start',
    begin:       'Begin',
    continueBtn: 'Continue',
    practiceTitle: 'Practice',
    instruction: 'Remember where the pictures are.',
    part1Title:  'Part 1',
    part2Title:  'Part 2',
    part3Title:  'Part 3',
    readyTitle:  "Nice! You've finished practising.",
    readyBody:   'Now the real game begins.',
    break1Title: 'Great! Part 1 is complete.',
    break2Title: 'Great! Part 2 is complete.',
    breakBody:   'You can take a short break.',
    endTitle:    'All done!',
    endBody:     'Thank you for completing the activity.',
    prompt:      'Where was this picture?',
    correct:     'Correct!',
    tryNext:     'Try the next one!',
    emptyBox:    'Nothing here',
    progress:         (i, n) => `${i} of ${n}`,
    practiceProgress: (i, n) => `Practice ${i} of ${n}`,
    footerNote:  'Researcher use',
    downloadCsv: 'Download Data',
    downloadJson:'Download Event Log'
  },
  ar: {
    docTitle:    'لعبة تذكّر الأماكن',
    welcomeTitle:'لعبة تذكّر الأماكن',
    welcome1:    'سترى صورًا تظهر على الشاشة.',
    welcome2:    'حاول أن تتذكّر مكان كل صورة.',
    welcome3:    'ثم تختفي الصور.',
    welcome4:    'بعدها ترى صورة واحدة مرة أخرى.',
    welcome5:    'اضغط على المكان الذي رأيت فيه تلك الصورة.',
    pidLabel:    'رقم المشارك',
    pidPlaceholder: 'مثال: P001',
    pidError:    'أدخل رقم المشارك للمتابعة.',
    start:       'ابدأ',
    begin:       'ابدأ',
    continueBtn: 'متابعة',
    practiceTitle: 'تدريب',
    instruction: 'تذكّر أماكن الصور.',
    part1Title:  'الجزء الأول',
    part2Title:  'الجزء الثاني',
    part3Title:  'الجزء الثالث',
    readyTitle:  'أحسنت! انتهى التدريب.',
    readyBody:   'الآن تبدأ اللعبة الحقيقية.',
    break1Title: 'أحسنت! انتهى الجزء الأول.',
    break2Title: 'أحسنت! انتهى الجزء الثاني.',
    breakBody:   'يمكنك أخذ استراحة قصيرة.',
    endTitle:    'انتهينا!',
    endBody:     'شكرًا لإكمالك النشاط.',
    prompt:      'أين كانت هذه الصورة؟',
    correct:     'أحسنت!',
    tryNext:     'جرّب الصورة التالية!',
    emptyBox:    'فارغ',
    progress:         (i, n) => `${i} من ${n}`,
    practiceProgress: (i, n) => `تدريب ${i} من ${n}`,
    footerNote:  'لاستخدام الباحث',
    downloadCsv: 'تنزيل البيانات',
    downloadJson:'تنزيل سجل الأحداث'
  }
};

const S = STRINGS[LANG];

/* =========================================================================
   SHAPE LIBRARY
   Plain black silhouettes on white. No colour, no outline, no shading, so
   the only thing telling one shape from another is its form.

   Each shape carries a scale factor chosen so that every shape fits the
   same 76-unit bounding box, so all shapes render at the same visual size
   regardless of their outline.
   ========================================================================= */

const INK = '#141619';

/** Wrap a shape so it renders at a consistent visual weight. */
function svgIcon(entry){
  return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' +
         '<g fill="' + INK + '" stroke="none" transform="translate(50 50) scale(' + entry.k +
         ') translate(-50 -50)">' + entry.d + '</g></svg>';
}

const ICON_SHAPES = {
  circle:     { k: 1.0000, d: '<circle cx="50" cy="50" r="38"/>' },
  square:     { k: 1.0857, d: '<rect x="15" y="15" width="70" height="70"/>' },
  triangle:   { k: 1.0000, d: '<path d="M50 12 L88 84 L12 84 Z"/>' },
  star:       { k: 0.9048, d: '<path d="M50 10 L61.8 38.2 L92 40.5 L69 60 L76 89.5 L50 73.5 L24 89.5 L31 60 L8 40.5 L38.2 38.2 Z"/>' },
  heart:      { k: 0.9500, d: '<path d="M50 88C22 68 10 53 10 38c0-13 10-22 22-22 8 0 14 4 18 10 4-6 10-10 18-10 12 0 22 9 22 22 0 15-12 30-40 50z"/>' },
  cross:      { k: 1.0000, d: '<path d="M38 12h24v26h26v24H62v26H38V62H12V38h26z"/>' },
  moon:       { k: 0.9048, d: '<path d="M64 10a42 42 0 1 0 0 80 48 48 0 0 1 0-80z"/>' },
  arrow:      { k: 1.0000, d: '<path d="M12 38h44V18l32 32-32 32V62H12z"/>' },
  diamond:    { k: 0.9048, d: '<path d="M50 8 L88 50 L50 92 L12 50 Z"/>' },
  pentagon:   { k: 0.9744, d: '<path d="M50 10 L89 38.5 L74 85 L26 85 L11 38.5 Z"/>' },
  hexagon:    { k: 0.8636, d: '<path d="M28 16h44l22 34-22 34H28L6 50z"/>' },
  oval:       { k: 0.9500, d: '<ellipse cx="50" cy="50" rx="27" ry="40"/>' },
  rectangle:  { k: 0.9500, d: '<rect x="10" y="26" width="80" height="48"/>' },
  trapezoid:  { k: 0.9048, d: '<path d="M24 22h52l16 56H8z"/>' }
};

/** Rendered markup, cached. */
const ICON_HTML = {};
for (const n of Object.keys(ICON_SHAPES)) ICON_HTML[n] = svgIcon(ICON_SHAPES[n]);


/* Clapping hands shown after each practice trial. Drawn in the same flat
   black as the shapes so the practice screens match the task. */
const CLAP_SHAPES =
  '<g transform="rotate(-16 40 60)">' +
    '<path d="M25 57c-8-1-13 4-11 10 2 6 9 8 14 6z"/>' +
    '<rect x="23" y="36" width="29" height="46" rx="14"/>' +
  '</g>' +
  '<g transform="rotate(16 60 60)">' +
    '<path d="M75 57c8-1 13 4 11 10-2 6-9 8-14 6z"/>' +
    '<rect x="48" y="36" width="29" height="46" rx="14"/>' +
  '</g>' +
  '<g stroke="' + INK + '" stroke-width="5" stroke-linecap="round" fill="none">' +
    '<path d="M50 24V14M31 28l-6-8M69 28l6-8M17 46l-9-4M83 46l9-4"/>' +
  '</g>';

const CLAP_HTML =
  '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' +
  '<g fill="' + INK + '">' + CLAP_SHAPES + '</g></svg>';



/* =========================================================================
   UTILITIES
   ========================================================================= */

const sleep  = ms => new Promise(r => setTimeout(r, ms));
const pad2   = n => String(n).padStart(2, '0');
const isoNow = () => new Date().toISOString();
const round2 = x => (x === null || x === undefined || Number.isNaN(x)) ? '' : Math.round(x * 100) / 100;

function gridCells(g){ return g.rows * g.cols; }
function aoiIdsFor(g){
  const o = [];
  for (let i = 1; i <= gridCells(g); i++) o.push('AOI_' + i);
  return o;
}
function aoiLabelFor(g, i){
  const r = Math.floor(i / g.cols), c = i % g.cols;
  const rw = (ROW_WORDS[g.rows] || [])[r] || `row ${r + 1}`;
  const cw = (COL_WORDS[g.cols] || [])[c] || `column ${c + 1}`;
  return (rw === 'middle' && cw === 'center') ? 'center' : `${rw} ${cw}`;
}
function aoiLabelMapFor(g){
  const m = {};
  aoiIdsFor(g).forEach((id, i) => { m[id] = aoiLabelFor(g, i); });
  return m;
}

function getParticipantId(){
  try { return localStorage.getItem(PID_KEY) || ''; } catch (e){ return ''; }
}


/* =========================================================================
   DOM
   ========================================================================= */

const el = {};
let currentAOIs = [], cellByAOI = {}, currentCellSize = 0, currentGrid = null;

function grabDom(){
  ['task-layer','prompt-text','target-icon','feedback-text','clap','fixation',
   'grid','progress'].forEach(id => { el[id] = document.getElementById(id); });
}

function buildGrid(grid){
  currentGrid = grid;
  currentAOIs = aoiIdsFor(grid);
  cellByAOI = {};
  el['grid'].innerHTML = '';

  const maxH = (GRID_AREA_PX      - CELL_GAP_PX * (grid.rows - 1)) / grid.rows;
  const maxW = (GRID_MAX_WIDTH_PX - CELL_GAP_PX * (grid.cols - 1)) / grid.cols;
  const cell = Math.floor(Math.min(maxH, maxW));
  const icon = Math.round(cell * ICON_FILL_RATIO);
  currentCellSize = cell;
  document.documentElement.style.setProperty('--fix-size', cell + 'px');

  el['grid'].style.width  = (cell * grid.cols + CELL_GAP_PX * (grid.cols - 1)) + 'px';
  el['grid'].style.height = (cell * grid.rows + CELL_GAP_PX * (grid.rows - 1)) + 'px';
  el['grid'].style.gridTemplateColumns = `repeat(${grid.cols}, ${cell}px)`;
  el['grid'].style.gridTemplateRows    = `repeat(${grid.rows}, ${cell}px)`;
  el['grid'].style.gap = CELL_GAP_PX + 'px';

  currentAOIs.forEach(aoi => {
    const c = document.createElement('div');
    c.className = 'cell'; c.dataset.aoi = aoi;
    c.style.width = cell + 'px'; c.style.height = cell + 'px';
    const h = document.createElement('div');
    h.className = 'cell-icon';
    h.style.width = icon + 'px'; h.style.height = icon + 'px';
    c.appendChild(h); el['grid'].appendChild(c);
    cellByAOI[aoi] = { cell: c, holder: h };
  });
}

function fitStage(){
  const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  document.documentElement.style.setProperty('--scale', String(s));
}
window.addEventListener('resize', fitStage);

const setFixation    = v => el['fixation'].classList.toggle('hidden', !v);
const setGridVisible = v => el['grid'].classList.toggle('grid-hidden', !v);
const clearGridIcons = () => currentAOIs.forEach(a => { cellByAOI[a].holder.innerHTML = ''; });

function clearPrompt(){
  el['prompt-text'].textContent = '';
  el['target-icon'].innerHTML = '';
  el['feedback-text'].textContent = '';
  el['feedback-text'].className = '';
  clearClap();
}
function showFeedback(t, k){
  el['prompt-text'].textContent = '';
  el['target-icon'].innerHTML = '';
  el['feedback-text'].textContent = t;
  el['feedback-text'].className = k;
}
function clearFeedback(){
  el['feedback-text'].textContent = '';
  el['feedback-text'].className = '';
}
function showClap(){
  // Defensive: if the artwork is ever missing, skip the applause rather
  // than throwing, which would stop the trial from advancing.
  if (typeof CLAP_HTML === 'undefined' || !el['clap']) return;
  el['clap'].innerHTML = CLAP_HTML;
  el['clap'].classList.remove('hidden');
  void el['clap'].offsetWidth;
  el['clap'].classList.add('show');
}
function clearClap(){
  el['clap'].classList.add('hidden');
  el['clap'].classList.remove('show');
  el['clap'].innerHTML = '';
}
function showHint(aoi, obj){
  cellByAOI[aoi].cell.classList.add('hint');
  if (obj){ cellByAOI[aoi].holder.innerHTML = ICON_HTML[obj]; }
  else {
    cellByAOI[aoi].holder.innerHTML = `<span class="empty-label">${S.emptyBox}</span>`;
    const l = cellByAOI[aoi].holder.querySelector('.empty-label');
    if (l) l.style.fontSize = Math.round(currentCellSize * 0.13) + 'px';
  }
}
function clearHint(aoi){
  cellByAOI[aoi].cell.classList.remove('hint');
  cellByAOI[aoi].holder.innerHTML = '';
}


/* =========================================================================
   EVENT LOG  (per page — this page's trial only)
   ========================================================================= */

const pageEvents = [];

function logEvent(label, detail){
  const e = {
    label,
    performance_now_ms: performance.now(),
    page: location.pathname.split('/').pop(),
    iso_time: isoNow(),
    unix_ms: Date.now()
  };
  if (detail) e.detail = detail;
  pageEvents.push(e);
  console.log(`[EVENT] ${e.performance_now_ms.toFixed(2)} ms  ${label}`, detail || '');
  return e.performance_now_ms;
}

function captureAOIGeometry(placement){
  const offX = (window.screenX || 0) + (window.outerWidth - window.innerWidth) / 2;
  const offY = (window.screenY || 0) + (window.outerHeight - window.innerHeight);
  const labels = aoiLabelMapFor(currentGrid);
  return currentAOIs.map(aoi => {
    const r = cellByAOI[aoi].cell.getBoundingClientRect();
    const ie = cellByAOI[aoi].holder.firstElementChild;
    const ir = ie ? ie.getBoundingClientRect() : null;
    return {
      aoi, aoi_label: labels[aoi],
      object: placement && placement[aoi] ? placement[aoi] : null,
      x: round2(r.left), y: round2(r.top),
      width: round2(r.width), height: round2(r.height),
      center_x: round2(r.left + r.width / 2), center_y: round2(r.top + r.height / 2),
      screen_x: round2(r.left + offX), screen_y: round2(r.top + offY),
      screen_center_x: round2(r.left + r.width / 2 + offX),
      screen_center_y: round2(r.top + r.height / 2 + offY),
      icon_width: ir ? round2(ir.width) : null, icon_height: ir ? round2(ir.height) : null
    };
  });
}


/* =========================================================================
   SAVING — this page saves its own result and depends on no other page
   ========================================================================= */

function saveTrialResult(row, geom){
  const payload = { ...row, aoi_geometry: geom, events: pageEvents };

  // 1. localStorage, one key per trial page
  try {
    localStorage.setItem(STORE_PREFIX + row.trial_page, JSON.stringify(payload));
    console.log('[SAVE] stored', STORE_PREFIX + row.trial_page);
  } catch (e){ console.warn('[SAVE] localStorage failed', e); }

  // 2. POST, if configured. sendBeacon survives the page being replaced.
  //    Sent as text/plain so the cross-origin beacon to Google Apps Script is
  //    not blocked by a CORS preflight (application/json is not safelisted).
  //    The "sheet" field tells the collector which tab to write into.
  if (DATA_POST_URL){
    try {
      const body = JSON.stringify(Object.assign({ sheet: DATA_SHEET_NAME }, payload));
      if (navigator.sendBeacon){
        navigator.sendBeacon(DATA_POST_URL, new Blob([body], { type: 'text/plain;charset=UTF-8' }));
        console.log('[POST] beacon queued');
      } else {
        fetch(DATA_POST_URL, { method: 'POST', keepalive: true, mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body })
          .catch(err => console.warn('[POST] failed', err));
      }
    } catch (e){ console.warn('[POST] failed', e); }
  }
}



/* =========================================================================
   INTERACTION LOG AND SCORING

   One ordered record of everything the child did and saw, across all three
   files. Each entry is appended to localStorage the moment it happens, so
   the log survives every page load.

   Roles
     target      the picture the child is being asked to find
     distractor  one of the other pictures that was on screen
     empty       a box that had no picture in it
   ========================================================================= */

/** What is in each box, and what part it plays in this trial. */
function aoiRoles(cfg){
  const ids = aoiIdsFor(cfg.grid);
  const labels = aoiLabelMapFor(cfg.grid);
  return ids.map(aoi => {
    const obj = cfg.placement[aoi] || null;
    let role;
    if (!obj)                          role = 'empty';
    else if (aoi === cfg.targetLocation) role = 'target';
    else                               role = 'distractor';
    return { aoi, aoi_label: labels[aoi], object: obj, role };
  });
}

/** Compact text form for the CSV, e.g. "AOI_1:apple:distractor;AOI_2::empty" */
function aoiRolesString(cfg){
  return aoiRoles(cfg).map(r => r.aoi + ':' + (r.object || '') + ':' + r.role).join(';');
}

/** The part a particular box played. */
function roleOf(cfg, aoi){
  if (!aoi) return '';
  if (aoi === cfg.targetLocation) return 'target';
  return cfg.placement[aoi] ? 'distractor' : 'empty';
}

/* ---------- The log itself ---------- */

function readLog(){
  try {
    const raw = localStorage.getItem(LOG_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e){ return []; }
}

/**
 * Append one entry. Kept small and flat so it exports straight to CSV.
 * @param {string} action  what happened
 * @param {object} detail  anything specific to it
 */
function logInteraction(action, detail){
  const now = Date.now();
  const ss = sessionStartMs(), ts = trialStartMs();

  const entry = Object.assign({
    seq: 0,
    participant_id: getParticipantId(),
    action,
    // when
    iso_time: isoNow(),
    unix_ms: now,
    page_ms: round2(performance.now()),               // since this page loaded
    ms_since_session_start: ss ? now - ss : '',
    ms_since_trial_start:   ts ? now - ts : '',
    // where
    url: location.href,
    page_file: location.pathname.split('/').pop(),
    query: location.search || location.hash
  }, detail || {});

  try {
    const log = readLog();
    entry.seq = log.length + 1;
    log.push(entry);
    localStorage.setItem(LOG_KEY, JSON.stringify(log));
  } catch (e){ console.warn('[LOG] could not store', e); }

  console.log('[INTERACTION]', entry.seq, action, detail || '');
  return entry;
}

function clearLog(){
  try {
    localStorage.removeItem(LOG_KEY);
    localStorage.removeItem(SCORE_KEY);
  } catch (e){}
}

/* ---------- Score ---------- */

function readScore(){
  try {
    const raw = localStorage.getItem(SCORE_KEY);
    return raw ? JSON.parse(raw) : { total: 0, experimental: 0, practice: 0, trials_scored: 0 };
  } catch (e){ return { total: 0, experimental: 0, practice: 0, trials_scored: 0 }; }
}

function addScore(points, isPractice){
  const s = readScore();
  s.total += points;
  s.trials_scored += 1;
  if (isPractice) s.practice += points; else s.experimental += points;
  try { localStorage.setItem(SCORE_KEY, JSON.stringify(s)); } catch (e){}
  return s;
}

/** Points for a finished trial. */
function scoreForTrial(attempt1Correct, solvedOnAttempt){
  if (attempt1Correct) return SCORE_FIRST_ATTEMPT;
  if (solvedOnAttempt === 2) return SCORE_SECOND_ATTEMPT;
  return SCORE_MISS;
}


/* =========================================================================
   CONTEXT FOR EVERY LOG ROW
   ========================================================================= */

function sessionStartMs(){
  try {
    const v = localStorage.getItem(SESSION_START_KEY);
    return v ? Number(v) : null;
  } catch (e){ return null; }
}
function setSessionStart(){
  try { localStorage.setItem(SESSION_START_KEY, String(Date.now())); } catch (e){}
}
function trialStartMs(){
  try {
    const v = localStorage.getItem(TRIAL_START_KEY);
    return v ? Number(v) : null;
  } catch (e){ return null; }
}
function setTrialStart(){
  try { localStorage.setItem(TRIAL_START_KEY, String(Date.now())); } catch (e){}
}

/** Screen and window context, recorded once per page. */
function displayContext(){
  return {
    viewport_w: window.innerWidth,
    viewport_h: window.innerHeight,
    screen_w: window.screen ? window.screen.width : '',
    screen_h: window.screen ? window.screen.height : '',
    device_pixel_ratio: window.devicePixelRatio || 1,
    stage_scale: (getComputedStyle(document.documentElement)
                  .getPropertyValue('--scale') || '').trim()
  };
}

/**
 * Where a click landed, relative to the box and to the correct box.
 * The distance to the target is a spatial-error measure: how far off the
 * child was, in pixels and in grid steps.
 */
function clickGeometry(cfg, clickedAoi, clientX, clientY){
  const out = {
    click_x: round2(clientX), click_y: round2(clientY),
    click_screen_x: round2(clientX + (window.screenX || 0)),
    click_screen_y: round2(clientY + (window.screenY || 0))
  };

  const ids = aoiIdsFor(cfg.grid);
  const cols = cfg.grid.cols;
  const idxOf = a => ids.indexOf(a);

  // position within the clicked box
  if (cellByAOI[clickedAoi]){
    const r = cellByAOI[clickedAoi].cell.getBoundingClientRect();
    out.click_offset_x = round2(clientX - r.left);
    out.click_offset_y = round2(clientY - r.top);
    out.clicked_box_center_x = round2(r.left + r.width / 2);
    out.clicked_box_center_y = round2(r.top + r.height / 2);
  }

  // how far from the correct box
  if (cellByAOI[cfg.targetLocation]){
    const t = cellByAOI[cfg.targetLocation].cell.getBoundingClientRect();
    const tx = t.left + t.width / 2, ty = t.top + t.height / 2;
    out.target_box_center_x = round2(tx);
    out.target_box_center_y = round2(ty);
    out.distance_to_target_px = round2(Math.hypot(clientX - tx, clientY - ty));
  }

  // how far in grid steps
  const ci = idxOf(clickedAoi), ti = idxOf(cfg.targetLocation);
  if (ci >= 0 && ti >= 0){
    const cr = Math.floor(ci / cols), cc = ci % cols;
    const tr = Math.floor(ti / cols), tc = ti % cols;
    out.row_offset_from_target = cr - tr;
    out.col_offset_from_target = cc - tc;
    out.grid_distance_from_target = Math.abs(cr - tr) + Math.abs(cc - tc);
    out.adjacent_to_target =
      (Math.abs(cr - tr) <= 1 && Math.abs(cc - tc) <= 1 && !(cr === tr && cc === tc)) ? 1 : 0;
  }
  return out;
}



/* =========================================================================
   TRIAL ENGINE
   Runs exactly one trial, then holds a blank fixation screen until Pro Lab
   advances the timeline. The page never navigates.
   ========================================================================= */

function eventTag(cfg){
  const b = cfg.part === 'Part 1' ? 'PART1'
          : cfg.part === 'Part 2' ? 'PART2'
          : cfg.part === 'Part 3' ? 'PART3' : 'PRACTICE';
  return `${b}_TRIAL${pad2(cfg.trialNumber)}`;
}

function collectResponse(){
  return new Promise(resolve => {
    let done = false;
    const start = performance.now();
    const onClick = e => {
      const c = e.target.closest('.cell');
      if (!c || done) return;
      done = true; cleanup();
      resolve({ aoi: c.dataset.aoi, rt: performance.now() - start,
                timeout: false, client_x: e.clientX, client_y: e.clientY });
    };
    // RESPONSE_TIMEOUT_MS = 0 means wait as long as the child needs.
    const timer = RESPONSE_TIMEOUT_MS > 0 ? setTimeout(() => {
      if (done) return;
      done = true; cleanup();
      resolve({ aoi: null, rt: null, timeout: true, client_x: null, client_y: null });
    }, RESPONSE_TIMEOUT_MS) : null;
    function cleanup(){
      if (timer) clearTimeout(timer);
      el['grid'].removeEventListener('click', onClick);
      currentAOIs.forEach(a => cellByAOI[a].cell.classList.remove('clickable'));
    }
    currentAOIs.forEach(a => cellByAOI[a].cell.classList.add('clickable'));
    el['grid'].addEventListener('click', onClick);
  });
}

async function shakeCell(aoi){
  const c = cellByAOI[aoi].cell;
  c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake');
  await sleep(SHAKE_DURATION_MS);
  c.classList.remove('shake');
}

/* The response and feedback stages now live in the phase engine below. */



/* =========================================================================
   PHASE ENGINE
   Each phase of a trial is its own page at its own address. A page shows
   ONE unchanging screen for its whole life and then navigates, so whenever
   Tobii Pro Lab captures its screenshot it gets the correct image.

       ?trial=part1-01&phase=fix                 the +            500 ms
       ?trial=part1-01&phase=show                the cards       2500 ms
       ?trial=part1-01&phase=gap                 blank           1200 ms
       ?trial=part1-01&phase=ask                 target + grid   until click
       ?trial=part1-01&phase=feedback&sel=AOI_3  result           ~1 s
       ?trial=part1-01&phase=ask&attempt=2       second try
   ========================================================================= */

const PHASE_MS = {
  fix:  FIXATION_DURATION_MS,
  show: MEMORY_DURATION_MS,
  gap:  RETENTION_DURATION_MS
};

/** Address of a phase within a trial. */
function phaseUrl(trialKey, phase, extra){
  const q = { trial: trialKey, phase };
  if (extra) Object.keys(extra).forEach(k => { if (extra[k] != null) q[k] = extra[k]; });
  const extraQ = {}; if (extra) Object.keys(extra).forEach(k => { if (extra[k] != null) extraQ[k] = extra[k]; });
  const qs = new URLSearchParams(extraQ).toString();
  return trialKey + '__' + phase + '.html' + (qs ? ('?' + qs) : '');
}

/** Layout used by every phase page, so the grid never shifts between them. */
function mountStage(){
  document.body.innerHTML =
    '<div id="stage"><div id="task-layer">' +
      '<div id="prompt-zone">' +
        '<div id="prompt-text"></div>' +
        '<div id="target-icon" class="target-icon"></div>' +
        '<div id="feedback-text"></div>' +
        '<div id="clap" class="clap hidden"></div>' +
      '</div>' +
      '<div id="fixation" class="hidden">+</div>' +
      '<div id="grid" aria-label="Location grid"></div>' +
      '<div id="progress"></div>' +
    '</div></div>';
  grabDom();
  fitStage();
}

/* ---------- The record for one trial, updated by each phase page ---------- */

function trialRecordKey(trialKey){ return STORE_PREFIX + trialKey; }

function readRecord(trialKey){
  try {
    const raw = localStorage.getItem(trialRecordKey(trialKey));
    return raw ? JSON.parse(raw) : null;
  } catch (e){ return null; }
}

const POST_SEQ_KEY = 'lmt_post_seq';
function nextPostSeq(){
  let n = 0;
  try { n = parseInt(localStorage.getItem(POST_SEQ_KEY) || '0', 10) || 0; } catch (e){}
  n += 1;
  try { localStorage.setItem(POST_SEQ_KEY, String(n)); } catch (e){}
  return n;
}

function writeRecord(trialKey, patch){
  const cur = readRecord(trialKey) || {};
  const next = Object.assign(cur, patch);
  next.events = (cur.events || []).concat(pageEvents);
  try { localStorage.setItem(trialRecordKey(trialKey), JSON.stringify(next)); }
  catch (e){ console.warn('[SAVE] failed', e); }

  if (DATA_POST_URL){
    try {
      // Session-wide, monotonically increasing post counter. Beacons can
      // arrive at the sheet out of order (especially across a trial boundary),
      // so every posted row carries post_seq; sort by it to restore true order.
      const body = JSON.stringify(Object.assign({ sheet: DATA_SHEET_NAME, post_seq: nextPostSeq() }, next));
      if (navigator.sendBeacon){
        navigator.sendBeacon(DATA_POST_URL, new Blob([body], { type: 'text/plain;charset=UTF-8' }));
      } else {
        fetch(DATA_POST_URL, { method: 'POST', keepalive: true, mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body }).catch(()=>{});
      }
    } catch (e){}
  }
  return next;
}

/* ---------- How long did this page take to appear? ---------- */
function loadLatencyMs(){
  try {
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav) return round2(nav.responseEnd - nav.startTime);
  } catch (e){}
  return '';
}

/* ---------- Phase renderers ---------- */

function runPhase(trialKey, phase, params){
  const idx = TRIALS.findIndex(t => t.key === trialKey);
  if (idx === -1){ notFound(trialKey); return; }
  const t = TRIALS[idx];
  const cfg = t.cfg;
  const nextTrial = nextKeyAfter(trialKey);
  const tag = trialTag(cfg);

  mountStage();
  buildGrid(cfg.grid);

  const shown = isoNow();
  logEvent(tag + '_' + phase.toUpperCase() + '_ONSET', {
    url: location.href, phase, trial: trialKey,
    load_latency_ms: loadLatencyMs()
  });

  if (phase === 'fix') setTrialStart();

  logInteraction('phase_onset', Object.assign({
    part: cfg.part,
    trial: trialKey,
    trial_number: cfg.trialNumber,
    is_practice: cfg.isPractice ? 1 : 0,
    phase,
    planned_duration_ms: PHASE_MS[phase] || '',
    load_latency_ms: loadLatencyMs(),
    grid_size: cfg.grid.rows + 'x' + cfg.grid.cols,
    n_grid_locations: gridCells(cfg.grid),
    target_object: cfg.target,
    target_location: cfg.targetLocation
  }, displayContext()));

  // Record when this page is left, so the observed duration of each phase
  // can be checked against the planned one.
  const phaseEnteredAt = Date.now();
  window.addEventListener('pagehide', () => {
    logInteraction('phase_offset', {
      part: cfg.part, trial: trialKey, trial_number: cfg.trialNumber, phase,
      observed_duration_ms: Date.now() - phaseEnteredAt,
      planned_duration_ms: PHASE_MS[phase] || ''
    });
  });

  const go = (url) => { location.href = url; };

  /* ---- the + , alone ---- */
  if (phase === 'fix'){
    setGridVisible(false);
    setFixation(true);
    writeRecord(trialKey, {
      participant_id: getParticipantId(),
      condition_code: cfg.conditionCode,
      'Sequence number': Number((String(trialKey).match(/\d+/) || [0])[0]), 'Sequence key': trialKey,
      objects_presented: cfg.objects.join(';'),
      object_locations: Object.keys(cfg.placement)
        .sort((a,b) => +a.split('_')[1] - +b.split('_')[1])
        .map(a => a + ':' + cfg.placement[a]).join(';'),
      target_object: cfg.target,
      target_correct_location: cfg.targetLocation,
      // Every box coded: which held the target, which held a distractor,
      // which was empty.
      aoi_roles: aoiRolesString(cfg),
      Cross_Onset: shown,
      Cross_URL: location.href
    });
    setTimeout(() => go(phaseUrl(trialKey, 'show')), PHASE_MS.fix);
    return;
  }

  /* ---- the cards ---- */
  if (phase === 'show'){
    setFixation(false);
    setGridVisible(true);
    currentAOIs.forEach(a => {
      const o = cfg.placement[a];
      cellByAOI[a].holder.innerHTML = o ? ICON_HTML[o] : '';
    });
    const geom = captureAOIGeometry(cfg.placement);
    writeRecord(trialKey, {
      Grid_Onset: shown,
      Grid_URL: location.href,
      Grid_Duration_ms: PHASE_MS.show,
      aoi_geometry: geom
    });
    const roles = aoiRoles(cfg);
    logEvent(tag + '_LAYOUT', { roles });
    logInteraction('stimuli_shown', {
      part: cfg.part, trial: trialKey, trial_number: cfg.trialNumber,
      phase: 'show',
      target_object: cfg.target,
      target_location: cfg.targetLocation,
      n_objects: cfg.objects.length,
      n_distractors: cfg.objects.length - 1,
      n_empty_boxes: gridCells(cfg.grid) - cfg.objects.length,
      roles: roles.map(r => r.aoi + ':' + (r.object || '') + ':' + r.role).join(';'),
      // screen position of every box, so gaze can be mapped without the
      // separate geometry file
      box_coords: geom.map(g => g.aoi + ':' + g.center_x + ',' + g.center_y +
                                ':' + g.width + 'x' + g.height).join(';')
    });
    setTimeout(() => go(phaseUrl(trialKey, 'gap')), PHASE_MS.show);
    return;
  }

  /* ---- blank ---- */
  if (phase === 'gap'){
    setFixation(false);
    setGridVisible(false);
    writeRecord(trialKey, { Blank_Onset: shown, Blank_URL: location.href });
    setTimeout(() => go(phaseUrl(trialKey, 'ask')), PHASE_MS.gap);
    return;
  }

  /* ---- target + empty grid, waiting for a click ---- */
  if (phase === 'ask'){
    const attempt = Math.max(1, parseInt(params.get('attempt'), 10) || 1);
    setFixation(false);
    setGridVisible(true);
    clearGridIcons();
    el['prompt-text'].textContent = S.prompt;
    el['target-icon'].innerHTML = ICON_HTML[cfg.target];

    const patch = {};
    patch['Target' + attempt + '_Onset'] = shown;
    patch['Target' + attempt + '_URL'] = location.href;
    writeRecord(trialKey, patch);

    const t0 = performance.now();
    let answered = false;

    currentAOIs.forEach(a => cellByAOI[a].cell.classList.add('clickable'));

    // Clicks that land outside the boxes are recorded too - they say
    // something about hesitation, and they are invisible otherwise.
    document.addEventListener('click', e => {
      if (answered) return;
      if (e.target.closest('.cell')) return;
      logInteraction('click_outside', {
        part: cfg.part, trial: trialKey, trial_number: cfg.trialNumber,
        phase: 'ask', attempt,
        click_x: round2(e.clientX), click_y: round2(e.clientY),
        ms_since_phase_onset: round2(performance.now() - t0)
      });
    });

    el['grid'].addEventListener('click', e => {
      const cell = e.target.closest('.cell');
      if (!cell || answered) return;
      answered = true;
      const sel = cell.dataset.aoi;
      const rt = round2(performance.now() - t0);
      const role = roleOf(cfg, sel);                 // target | distractor | empty
      const objectClicked = cfg.placement[sel] || '';
      const correct = role === 'target' ? 1 : 0;

      logEvent(tag + '_RESPONSE_ATTEMPT' + attempt, {
        selected: sel, selected_role: role, selected_object: objectClicked,
        correct_location: cfg.targetLocation, correct, reaction_time_ms: rt
      });

      logInteraction('click', Object.assign({
        part: cfg.part, trial: trialKey, trial_number: cfg.trialNumber,
        is_practice: cfg.isPractice ? 1 : 0,
        phase: 'ask', attempt,
        clicked_location: sel,
        clicked_object: objectClicked,
        clicked_role: role,
        clicked_target: role === 'target' ? 1 : 0,
        clicked_distractor: role === 'distractor' ? 1 : 0,
        clicked_empty: role === 'empty' ? 1 : 0,
        correct,
        target_object: cfg.target,
        target_location: cfg.targetLocation,
        reaction_time_ms: rt,
        grid_size: cfg.grid.rows + 'x' + cfg.grid.cols,
        roles: aoiRolesString(cfg)
      }, clickGeometry(cfg, sel, e.clientX, e.clientY)));

      const p2 = {};
      p2['attempt' + attempt + '_selected'] = sel;
      p2['attempt' + attempt + '_selected_object'] = objectClicked;
      p2['attempt' + attempt + '_selected_role'] = role;
      p2['attempt' + attempt + '_rt_ms'] = rt;
      p2['attempt' + attempt + '_correct'] = correct;
      writeRecord(trialKey, p2);
      // Leave at once, so the screenshot of this page is the question screen
      // and never the feedback that follows.
      go(phaseUrl(trialKey, 'feedback', { sel, attempt }));
    });
    return;
  }

  /* ---- the result of a click ---- */
  if (phase === 'feedback'){
    const sel = params.get('sel');
    const attempt = Math.max(1, parseInt(params.get('attempt'), 10) || 1);
    const correct = sel === cfg.targetLocation;
    const allowed = attemptsAllowed(cfg);
    const lastAttempt = attempt >= allowed;

    setFixation(false);
    setGridVisible(true);
    clearGridIcons();

    const finish = () => {
      const rec = readRecord(trialKey) || {};
      const firstCorrect = rec.attempt1_correct || 0;
      const points = scoreForTrial(firstCorrect === 1, correct ? attempt : null);
      const running = addScore(points, cfg.isPractice);

      writeRecord(trialKey, {
        accuracy: firstCorrect,
        reaction_time_ms: rec.attempt1_rt_ms != null ? rec.attempt1_rt_ms : '',
        n_attempts: attempt,
        attempts_allowed: allowed,
        feedback_shown: feedbackAllowed(cfg) ? 1 : 0,
        accuracy_within_two_attempts: correct ? 1 : 0,
        solved_on_attempt: correct ? attempt : '',
        clicked_target: (rec.attempt1_selected_role === 'target' ||
                         rec.attempt2_selected_role === 'target') ? 1 : 0,
        clicked_distractor: (rec.attempt1_selected_role === 'distractor' ||
                             rec.attempt2_selected_role === 'distractor') ? 1 : 0,
        clicked_empty: (rec.attempt1_selected_role === 'empty' ||
                        rec.attempt2_selected_role === 'empty') ? 1 : 0,
        trial_score: points,
        cumulative_score: running.total,
        trial_end_iso: isoNow()
      });

      logEvent(tag + '_TRIAL_END', { accuracy: firstCorrect, score: points });
      logInteraction('trial_end', {
        part: cfg.part, trial: trialKey, trial_number: cfg.trialNumber,
        is_practice: cfg.isPractice ? 1 : 0,
        accuracy: firstCorrect,
        solved_within_two_attempts: correct ? 1 : 0,
        solved_on_attempt: correct ? attempt : '',
        n_attempts: attempt,
        attempts_allowed: allowed,
        feedback_shown: feedbackAllowed(cfg) ? 1 : 0,
        trial_score: points,
        cumulative_score: running.total
      });

      if (nextTrial){
        const nextCfg = CFG_BY_KEY[nextTrial];
        if (nextCfg.part !== cfg.part && !nextCfg.isPractice){ go(breakUrl(cfg.part)); return; }
        go(phaseUrl(nextTrial, 'fix'));
      } else {
        go(endOfFileUrl());
      }
    };

    /* ---------- EXPERIMENTAL TRIALS ----------
       One response, and nothing that tells the child whether it was right.
       The screen simply holds the empty grid for a moment so the rhythm
       stays even, then the next trial begins. */
    if (!feedbackAllowed(cfg)){
      logInteraction('no_feedback_pause', {
        part: cfg.part, trial: trialKey, trial_number: cfg.trialNumber,
        phase: 'feedback', duration_ms: INTERTRIAL_MS,
        note: 'experimental trial - correctness is never shown'
      });
      setTimeout(finish, INTERTRIAL_MS);
      return;
    }

    /* ---------- PRACTICE TRIALS ---------- */
    if (correct){
      cellByAOI[sel].cell.classList.add('correct');
      cellByAOI[sel].holder.innerHTML = ICON_HTML[cfg.target];
      showFeedback(S.correct, 'correct');
      logEvent(tag + '_FEEDBACK_CORRECT', { attempt });
      setTimeout(finish, PRACTICE_FEEDBACK_MS);
      return;
    }

    (async () => {
      await shakeCell(sel);
      if (!lastAttempt && SHOW_HINT){
        const under = cfg.placement[sel] || null;
        showHint(sel, under);
        logEvent(tag + '_HINT_SHOWN', { location: sel, content: under || 'empty' });
        logInteraction('hint_shown', {
          part: cfg.part, trial: trialKey, trial_number: cfg.trialNumber,
          phase: 'feedback', hint_location: sel,
          hint_content: under || 'empty', hint_role: roleOf(cfg, sel)
        });
        writeRecord(trialKey, { hint_location: sel, hint_content: under || 'empty',
                                hint_role: roleOf(cfg, sel) });
        await sleep(HINT_DURATION_MS);
        clearHint(sel);
      }
      if (!lastAttempt){
        go(phaseUrl(trialKey, 'ask', { attempt: attempt + 1 }));
      } else {
        showFeedback(S.tryNext, 'retry');
        logEvent(tag + '_FEEDBACK_NEXT');
        await sleep(PRACTICE_FEEDBACK_MS);
        finish();
      }
    })();
    return;
  }

  notFound(trialKey + ' / ' + phase);
}

/** The break screen shown after finishing a part. */
function breakUrl(afterPart){
  return 'break__' + slugPart(afterPart) + '.html';
}
function slugPart(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }

/** Where to go once the last trial is done. */
function endOfFileUrl(){
  if (IS_LAST_FILE) return pageUrl('finished');
  return FILE_MODE ? '#view=handoff' : '?view=handoff';
}

function trialTag(cfg){
  const b = cfg.part === 'Part 1' ? 'PART1'
          : cfg.part === 'Part 2' ? 'PART2'
          : cfg.part === 'Part 3' ? 'PART3' : 'PRACTICE';
  return b + '_TRIAL' + pad2(cfg.trialNumber);
}

function notFound(what){
  document.body.innerHTML =
    '<div id="stage"><section class="screen">' +
    '<h2>Not found</h2><p class="body-text">' + what + '</p>' +
    '<a class="btn" href="' + pageUrl('start') + '">Start again</a></section></div>';
}



/* =========================================================================
   RESEARCHER DATA VIEW   (index.html?view=collect)
   Reads what every trial stored and turns it into one CSV.
   ========================================================================= */

const CSV_COLUMNS = [
  'participant_id','part','condition_code','is_practice','trial_number','trial_key',
  'grid_size','n_grid_locations','number_of_objects','n_distractors','n_empty_boxes',
  'objects_presented','object_locations',
  'aoi_roles',                         // every box: AOI:object:role
  'target_object','target_correct_location',
  'attempt1_selected','attempt1_selected_object','attempt1_selected_role','attempt1_correct','attempt1_rt_ms',
  'attempt2_selected','attempt2_selected_object','attempt2_selected_role','attempt2_correct','attempt2_rt_ms',
  'accuracy','reaction_time_ms','n_attempts','accuracy_within_two_attempts','solved_on_attempt',
  'clicked_target','clicked_distractor','clicked_empty',
  'trial_score','cumulative_score',
  'hint_location','hint_content','hint_role',
  'fix_onset_iso','show_onset_iso','gap_onset_iso','ask1_onset_iso','trial_end_iso',
  'fix_url','show_url','gap_url','ask1_url'
];

const LOG_COLUMNS = [
  // order and identity
  'seq','participant_id','action',
  // when
  'iso_time','unix_ms','page_ms','ms_since_session_start','ms_since_trial_start',
  // where in the site
  'url','page_file','query',
  // which trial and phase
  'part','trial','trial_number','is_practice','phase','attempt',
  'planned_duration_ms','observed_duration_ms','load_latency_ms',
  // what was on screen
  'grid_size','n_grid_locations','n_objects','n_distractors','n_empty_boxes',
  'target_object','target_location','roles','box_coords',
  // the click
  'clicked_location','clicked_object','clicked_role',
  'clicked_target','clicked_distractor','clicked_empty','correct','reaction_time_ms',
  'click_x','click_y','click_screen_x','click_screen_y',
  'click_offset_x','click_offset_y','clicked_box_center_x','clicked_box_center_y',
  'target_box_center_x','target_box_center_y','distance_to_target_px',
  'row_offset_from_target','col_offset_from_target','grid_distance_from_target',
  'adjacent_to_target','ms_since_phase_onset',
  // feedback and hint
  'shaken_location','shaken_role','hint_location','hint_content','hint_role',
  // outcome and score
  'accuracy','solved_within_two_attempts','solved_on_attempt','n_attempts',
  'trial_score','cumulative_score','total_score','experimental_score','practice_score',
  'trials_scored',
  // session context
  'after_part','next_file','language','file','n_trials_in_file',
  'viewport_w','viewport_h','screen_w','screen_h','device_pixel_ratio','stage_scale',
  'user_agent'
];

function loadStored(){
  const rows = [];
  try {
    Object.keys(localStorage)
      .filter(k => k.indexOf(STORE_PREFIX) === 0)
      .forEach(k => { try { rows.push(JSON.parse(localStorage.getItem(k))); } catch (e){} });
  } catch (e){}
  const order = sessionOrder();
  rows.sort((a, b) => order.indexOf(a['Sequence key']) - order.indexOf(b['Sequence key']));
  return rows;
}

function csvEscape(v){
  const s = (v === null || v === undefined) ? '' : String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function buildLogCSV(){
  const log = readLog();
  const header = LOG_COLUMNS.join(',');
  const lines = log.map(e => LOG_COLUMNS.map(c => csvEscape(e[c])).join(','));
  return [header, ...lines].join('\n');
}

function summaryFor(rows){
  const stat = code => {
    const set = rows.filter(r => r.condition_code === code);
    const ok = set.filter(r => r.accuracy === 1);
    const rt = ok.length ? ok.reduce((s, r) => s + Number(r.reaction_time_ms || 0), 0) / ok.length : '';
    return {
      n: set.length,
      acc: set.length ? Math.round(ok.length / set.length * 100) / 100 : '',
      rt: rt === '' ? '' : Math.round(rt * 100) / 100,
      om: set.filter(r => r.timeout === 1).length
    };
  };
  const a = stat('condition_A'), b = stat('condition_B'), c = stat('condition_C');
  const sc = readScore();
  const clicks = rows.reduce((acc, r) => {
    acc.target += Number(r.clicked_target || 0);
    acc.distractor += Number(r.clicked_distractor || 0);
    acc.empty += Number(r.clicked_empty || 0);
    return acc;
  }, { target: 0, distractor: 0, empty: 0 });
  return {
    total_score: sc.total,
    experimental_score: sc.experimental,
    practice_score: sc.practice,
    max_possible_experimental: rows.length * SCORE_FIRST_ATTEMPT,
    trials_with_target_click: clicks.target,
    trials_with_distractor_click: clicks.distractor,
    trials_with_empty_click: clicks.empty,
    part1_accuracy: a.acc, part1_mean_rt_correct_ms: a.rt, part1_omissions: a.om,
    part2_accuracy: b.acc, part2_mean_rt_correct_ms: b.rt, part2_omissions: b.om,
    part3_accuracy: c.acc, part3_mean_rt_correct_ms: c.rt, part3_omissions: c.om,
    accuracy_difference_p2_minus_p1: (a.acc !== '' && b.acc !== '') ? Math.round((b.acc - a.acc) * 100) / 100 : '',
    accuracy_difference_p3_minus_p1: (a.acc !== '' && c.acc !== '') ? Math.round((c.acc - a.acc) * 100) / 100 : ''
  };
}

function buildCSVFrom(rows){
  const sv = summaryFor(rows.filter(r => r.condition_code !== 'practice'));
  const sumCols = Object.keys(sv);
  const header = [...CSV_COLUMNS, ...sumCols].join(',');
  const lines = rows.map(r =>
    [...CSV_COLUMNS.map(k => csvEscape(r[k])), ...sumCols.map(k => csvEscape(sv[k]))].join(','));
  return [header, ...lines].join('\n');
}

function dlFile(name, text, mime){
  const b = new Blob([text], { type: mime });
  const u = URL.createObjectURL(b);
  const a = document.createElement('a');
  a.href = u; a.download = name;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(u), 1500);
}

function stampToday(){
  const d = new Date(), p = n => String(n).padStart(2, '0');
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
}

function showCollect(){
  document.body.innerHTML =
    '<div class="collect">' +
      '<h2>Session data</h2>' +
      '<p>Researcher page. Everything the trials stored on this computer.</p>' +
      '<div class="crow">' +
        '<button id="c-csv" class="btn-mini">Download trial CSV</button>' +
        '<button id="c-log" class="btn-mini">Download interaction log</button>' +
        '<button id="c-json" class="btn-mini btn-mini-secondary">Download JSON</button>' +
        '<button id="c-copy" class="btn-mini btn-mini-secondary">Copy shown</button>' +
        '<button id="c-clear" class="btn-mini btn-mini-secondary">Clear stored data</button>' +
      '</div>' +
      '<div class="crow">' +
        '<label><input type="radio" name="cview" value="trials" checked> Trials</label>' +
        '<label><input type="radio" name="cview" value="log"> Interaction log</label>' +
        '<span class="ccount" id="c-count"></span>' +
      '</div>' +
      '<div id="c-score" class="ccount"></div>' +
      '<textarea id="c-out" spellcheck="false" readonly></textarea>' +
    '</div>';

  function currentView(){
    const r = document.querySelector('input[name="cview"]:checked');
    return r ? r.value : 'trials';
  }

  function refresh(){
    const rows = loadStored();
    const log = readLog();
    const exp = rows.filter(r => r.condition_code !== 'practice').length;
    const sc = readScore();

    document.getElementById('c-count').textContent =
      rows.length + ' trials (' + exp + ' experimental, ' + (rows.length - exp) +
      ' practice) · ' + log.length + ' logged interactions';

    const expRows = rows.filter(r => r.condition_code !== 'practice');
    const hits = expRows.filter(r => Number(r.accuracy) === 1).length;
    const dist = expRows.reduce((a, r) => a + Number(r.clicked_distractor || 0), 0);
    const emp  = expRows.reduce((a, r) => a + Number(r.clicked_empty || 0), 0);
    document.getElementById('c-score').textContent =
      'Score ' + sc.total + ' (experimental ' + sc.experimental + ' of ' +
      (expRows.length * SCORE_FIRST_ATTEMPT) + ') · first-attempt correct ' +
      hits + '/' + expRows.length + ' · trials with a distractor click ' + dist +
      ' · with an empty-box click ' + emp;

    document.getElementById('c-out').value = currentView() === 'log'
      ? (log.length ? buildLogCSV() : 'No interactions logged on this computer.')
      : (rows.length ? buildCSVFrom(rows) : 'No stored data found on this computer.');
    return rows;
  }

  document.querySelectorAll('input[name="cview"]').forEach(r =>
    r.addEventListener('change', refresh));

  const rows = refresh();
  const pid = (rows[0] && rows[0].participant_id) || 'unknown';

  document.getElementById('c-csv').addEventListener('click', () =>
    dlFile('location_memory_' + pid + '_' + stampToday() + '.csv',
           buildCSVFrom(loadStored()), 'text/csv;charset=utf-8;'));

  document.getElementById('c-log').addEventListener('click', () =>
    dlFile('location_memory_interactions_' + pid + '_' + stampToday() + '.csv',
           buildLogCSV(), 'text/csv;charset=utf-8;'));

  document.getElementById('c-json').addEventListener('click', () =>
    dlFile('location_memory_full_' + pid + '_' + stampToday() + '.json',
           JSON.stringify({ trials: loadStored(), interactions: readLog(),
                            score: readScore() }, null, 2), 'application/json'));

  document.getElementById('c-copy').addEventListener('click', e => {
    const t = document.getElementById('c-out');
    t.focus(); t.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (err){}
    e.target.textContent = ok ? 'Copied' : 'Press Ctrl+C';
  });

  document.getElementById('c-clear').addEventListener('click', () => {
    if (!confirm('Delete all stored trial data on this computer?')) return;
    Object.keys(localStorage).filter(k => k.indexOf(STORE_PREFIX) === 0)
          .forEach(k => localStorage.removeItem(k));
    clearLog();
    refresh();
  });
}



/* =========================================================================
   ROUTER
   Everything lives in this one file. Which screen you get is decided by the
   ?trial= parameter in the address, and moving between screens is a real
   browser navigation, so the URL changes and the page reloads properly.

       index.html                      welcome / participant ID
       index.html?trial=practice-01    a trial
       index.html?trial=part1-01       a trial
       index.html?trial=finished       thank-you screen
       index.html?view=collect         researcher data export
   ========================================================================= */

/* Opened by double-clicking the file rather than through a web address?
   A file:// URL has no server behind it, so the browser reads
   "page.html?trial=part1-01" as the name of a file that does not exist and
   reports that the page cannot be found. In that situation the routing
   falls back to the # fragment, which the browser does understand locally.
   Published over http the query string is used, so each trial is a real
   page load at a real address. */
const FILE_MODE = (location.protocol === 'file:');

/**
 * Build an address for a screen.
 *
 * Only the query string is written, never a file name. A bare "?trial=x" is
 * a relative address meaning "the page I am already on, with this query", so
 * it works whatever the host serves this file as - index.html, a bare folder
 * address, or a clean path with no extension. Rebuilding the file name is
 * what produced 404s on hosts that do not expose /index.html.
 */
function pageUrl(key){
  if (key === 'start')    return 'index.html';
  if (key === 'collect')  return 'collect.html';
  if (key === 'finished') return 'finished.html';
  return key + '__fix.html';
}



/* ---------- Screens that are not trials ---------- */

function screenShell(inner){
  return '<div id="stage"><section class="screen">' + inner + '</section></div>';
}

function showStart(){
  document.body.innerHTML = screenShell(
    '<h1 id="w0"></h1>' +
    '<p class="body-text" id="w1"></p>' +
    '<p class="body-text" id="w2"></p>' +
    '<p class="body-text" id="w3"></p>' +
    '<p class="body-text" id="w4"></p>' +
    '<p class="body-text" id="w5"></p>' +
    '<div class="field">' +
      '<label for="pid" id="wl"></label>' +
      '<input id="pid" type="text" autocomplete="off" spellcheck="false">' +
      '<div id="err" class="field-error"></div>' +
    '</div>' +
    '<button id="go" class="btn"></button>');

  const set = (id, v) => { document.getElementById(id).textContent = v; };
  set('w0', S.welcomeTitle); set('w1', S.welcome1); set('w2', S.welcome2);
  set('w3', S.welcome3);     set('w4', S.welcome4); set('w5', S.welcome5);
  set('wl', S.pidLabel);     set('go', S.start);

  const box = document.getElementById('pid');
  box.placeholder = S.pidPlaceholder;

  if (FILE_MODE){
    document.getElementById('err').textContent =
      'Local preview. Publish to a web address for one URL per trial.';
  }

  // A fresh participant: clear whatever the last one left behind.
  try {
    Object.keys(localStorage)
      .filter(k => k.indexOf(STORE_PREFIX) === 0)
      .forEach(k => localStorage.removeItem(k));
  } catch (e){}
  clearLog();

  function go(){
    const id = box.value.trim();
    if (!id){
      document.getElementById('err').textContent = S.pidError;
      box.focus();
      return;
    }
    try {
      localStorage.setItem(PID_KEY, id);
    } catch (e){
      document.getElementById('err').textContent =
        'Browser storage is blocked. Open this over http, not as a local file.';
      return;
    }
    setSessionStart();
    logInteraction('session_start', Object.assign({
      participant_id: id,
      language: LANG,
      file: location.pathname.split('/').pop(),
      n_trials_in_file: TRIALS.length,
      user_agent: navigator.userAgent
    }, displayContext()));
  const order = regenerateOrder();   // fresh random order for this participant
  try { localStorage.setItem(POST_SEQ_KEY, '0'); } catch (e){}   // restart row counter for this run
  location.href = phaseUrl(order[0], 'fix');
  }

  document.getElementById('go').addEventListener('click', go);
  box.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  box.focus();
}

/** Break between files: "Part N is complete", then on to the next file. */
function showHandoff(){
  const done = TRIALS[TRIALS.length - 1].cfg.part;   // the part just finished
  const title = done === 'Part 1' ? S.break1Title
              : done === 'Part 2' ? S.break2Title
              : S.break1Title;

  document.body.innerHTML = screenShell(
    '<h2 id="h0"></h2><p class="body-text" id="h1"></p>' +
    '<button id="h2" class="btn"></button>');
  document.getElementById('h0').textContent = title;
  document.getElementById('h1').textContent = S.breakBody;
  document.getElementById('h2').textContent = S.continueBtn;
  logInteraction('break_shown', Object.assign({ after_part: done }, displayContext()));
  document.getElementById('h2').addEventListener('click', () => {
    logInteraction('break_continue', { after_part: done, next_file: NEXT_FILE });
    if (NEXT_FILE) location.href = NEXT_FILE;
    else location.href = pageUrl('finished');
  });
  console.log('[SESSION] file complete. Next file:', NEXT_FILE);
}

/** Break between parts, inside a single-file build. */
function showBreak(afterPart){
  const afterPractice = afterPart === 'Practice';
  const title = afterPractice        ? S.readyTitle
              : afterPart === 'Part 1' ? S.break1Title
              : afterPart === 'Part 2' ? S.break2Title
              : S.break1Title;
  document.body.innerHTML = screenShell(
    '<h2 id="b0"></h2><p class="body-text" id="b1"></p><button id="b2" class="btn"></button>');
  document.getElementById('b0').textContent = title;
  document.getElementById('b1').textContent = afterPractice ? S.readyBody : S.breakBody;
  document.getElementById('b2').textContent = afterPractice ? S.start : S.continueBtn;

  logInteraction('break_shown', { after_part: afterPart });

  // The next trial is the first one of a later part, in this session's order
  const next = firstKeyOfPartAfter(afterPart);

  document.getElementById('b2').addEventListener('click', () => {
    logInteraction('break_continue', { after_part: afterPart, next_trial: next });
    location.href = next ? phaseUrl(next, 'fix') : pageUrl('finished');
  });
}

function showFinished(){
  document.body.innerHTML = screenShell(
    '<h2 id="f0"></h2><p class="body-text" id="f1"></p>');
  document.getElementById('f0').textContent = S.endTitle;
  document.getElementById('f1').textContent = S.endBody;
  const sc = readScore();
  logInteraction('session_end', {
    total_score: sc.total,
    experimental_score: sc.experimental,
    practice_score: sc.practice,
    trials_scored: sc.trials_scored
  });
  console.log('[SCORE]', sc);
  console.log('[SESSION] complete. Open ' + pageUrl('collect') + ' to export the data.');
}

/* ---------- Per-page title ----------
   Tobii Pro Lab labels each web-page event by document.title, not the URL.
   Give every screen (trial + phase) a distinct title so each page is a
   separate, human-readable event in the Tobii data export instead of all
   pages collapsing to the same name. */
function pageTitle(trial, phase){
  const PHASE = { fix:'Fixation', show:'Shapes', gap:'Gap', ask:'Question', feedback:'Feedback' };
  let label = trial || '';
  const t = /^trial-(\d+)$/.exec(trial || '');
  const p = /^practice-0*(\d+)$/.exec(trial || '');
  if (t) label = 'Trial ' + t[1];
  else if (p) label = 'Practice ' + p[1];
  const ph = PHASE[phase] || (phase ? phase.charAt(0).toUpperCase() + phase.slice(1) : '');
  return 'Shape Memory - ' + label + (ph ? ' - ' + ph : '');
}

/* ---------- Boot ---------- */
function boot(){
  document.documentElement.lang = LANG;
  document.documentElement.dir  = (LANG === 'ar') ? 'rtl' : 'ltr';

  const params = new URLSearchParams(location.search.length > 1 ? location.search.slice(1) : '');
  const _P = window.PAGE || {};
  Object.keys(_P).forEach(k => { if (_P[k] != null && !params.has(k)) params.set(k, String(_P[k])); });

  if (params.get('view') === 'collect'){ showCollect();  return; }
  if (params.get('view') === 'handoff'){ showHandoff(); return; }
  if (params.get('view') === 'break'){ showBreak(params.get('after') || ''); return; }

  const trial = params.get('trial');
  if (!trial){
    // The first file asks for the participant ID. Later files just begin,
    // because the ID was stored when the session started.
    if (IS_FIRST_FILE) showStart();
    else location.href = phaseUrl(TRIALS[0].key, 'fix');
    return;
  }
  if (trial === 'finished')  { showFinished(); return; }

  const phase = params.get('phase') || 'fix';
  runPhase(trial, phase, params);
}

document.addEventListener('DOMContentLoaded', boot);

window.addEventListener('hashchange', () => { if (FILE_MODE) boot(); });

