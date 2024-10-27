# HandleCheck 🔍

HandleCheck is a Telegram Mini App that simplifies social media profile verification. Built for recruiters, hiring managers, and community administrators who need to quickly verify the authenticity of social media handles shared in Telegram groups.

## 🌟 Key Features

- **Quick Verification**: Generate QR codes or links for instant social media verification
- **Multi-Platform Support**: Verify profiles across:
  - Github
  - Twitter (X)
  - YouTube
  - Upwork
  - Linkdin
  - Instagram
  - More platforms coming soon!
- **Telegram Integration**: Seamlessly works within Telegram as a Mini App
- **Real-Time Results**: Get immediate verification status
- **User-Friendly Interface**: Simple, intuitive design for both verifiers and users

## 🎯 Problem It Solves

In Telegram groups and channels, people often share their social media handles for job opportunities, networking, or community participation. However, verifying the authenticity of these handles can be:

- Time-consuming
- Error-prone
- Difficult to track
- Subject to impersonation

HandleCheck solves these issues by providing a streamlined verification process that confirms ownership of social media accounts through secure proof generation.

<!-- ## 🛠️ Technical Architecture -->
<!---->
<!-- ``` -->
<!-- handlecheck/ -->
<!-- ├── client/                 # Frontend Telegram Mini App -->
<!-- ├── server/                 # Backend API server -->
<!-- ├── bot/                    # Telegram bot implementation -->
<!-- └── contracts/             # Smart contracts (optional for future token gating) -->
<!-- ``` -->
<!---->

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- Telegram Bot Token
- Reclaim Protocol API credentials

### Installation

1. Clone the repository:

```bash
git clone https://github.com/4rjunc/HandleCheck.git
cd HandleCheck
```

2. Install dependencies:

```bash
# Install server dependencies
yarn
```

3. Configure environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
# Start backend
yarn run dev

```

## 🔑 Environment Variables

### Server (.env)

```
# Reclaim Tokens
VITE_PUBLIC_RECLAIM_APP_ID=<TOKEN>
VITE_PUBLIC_RECLAIM_APP_SECRET=<TOKEN>
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [Reclaim Protocol](https://www.reclaimprotocol.org/)
- All contributors and supporters

## 📞 Support

For support, join our [Telegram group](https://t.me/handlecheck_support) or email support@handlecheck.app

## 🚀 Roadmap

- [ ] Additional social media platform integrations
- [ ] Blockchain verification options
- [ ] Enterprise features
- [ ] Community verification badges
