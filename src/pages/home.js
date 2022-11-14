import React from "react";
import { UserAuth } from "../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const home = () => {
  const { user, loading } = UserAuth();
  return (
    <div className="flex mx-4 mt-3 flex-col">
      <div className="flex flex-row items-center justify-center w-full">
        <h1 className="text-2xl">
          Welcome{" "}
          <span className="text-sky-500 font-bold tracking-tight animate-spin spiner">
            {loading ? <CircularProgress /> : user.displayName}
          </span>
        </h1>
      </div>
      <div className=" animate-spin h-6 w-6 rounded-full bg-red-500 flex ">
        <div className="w-4 h-4 rounded-full bg-sky-500 rotate-30"></div>
      </div>
      <p>
        ould you clarify where the last 2 code sections should be? The first is
        clearly in the javascript src file for the react component, the third
        I'm guessing goes in the html template to be rendered by said js file,
        but where does the second go? – levraininjaneer Aug 3, 2018 at 13:35 1
        The 2nd is the CSS. I've used global CSS, but you can use CSS Modules or
        CSS in JS. The 3rd is the HTML file, which might include spinner markup
        if needed (2nd example). – Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf -
        the setTimeout is not part of the solution. It simulates waiting for an
        async action before rendering the content. – Ori Drori Nov 1, 2018 at
        4:34 1 @hamza-jutt - you should open a new question about that. – Ori
        Drori Aug 5, 2019 at 12:20 1 return null adds a comment, which will be
        rendered as a blank screen. :empty pseudo class works along with return
        null since it ignores comments while determining if the container is
        empty. – KJ Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the
        last 2 code sections should be? The first is clearly in the javascript
        src file for the react component, the third I'm guessing goes in the
        html template to be rendered by said js file, but where does the second
        go? – levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've
        used global CSS, but you can use CSS Modules or CSS in JS. The 3rd is
        the HTML file, which might include spinner markup if needed (2nd
        example). – Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout
        is not part of the solution. It simulates waiting for an async action
        before rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1
        @hamza-jutt - you should open a new question about that. – Ori Drori Aug
        5, 2019 at 12:20 1 return null adds a comment, which will be rendered as
        a blank screen. :empty pseudo class works along with return null since
        it ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41 ould you clarify where the last 2 code
        sections should be? The first is clearly in the javascript src file for
        the react component, the third I'm guessing goes in the html template to
        be rendered by said js file, but where does the second go? –
        levraininjaneer Aug 3, 2018 at 13:35 1 The 2nd is the CSS. I've used
        global CSS, but you can use CSS Modules or CSS in JS. The 3rd is the
        HTML file, which might include spinner markup if needed (2nd example). –
        Ori Drori Aug 3, 2018 at 14:44 5 @dryleaf - the setTimeout is not part
        of the solution. It simulates waiting for an async action before
        rendering the content. – Ori Drori Nov 1, 2018 at 4:34 1 @hamza-jutt -
        you should open a new question about that. – Ori Drori Aug 5, 2019 at
        12:20 1 return null adds a comment, which will be rendered as a blank
        screen. :empty pseudo class works along with return null since it
        ignores comments while determining if the container is empty. – KJ
        Sudarshan Sep 19, 2020 at 0:41
      </p>
    </div>
  );
};

export default home;
