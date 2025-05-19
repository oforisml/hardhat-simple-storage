# Hardhat SimpleStorage Project

This project demonstrates a basic workflow for developing, testing, and deploying a Solidity smart contract using [Hardhat](https://hardhat.org/).

## Project Structure

- `contracts/`: Contains the Solidity contract [`SimpleStorage.sol`](contracts/SimpleStorage.sol).
- `scripts/`: Deployment scripts, including [`deploy.js`](scripts/deploy.js).
- `test/`: Test files, such as [`test-deploy.js`](test/test-deploy.js).
- `tasks/`: Custom Hardhat tasks, e.g., [`block-number.js`](tasks/block-number.js).
- `ignition/`: Hardhat Ignition modules for advanced deployment flows.
- `artifacts/`, `cache/`, `coverage/`: Build, cache, and coverage outputs (auto-generated).
- `.env`: Environment variables (not committed).
- `hardhat.config.js`: Hardhat configuration.
- `package.json`: Project dependencies and scripts.

## Getting Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Compile Contracts

```sh
npx hardhat compile
```

### 3. Deploy Contracts

```sh
npx hardhat run scripts/deploy.js
```

### 4. Test Contracts

```sh
npx hardhat test
```

### 5. Interact with Contracts

Use the Hardhat console to interact with your deployed contracts:

```sh
npx hardhat console
```

## Solidity Contract: SimpleStorage

The main contract for this project is [`SimpleStorage.sol`](contracts/SimpleStorage.sol).  
It demonstrates basic storage and retrieval operations in Solidity, as well as the use of structs, arrays, and mappings.

### Key Features

- **Store a Number:**  
  The `store(uint256 _favoriteNumber)` function allows you to update the stored number.

- **Retrieve the Number:**  
  The `retrieve()` function returns the currently stored number.

- **Structs and Arrays:**  
  The contract defines a `People` struct and an array `peoples` to store multiple people with their favorite numbers.

- **Mapping:**  
  The `nameToFavoriteNumber` mapping allows you to look up a person's favorite number by their name.

- **Add People:**  
  The `addPeople(string memory _name, uint256 _favoriteNumber)` function lets you add a new person to the array and mapping.

### Example Usage

```solidity
// Store a number
simpleStorage.store(42);

// Retrieve the stored number
uint256 value = simpleStorage.retrieve();

// Add a new person
simpleStorage.addPeople("Alice", 7);

// Get favorite number by name
uint256 fav = simpleStorage.nameToFavoriteNumber("Alice");
```

## Hardhat Commands

- `npx hardhat help`: List all available Hardhat commands.
- `npx hardhat test`: Run tests.
- `REPORT_GAS=true npx hardhat test`: Run tests with gas report.
- `npx hardhat node`: Start a local Ethereum node.
- `npx hardhat run --network <network> scripts/deploy.js`: Deploy to a specified network.

Refer to the [Hardhat documentation](https://hardhat.org/getting-started/) for more information on using Hardhat.
