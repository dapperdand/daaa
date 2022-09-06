import coinbase from "./images/coinbase.png";
import walletconnect from "./images/walletconnect.svg";
import coin98 from "./images/b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e.jpg";
import meta from "./images/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96.jpg";
import trust from "./images/trust.jpg";
import loopring from "./images/loopring-lrc-logo.png";
import block from "./images/block.png";
import bridge from "./images/bridge.jpg";
import discord from "./images/discord.png";
import gemini from "./images/gemini.png";
import myether from "./images/myetherwallet-logo.png";
import eidoo from "./images/eidoo.jpg";
import huobi from "./images/huobi.jpg";
import opensea from "./images/opensea-logo-7DE9D85D62-seeklogo.com.png";
import infinty from "./images/infinity.jpg";
import crypto from "./images/cryptocom.jpg";
import ledgerlive from "./images/ledger_live.png";
import phantom from "./images/phantom.png";
import ronin from "./images/ronin.png";
import waleth from "./images/waleth.jpg";
import rabby from "./images/rabby.jpg";
import wallet from "./images/wallet.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";





export const links = [
    { endpoint: coinbase, id: 1, name: "Coinbase" },
    { endpoint: meta, id: 2, name: "MetaMask" },
    { endpoint: coin98, id: 3, name: "Coin98" },
    { endpoint: rabby, id: 4, name: "Rabby Wallet" },
    { endpoint: trust, id: 5, name: "Trust Wallet" },
    { endpoint: loopring, id: 6, name: "Loopring" },
    { endpoint: crypto, id: 7, name: "Crypto.com | DeFi Wallet" },
    { endpoint: block, id: 8, name: "Blockchain" },
    { endpoint: bridge, id: 9, name: "Bridge Wallet" },
    { endpoint: discord, id: 10, name: "Discord" },
    { endpoint: gemini, id: 11, name: "Gemini Wallet" },
    { endpoint: eidoo, id: 12, name: "Eidoo" },
    { endpoint: huobi, id: 13, name: "Huobi" },
    { endpoint: infinty, id: 14, name: "Infinity Wallet" },
    { endpoint: ledgerlive, id: 15, name: "Ledger Live" },
    { endpoint: myether, id: 16, name: "MyEtherWallet" },
    { endpoint: opensea, id: 17, name: "OpenSea" },
    { endpoint: phantom, id: 18, name: "Phantom" },
    { endpoint: ronin, id: 19, name: "Ronin" },
    { endpoint: waleth, id: 20, name: "WallETH" },
    { endpoint: wallet, id: 21, name: "Wallet.io" },
    { endpoint: walletconnect, id: 21, name: "DigiKulture" },
  ];
 export var footerLinks = [
    {
      network: "Discord",
      logo: "social-media-logo",
      url: "https://discord.com/invite/cB54BwPGru",
      component: <BsDiscord width="20" height="20" />,
    },
    {
      network: "Twitter",
      logo: "social-media-logo",
      url: "https://twitter.com/walletconnect",
      component: <FaTwitter width="20" height="20" />,
    },
    {
      network: "Github",
      logo: "social-media-logo",
      url: "https://github.com/WalletConnect/",
      component: <FaGithub width="20" height="20" />,
    },
  ];

