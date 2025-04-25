If you check out the code, it’s honestly just a simple web extension that can be installed and run on any Chromium-based browser. I originally built it for my own convenience.

Backstory:
During my 2nd year, 4th semester (which is actually ending tomorrow—April 29th, 2025), I found myself losing interest in college. Between my internship and developing new interests, classes started to feel… well, pointless. I’ll be real—I got lazy for almost half the semester. Because of that, my attendance dropped pretty badly.

At Alliance University, we have a strict 75% attendance rule to be eligible for End-Semester exams. I was barely touching 60% in most subjects. Professors usually marked attendance through a web app, mostly by scanning a QR code (now there's an app too, but let’s focus on the web-based system).

That’s when I decided to build this extension.

How It Worked:
v1:
The first version used JavaScript to capture the user ID and password when professors logged in. It then formatted this data and downloaded it as a .txt file. But obviously, that was too risky—anyone could open the file. So I changed the extension to .bat, which gets flagged as unsafe. Eventually, I switched it to .pdf and made it only readable if opened via Notepad—nobody ever suspected a thing.

v2:
Instead of downloading files (which looked pretty sus), this version stored the credentials directly in my Firebase database. But by then, I had already collected enough logins, so I didn’t bother developing it further. That was the final version.

What Impact Did It Have?
Look, I know it wasn’t exactly the right thing to do. But come on—getting a backlog just because I didn’t attend a few boring classes, while I was actually interning and grinding LeetCode for MAANG prep? That felt unfair.

I managed to collect enough professor logins and updated my attendance to the 90s—no one ever suspected a thing. Out of fear of getting caught though, I eventually deleted the extension from the two systems I had it installed on.

```Okay yaa my grammar is messed up so ChatGPT formatted some stuff for me.
