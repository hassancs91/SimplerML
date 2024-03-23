# Contributing to simplerML

Thank you for your interest in contributing to the simplerML documentation! Your contributions help make the documentation clearer and more accessible to all users.

## Getting Started

1.  **Fork the Repository**: Start by forking the simplerML repository to your GitHub account.
2.  **Clone the Repository**: Clone your fork of the repository to your local machine using the following command:
	```bash
	 git clone https://github.com/your-username/simplerML.git
	```
4.  **Install Dependencies**: Navigate to the cloned repository and install the required dependencies:
	```bash
	cd simplerML pnpm install
	```
5.  **Start the Development Server**: Run the following command to start the development server:
	```bash
	pnpm start
	```
This will launch the documentation website locally, allowing you to view your changes in real-time.

For further details. Please read [here](./README.md/#Installation)

## Making Changes

1. **Select a Page**: Decide which page or section of the documentation you want to contribute to.

2. **Edit Markdown Files**: Navigate to the corresponding Markdown file in the `docs` directory and make your changes using your preferred text editor.

3. **Preview Changes**: As you make changes, keep the development server running to preview your edits in real-time by visiting `http://localhost:3000` in your web browser.

4. **Commit Your Changes**: Once you're satisfied with your edits, commit your changes to your forked repository:
    ```bash
    git add .
    git commit -m "Add/Update documentation for XYZ"
    git push origin master
    ```

5. **Create a Pull Request**: Go to the simplerML repository on GitHub and create a new pull request. Be sure to describe your changes in detail and reference any relevant issues.

## Adding embeds
If you need to add an interactive element to a page you will need to add the html , css and js of the element to `/static/interactive/book_chapter/name_of_your_embed/`
Then head to the markdown file where you want to add the embed and use **iframe** to add your embed.

```html
<iframe src="/interactive/chap1/basic_predictor/index.html" width="100%" height="400" frameborder="0"></iframe>
```
**NOTE:** Ensure to set the **iframe** height so that there is no scroll in the embed
Remember to set the `background-color` of the embed's body to `transparent` so it looks more native.

```css
body {
        font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
        max-width: 1000px;
        margin: auto;
        padding: 20px;
        color: #333;
        background-color: transparent;
      }
```

## Code Style and Guidelines

- Follow the existing Markdown formatting and structure to maintain consistency across the documentation.
- Use clear and concise language to explain concepts and instructions.
- Include examples and code snippets where necessary to illustrate points.
- Make sure to run spell check before submitting your changes.
- Make sure code runs locally before submitting your pull request

## Review Process

Once you've submitted a pull request, the maintainers of simplerML will review your changes. Please be patient during this process, and be prepared to address any feedback or suggestions for improvement.

## Get Help

If you have any questions or need assistance with contributing to the simplerML documentation, feel free to reach out to us via GitHub issues or our community forums.

We appreciate your contributions to making simplerML documentation the best resource it can be!
