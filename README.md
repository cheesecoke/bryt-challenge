# Bryt Designs Front-end Tech Challenge

### React Multi-step Forms

### Hello fellow candidate! 👋

###### Today's challenge is to build a multi-step form using Nextjs/Reactjs, Zod, and CSS/Tailwindcss. The styling is completely up to you, feel free to get creative 😎!

### Why a multi-step form? 🤔

###### We believe it's the best challenge to demonstrate your technical skills, problem solving and your knowledge of HTML and CSS basics.

### What's the goal of this challenge? ⚽

###### I'm glad you asked! We want to get an understanding of your abilities by measuring how creative you can be, how readable your code is and how you approach problems.

### What's the process like?

###### You have 4 hours from project start to complete this challenge and submit your repo via email for review.

### Requirements:
1. [Node version 20](https://nodejs.org/en/download)

### Commands:
Depends on the package manager you prefer using!
`npm run dev`

### Resources:

1. [Figma Mock-up](https://www.figma.com/file/ZhMFAK1UWwKWS0L25LAYyx/Bryt-Designs-Front-end-Tech-Challenge?node-id=1%3A2)
2. [Font Awesome](https://fontawesome.com/search?m=free&s=solid%2Cregular)
3. [Next.js](https://nextjs.org/docs)
4. [React.js](https://react.dev/)
5. [Tailwindcss](https://tailwindcss.com/docs/installation)
6. [Zod](https://zod.dev/?id=ip-addresses)

**While we love dependencies and the ability to use other libraries created by amazing developers. For this challenge, please only stick to using the provided dependencies. You may install whatever icon library necessary. Although this challenge comes pre-setup with Fontawesome Icons.**

#### Requirements:

- [ ] Please ensure you have all of the required fields and **follow** the structure of the provided wireframe.
- [ ] The form should be broken up into multiple steps and only one step should be visible at a time.
- [ ] Every step outside of the first step **SHOULD** have a next and back button.
  - [ ] The first step **should not** have a back button.
  - [ ] The next button goes to the next step.
  - [ ] The next button should be disabled if the user has **not** filled out all of the **required** fields.
  - [ ] The back button should go back to the previous step.
- [ ] Going back to the previous step **should not** require the user to fill out the **required** fields again.
- [ ] Submitting the form should not refresh the page.
- [ ] Once submitted, the form data should be sent to the following endpoint `/api/register` which is located at the following path `./src/app/api/register/route.ts`.**It should be possible to see a success message with your multistep form when submitting to the aforementioned endpoint.**
```ts
  // Success message
  const result = {
    data: {
      message: "You've successfully registered!",
    },
  }
```

#### Extras:
**_These are just nice haves if you have more time. Do not prioritize otherwise_**

- [ ] Transition animations between each step.
- [ ] Active, Focus and Hover styling for input fields and buttons.
- [ ] Input field values saved to local storage. **EXCEPT FOR PASSWORD RELATED INFORMATION**
  - [ ] On page load all of the fields should be populated with their respective values from local storage.
- [ ] Form validation
  - [ ] Should display the error message if the value the user entered is invalid.
  - [ ] Every field should type check what the user is inputting.


## TIME STARTS NOW!