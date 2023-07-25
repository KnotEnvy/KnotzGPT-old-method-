# KnotzGPT

KnotzGPT is a full-stack web application that incorporates frontend and backend technologies to provide a robust service to its users. The frontend is written in React, and the backend uses Express.js with Node.js. The application utilizes OpenAI's API to deliver AI-powered features.

## Table of Contents

- [Installation](#installation)
- [Building the Application](#building-the-application)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

Before you can run this project, you will need to have Node.js and npm installed on your local machine. If you don't have these installed, you can download them [here](https://nodejs.org/en/download/).

After you have Node.js and npm installed, follow these steps:

1. Clone this repository: 

    ```bash
    git clone https://github.com/KnotEnvy/KnotzGPT-old-method-.git
    ```

2. Navigate into the project directory:

    ```bash
    cd KnotzGPT-old-method-
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root of your project directory. In this file, add your OpenAI API key and ORG key as follows:

    ```
    OPENAI_API_KEY=your_api_key
    OPENAI_ORGANIZATION=your_org_key
    ```

    Replace `your_api_key` and `your_org_key` with your actual keys. Make sure to keep this file secret and do not commit it to your version control system.

## Building the Application

To build the frontend application, navigate to the `src` directory and use the following command:

```bash
npm run build
```

This command creates a `build` directory with a production build of your app.

## Running the Application

First, start the backend server. Navigate to the root of your project directory and use the following command:

```bash
node index.js
```

The server will start and listen on port 3080.

Then, to serve the built application, you will need to install the `serve` package globally if you haven't done so already:

```bash
npm install -g serve
```

Now you can serve your application:

```bash
serve -s build
```

After running this command, open the URL provided in the terminal output to view the application in the browser.

## Testing

To run the tests for this application, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your features / fixes (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.

Please note that this README assumes that the frontend and backend are located in the same directory. If they are in different directories, you will need to adjust the navigation commands accordingly.
