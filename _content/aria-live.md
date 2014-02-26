Any time you dynamically add, modify, or delete content from a Web page,
you need to notify the user. The ARIA specification provides mechanisms
to do this, called ARIA Live Regions. There are different ways to
implement this depending on the type of modification being made.

-   An **alert** notification where the alert message is delivered
    through a modal window.
-   A **timer** such as a clock or a countdown timer.
-   A **status** indicator for a Web application, indicating the general
    status of an application.
-   A **marquee** of scrolling information, such as a scrolling news
    ticker.
-   A running **log** of information, such as a chat room.
-   A generic **live region** where content is updating.

Also with ARIA live regions is the ability to set how quickly the
changes will be presented to the user.

-   aria-live="assertive": The user will be notified immediately.
-   aria-live="polite": The user will be notified the next time they are
    idle.
-   aria-live="off": The user will not be notified of the change.

All of the ARIA Live implementations above come with implied verbosity
levels, except for the generic live region. For the implied verbosity,
you do not need to assign a verbosity level unless you want to override
the default value.

Generic Live Region
-------------------

-   
