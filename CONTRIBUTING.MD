# Contributing to [Project Name]

Thank you for considering contributing to [Project Name]! This guide outlines the steps to set up the project and
details the Git hooks and commit conventions we follow to maintain code quality and consistency.

## Project Setup

To set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/project-name.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd project-name
   ```

3. **Install Dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required packages:

   ```bash
   npm install
   ```

---

## Git Hooks and Commit Conventions

To ensure code quality and maintain consistency, we have configured the following Git hooks
using [Husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/okonet/lint-staged):

- **Pre-commit Hook**: Before a commit is finalized, `lint-staged` runs linters and formatters on staged files to catch
  potential issues early.

- **Commit-msg Hook**: Validates commit messages against
  the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification
  using [Commitlint](https://commitlint.js.org/). Commit messages not adhering to the format will be rejected.

**Commit Message Format**:

```
<type>(<scope>): <description>
```

- `type`: The type of change. Valid types include:
    - `feat`: A new feature
    - `fix`: A bug fix
    - `docs`: Documentation changes
    - `style`: Code style changes (formatting, missing semicolons, etc.)
    - `refactor`: Code refactoring without adding features or fixing bugs
    - `test`: Adding or correcting tests
    - `chore`: Changes to the build process or auxiliary tools

- `scope`: The scope of the change (e.g., module or file name).
- `description`: A brief description of the change.

**Examples**:

```
feat(auth): add OAuth2 login support
fix(api): handle null values in user responses
docs(readme): update installation instructions
```

By following these guidelines, you help us maintain a high-quality codebase and a clear project history. Thank you for
your contributions! 