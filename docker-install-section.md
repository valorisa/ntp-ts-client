## Installation via Docker

This project can be installed and run using Docker. Follow the steps below to build and launch the application.

### Prerequisites
- Ensure that [Docker](https://www.docker.com/) is installed on your machine.
- Verify that Docker is running (`docker --version` to confirm).

### Steps
1. **Clone the Repository**:
   Download the source code of the project onto your machine:
   ```bash
   git clone https://github.com/valorisa/ntp-ts-client.git
   cd ntp-ts-client
   ```

2. **Build the Docker Image**:
   Use the provided `Dockerfile` to build the Docker image:
   ```bash
   docker build -t ntp-ts-client .
   ```
   > This command may take a few minutes as it installs all necessary dependencies.

3. **Run the Container**:
   Once the image is built, start a container from it:
   ```bash
   docker run -p 3000:3000 ntp-ts-client
   ```
   > The application will be accessible at `http://localhost:3000`.

4. **Check Logs (Optional)**:
   If you want to inspect the logs of the application, use the following command:
   ```bash
   docker logs <container-id>
   ```
   Replace `<container-id>` with the actual container ID (visible with `docker ps -as`).

5. **Access the Container Shell (Optional)**:
   To interact directly with the container, open an interactive shell:
   ```bash
   docker exec -it <container-id> sh
   ```

### Cleanup
To remove unused images and containers after use:


### Notes
- If you are behind a proxy, configure npm to use the proxy before building the image. Add the following lines to your `.npmrc` file:
  ```plaintext
  proxy=http://<proxy-url>:<port>
  https-proxy=http://<proxy-url>:<port>
  ```
- If you encounter network errors during the image build, try using an alternative npm registry such as `https://registry.npmmirror.com/`.
