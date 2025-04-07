# DeSocial -A Blockchain Based Social Media Platform

![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![Tests](https://img.shields.io/badge/Tests-Passed-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

DeSocial is a censorship-resistant, user-owned social media platform built on Web3. This dApp empowers users with full control over their data, content, and identity. No central authority — just pure peer-to-peer interaction and secure blockchain-backed communication.

## 🚀 Key Features

- *✅ Decentralized Identity*: Own your profile and credentials using wallets
- *Portfolio Evaluation*: Detailed analysis of cryptocurrency investment portfolios
- *📝 On-chain Posts*: Share content immutably and transparently
- *🗳 Community Governance*: Users vote on moderation and platform upgrades.
- *🔐 Data Privacy*: Zero third-party tracking or centralized control.
- *📱 Responsive UI*: Modern frontend built for an intuitive experience.

## 📋 Project Architecture

The project adopts a modern full-stack architecture:

- *Smart Contracts*: Solidity + Hardhat
- *Frontend*: React + TailwindCSS
- *Blockchain*: Ethereum or Polygon
- *Storage*: IPFS for media & metadata
- *Wallet Integration*: MetaMask / WalletConnect

## 🔧 Quick Start

### Prerequisites

- Node.js 18.17.1 (Must)
- Npm 9.6.7
- Npx
- Blockchain API keys (e.g., Infura, Etherscan, Ankr, etc.)
- Storage API keys(e.g., Pinata, etc.)

### Local Development Setup

- **Clone the repository:**
  ```sh
  git clone https://github.com/bishal7448/SocialMediaDApp.git
  ```
- **Install frontend dependencies:**
  ```sh
  cd facebook-dapp
  npm install
  ```
- **Install backtend dependencies:**
  ```sh
  cd..
  cd web3
  npm install
  ```
- **Set environment variables:**
  ```sh
  cd..
  cd facebook-dapp
  code .env.local
  Edit the .env.local file and fill in the required API keys and configurations**
  ```
- **Install backtend dependencies:**
  ```sh
  cd..
  cd web3
  code .env
  Edit the .env file and fill in the required API keys and configurations
  ```
- **Add ABI to context (Important)**
  ```sh
  from web3/artifacts/contracts/SocialMedia.sol
  drag SocialMediaDapp.json
  to facebook-dapp/context
  ```
- **Start the development servers:**
  ```sh
  cd..
  cd facebook-dapp
  npm run build
  ```
### Access the Application

- Frontend: http://localhost:3000

## 📚 Project Documentation

- [Setup Guide]() - Detailed environment setup guide
- [Contract Address](https://edu-chain-testnet.blockscout.com/address/0xf9c82472546213c797264D7A84F5e1591A2484Eb?tab=txs) - 0xf9c82472546213c797264D7A84F5e1591A2484Eb

## 🤝 Contributing

Contributions are welcome via Issues and Pull Requests!

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](DeSocial/Doc/LICENSE) file for details.

---

© 2025 DeSocial. All rights reserved.
