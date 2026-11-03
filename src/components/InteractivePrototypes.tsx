import React, { useState } from 'react';
import {
  ArrowUpRight, ArrowDownLeft, ShieldCheck, ShoppingBag, Plus, Minus, Trash2,
  Sun, CloudRain, Wind, Droplets, Droplet, Umbrella, Cloud, CloudSun, RotateCcw, Check, Heart, Search, SlidersHorizontal,
  Star, Share2, MoreVertical, ChevronLeft, Bell, LayoutGrid, User, Tag, Sparkles, CheckCircle2, History, Delete
} from 'lucide-react';

/* ============================================================
   1. Interactive Banking Prototype (Diane Cruz Mobile Banking)
   ============================================================ */
export function BankingInteractiveDemo() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'analytics' | 'send'>('home');
  const [balance, setBalance] = useState(10524.15);
  const [cardBalance, setCardBalance] = useState(4556.15);
  const [sendAmount, setSendAmount] = useState('150.00');
  const [selectedContact, setSelectedContact] = useState('Saul');
  const [analyticsTab, setAnalyticsTab] = useState<'expenses' | 'income' | 'limits'>('expenses');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const contacts = [
    { name: 'Saul', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80', role: 'Colleague' },
    { name: 'Lacie', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80', role: 'Designer' },
    { name: 'Arnold', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80', role: 'Friend' },
    { name: 'Tessa', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80', role: 'Family' },
  ];

  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Starbucks Coffee', time: 'Aug 24, 5:27 PM', amount: -14.99, card: '•••• 4568', icon: '☕', brandColor: '#00704A' },
    { id: 2, name: 'DKNY', time: 'Aug 20, 2:14 PM', amount: -40.00, card: '•••• 0961', icon: '🛍️', brandColor: '#1E293B' },
    { id: 3, name: 'Netflix', time: 'Aug 12, 07:25 PM', amount: -70.00, card: '•••• 0961', icon: '🎬', brandColor: '#E50914' },
    { id: 4, name: 'KFC', time: 'Aug 06, 05:12 PM', amount: -12.60, card: '•••• 4568', icon: '🍗', brandColor: '#C41230' },
  ]);

  const handleKeypadPress = (key: string) => {
    if (key === '⌫') {
      const clean = sendAmount.replace(/,/g, '');
      if (clean.length <= 1) {
        setSendAmount('0.00');
      } else {
        const sliced = clean.slice(0, -1);
        setSendAmount(sliced.includes('.') ? sliced : sliced + '.00');
      }
      return;
    }

    if (key === '.') {
      if (!sendAmount.includes('.')) {
        setSendAmount(sendAmount + '.');
      }
      return;
    }

    if (sendAmount === '150.00' || sendAmount === '0.00' || sendAmount === '0') {
      setSendAmount(key);
    } else {
      setSendAmount(sendAmount + key);
    }
  };

  const handleSendMoney = () => {
    const amt = parseFloat(sendAmount);
    if (isNaN(amt) || amt <= 0 || amt > balance) return;

    setBalance(prev => prev - amt);
    setCardBalance(prev => Math.max(0, prev - amt));
    const newTx = {
      id: Date.now(),
      name: `Transfer to ${selectedContact}`,
      time: 'Just now',
      amount: -amt,
      card: '•••• 4568',
      icon: '💸',
      brandColor: '#0D9488'
    };
    setTransactions(prev => [newTx, ...prev]);
    setSuccessMessage(`$${amt.toFixed(2)} sent to ${selectedContact}!`);
    setTimeout(() => {
      setSuccessMessage(null);
      setCurrentScreen('home');
    }, 1800);
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      {/* Interactive Screen View Selector */}
      <div className="flex items-center justify-between bg-neutral-200/80 p-1.5 rounded-full text-xs font-semibold text-neutral-700">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 pl-3 hidden sm:inline">
          Interactive Prototype:
        </span>
        <div className="flex gap-1 w-full sm:w-auto">
          <button
            onClick={() => setCurrentScreen('home')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              currentScreen === 'home' ? 'bg-[#0F172A] text-white shadow-sm font-bold' : 'hover:text-black'
            }`}
          >
            1. Home / Wallet
          </button>
          <button
            onClick={() => setCurrentScreen('analytics')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              currentScreen === 'analytics' ? 'bg-[#0F172A] text-white shadow-sm font-bold' : 'hover:text-black'
            }`}
          >
            2. Analytics
          </button>
          <button
            onClick={() => setCurrentScreen('send')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              currentScreen === 'send' ? 'bg-[#0F172A] text-white shadow-sm font-bold' : 'hover:text-black'
            }`}
          >
            3. Send Money
          </button>
        </div>
      </div>

      {/* iPhone 15 Pro Hardware Frame */}
      <div className="relative rounded-[48px] overflow-hidden border-[6px] border-[#18181B] shadow-2xl bg-[#F4F9F8] text-[#0F172A] font-sans min-h-[640px] flex flex-col justify-between">
        
        {/* Dynamic Status Bar & Notch */}
        <div className="pt-3 px-6 flex items-center justify-between text-xs text-[#0F172A] z-20">
          <span className="font-semibold text-xs tracking-tight">9:41</span>
          {/* Dynamic Island */}
          <div className="w-24 h-5 bg-black rounded-full" />
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="font-mono text-[10px]">5G</span>
            <div className="w-4 h-2.5 border border-[#0F172A] rounded-xs p-0.5">
              <div className="w-2.5 h-full bg-[#0F172A] rounded-xs" />
            </div>
          </div>
        </div>

        {/* SCREEN 1: HOME / WALLET */}
        {currentScreen === 'home' && (
          <div className="p-5 sm:p-6 space-y-5 animate-in fade-in">
            {/* User Profile Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                  alt="Diane Cruz"
                  className="w-10 h-10 rounded-full object-cover border border-white shadow-xs"
                />
                <div>
                  <span className="text-[11px] text-neutral-500 block leading-tight">Welcome,</span>
                  <span className="font-bold text-sm text-[#0F172A] leading-tight">Diane Cruz</span>
                </div>
              </div>
              <div className="relative p-2 rounded-full bg-white shadow-2xs border border-neutral-200/60 cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-teal-500 absolute top-2 right-2 ring-2 ring-white" />
                <svg className="w-4 h-4 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>

            {/* Balance + Quick Actions */}
            <div className="flex items-end justify-between pt-1">
              <div>
                <span className="text-xs text-neutral-500 font-medium">Balance</span>
                <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] font-heading mt-0.5 tabular-nums">
                  ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setBalance(prev => prev + 500)}
                  className="w-9 h-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
                  title="Add Funds"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentScreen('send')}
                  className="w-9 h-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
                  title="Send Money"
                >
                  <span className="text-base font-bold">⇄</span>
                </button>
              </div>
            </div>

            {/* Card Carousel Preview */}
            <div className="relative pt-1">
              <div className="w-full bg-[#0D1520] rounded-2xl p-4 text-white shadow-xl relative overflow-hidden border border-neutral-800">
                {/* Glowing vertical cyan lines background */}
                <div className="absolute right-0 top-0 bottom-0 w-44 bg-gradient-to-l from-teal-500/25 via-emerald-500/10 to-transparent pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider block">Current Balance</span>
                    <span className="text-2xl font-bold font-heading tracking-tight mt-0.5 block tabular-nums">
                      ${cardBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="text-teal-400 text-sm font-mono tracking-widest font-bold">
                    )))
                  </div>
                </div>

                <div className="mt-8 flex items-end justify-between text-xs">
                  <div>
                    <span className="text-[11px] text-neutral-300 font-medium block">Debit Card</span>
                    <span className="text-xs font-mono text-neutral-400">•••• 4568</span>
                  </div>
                  {/* Mastercard Red & Orange Overlapping Circles Logo */}
                  <div className="flex items-center -space-x-2">
                    <div className="w-5 h-5 rounded-full bg-[#EB001B]" />
                    <div className="w-5 h-5 rounded-full bg-[#F79E1B]/90" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions List */}
            <div className="pt-1">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-sm text-[#0F172A]">Recent transactions</h4>
                <button
                  type="button"
                  onClick={() => setCurrentScreen('analytics')}
                  className="text-xs font-semibold text-teal-600 hover:text-teal-700 cursor-pointer"
                >
                  View all
                </button>
              </div>

              <div className="space-y-2.5">
                {transactions.slice(0, 4).map(tx => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/70 hover:bg-white border border-neutral-200/50 transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm shadow-2xs"
                        style={{ backgroundColor: `${tx.brandColor}15`, color: tx.brandColor }}
                      >
                        {tx.icon}
                      </div>
                      <div>
                        <p className="font-bold text-xs text-[#0F172A]">{tx.name}</p>
                        <p className="text-[10px] text-neutral-500 font-mono">{tx.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-xs font-mono text-[#0F172A] block">
                        {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono">{tx.card}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: ANALYTICS (October Donut Chart) */}
        {currentScreen === 'analytics' && (
          <div className="p-5 sm:p-6 space-y-4 animate-in fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentScreen('home')}
                className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-sm hover:bg-neutral-100 cursor-pointer"
              >
                ←
              </button>
              <h3 className="font-bold text-base text-[#0F172A]">Analytics</h3>
              <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-xs text-neutral-600">
                📊
              </div>
            </div>

            {/* Segmented Control Tabs */}
            <div className="flex bg-neutral-200/70 p-1 rounded-full text-xs font-semibold text-neutral-600">
              <button
                type="button"
                onClick={() => setAnalyticsTab('expenses')}
                className={`flex-1 py-1 rounded-full transition-all cursor-pointer ${
                  analyticsTab === 'expenses' ? 'bg-[#0F172A] text-white shadow-xs' : 'hover:text-black'
                }`}
              >
                Expenses
              </button>
              <button
                type="button"
                onClick={() => setAnalyticsTab('income')}
                className={`flex-1 py-1 rounded-full transition-all cursor-pointer ${
                  analyticsTab === 'income' ? 'bg-[#0F172A] text-white shadow-xs' : 'hover:text-black'
                }`}
              >
                Income
              </button>
              <button
                type="button"
                onClick={() => setAnalyticsTab('limits')}
                className={`flex-1 py-1 rounded-full transition-all cursor-pointer ${
                  analyticsTab === 'limits' ? 'bg-[#0F172A] text-white shadow-xs' : 'hover:text-black'
                }`}
              >
                Limits
              </button>
            </div>

            {/* Total Expenses Header */}
            <div className="pt-1">
              <span className="text-xs text-neutral-500 font-medium">Total expenses</span>
              <div className="flex items-center justify-between">
                <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-heading mt-0.5">
                  $2 316.27
                </h4>
                <div className="flex gap-1.5 p-1 bg-white border border-neutral-200 rounded-lg text-xs">
                  <span className="px-1.5 py-0.5 bg-[#0F172A] text-white rounded font-bold">🍩</span>
                  <span className="px-1.5 py-0.5 text-neutral-400">☰</span>
                </div>
              </div>
            </div>

            {/* Segmented Donut Chart: Total Expenses October */}
            <div className="relative py-2 flex flex-col items-center justify-center">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Background Track */}
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                  {/* Transport 24% (Teal Cyan) */}
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#06B6D4" strokeWidth="4.2" strokeDasharray="24, 100" />
                  {/* Food 19% (Mint Green) */}
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10B981" strokeWidth="4.2" strokeDasharray="19, 100" strokeDashoffset="-24" />
                  {/* Travel 11% (Purple) */}
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#8B5CF6" strokeWidth="4.2" strokeDasharray="11, 100" strokeDashoffset="-43" />
                  {/* Health / Other 46% (Yellow/Amber) */}
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F59E0B" strokeWidth="4.2" strokeDasharray="46, 100" strokeDashoffset="-54" />
                </svg>

                {/* Donut Center Label */}
                <div className="absolute text-center space-y-0.5">
                  <span className="text-[10px] text-neutral-400 block font-medium">Total expenses</span>
                  <span className="text-sm font-bold font-heading text-[#0F172A] block">October</span>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-medium text-neutral-600 mt-2">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-500" />Transport 24%</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" />Food 19%</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500" />Travel 11%</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" />Health 46%</span>
              </div>
            </div>

            {/* Recent Transactions in Analytics */}
            <div className="pt-2">
              <h5 className="font-bold text-xs text-[#0F172A] mb-2">Recent transactions</h5>
              <div className="space-y-2">
                {transactions.slice(0, 2).map(tx => (
                  <div key={tx.id} className="flex items-center justify-between p-2 rounded-xl bg-white border border-neutral-200/60 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: `${tx.brandColor}15`, color: tx.brandColor }}>
                        {tx.icon}
                      </div>
                      <div>
                        <p className="font-bold text-xs text-[#0F172A]">{tx.name}</p>
                        <p className="text-[10px] text-neutral-400 font-mono">{tx.time}</p>
                      </div>
                    </div>
                    <span className="font-bold font-mono text-xs text-[#0F172A]">${Math.abs(tx.amount).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: SEND MONEY */}
        {currentScreen === 'send' && (
          <div className="p-5 sm:p-6 space-y-4 animate-in fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentScreen('home')}
                className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-sm hover:bg-neutral-100 cursor-pointer"
              >
                ←
              </button>
              <h3 className="font-bold text-base text-[#0F172A]">Send Money</h3>
              <div className="w-8" />
            </div>

            {/* Recipient Avatars Row */}
            <div className="pt-1">
              <div className="flex justify-between items-center gap-2">
                {contacts.map(c => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedContact(c.name)}
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className={`relative p-0.5 rounded-full transition-all ${
                      selectedContact === c.name ? 'ring-2 ring-teal-500 scale-105' : 'opacity-80 group-hover:opacity-100'
                    }`}>
                      <img
                        src={c.avatar}
                        alt={c.name}
                        className="w-12 h-12 rounded-full object-cover border border-white"
                      />
                      {selectedContact === c.name && (
                        <div className="w-3.5 h-3.5 bg-teal-500 rounded-full text-white flex items-center justify-center text-[8px] absolute bottom-0 right-0 font-bold border border-white">
                          ✓
                        </div>
                      )}
                    </div>
                    <span className={`text-xs ${selectedContact === c.name ? 'font-bold text-[#0F172A]' : 'text-neutral-500'}`}>
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input with Caret */}
            <div className="text-center py-3 bg-white/70 rounded-2xl border border-neutral-200/60 shadow-2xs">
              <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider block">Transfer Amount</span>
              <div className="text-4xl font-bold font-heading text-[#0F172A] tracking-tight mt-1 flex items-center justify-center">
                <span>${sendAmount}</span>
                <span className="w-0.5 h-8 bg-teal-500 animate-pulse ml-1 inline-block" />
              </div>
            </div>

            {/* Quick Amount Suggestion Pills */}
            <div className="grid grid-cols-4 gap-2">
              {['150.00', '200.00', '300.00', '500.00'].map(amt => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setSendAmount(amt)}
                  className={`py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                    sendAmount === amt
                      ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  ${parseInt(amt)}
                </button>
              ))}
            </div>

            {/* Numeric Keypad (4 Rows x 3 Cols) */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'].map(k => (
                <button
                  key={k}
                  type="button"
                  onClick={() => handleKeypadPress(k)}
                  className="h-10 rounded-xl bg-white hover:bg-neutral-100 text-[#0F172A] font-bold text-base border border-neutral-200/70 shadow-2xs active:scale-95 transition-all cursor-pointer"
                >
                  {k}
                </button>
              ))}
            </div>

            {/* Primary CTA: Send Money */}
            <button
              type="button"
              onClick={handleSendMoney}
              className="w-full py-3.5 rounded-2xl bg-[#0F172A] hover:bg-neutral-800 text-white font-bold text-sm tracking-wide shadow-lg transition-transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Send money</span>
              <ArrowUpRight className="w-4 h-4 text-teal-400" />
            </button>

            {successMessage && (
              <div className="p-2.5 bg-emerald-100 border border-emerald-300 rounded-xl text-center text-xs font-bold text-emerald-800 animate-in fade-in">
                {successMessage}
              </div>
            )}
          </div>
        )}

        {/* Bottom Home Indicator */}
        <div className="py-2.5 flex justify-center z-20">
          <div className="w-32 h-1 bg-[#0F172A] rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   2. Interactive E-Commerce Prototype (Super Sale, Wireless Headphones, My Cart)
   ============================================================ */
export function EcommerceInteractiveDemo() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'product' | 'cart'>('home');
  const [activeCategory, setActiveCategory] = useState('Shoes');
  const [selectedColor, setSelectedColor] = useState('Burgundy');
  const [productQuantity, setProductQuantity] = useState(1);
  const [detailTab, setDetailTab] = useState<'Description' | 'Specifications' | 'Reviews'>('Description');
  const [isFavorite, setIsFavorite] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountNotice, setDiscountNotice] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  // Initial cart items strictly matching the user's mockup in image_4e57b8b9.png
  const [cartItems, setCartItems] = useState([
    {
      id: 'sweter',
      name: 'Woman Sweter',
      category: 'Woman Fashion',
      price: 70.00,
      quantity: 1,
      imageBg: 'bg-amber-100',
      icon: '🧶',
      tagColor: '#D97706'
    },
    {
      id: 'watch',
      name: 'Smart Watch',
      category: 'Electronics',
      price: 55.00,
      quantity: 1,
      imageBg: 'bg-slate-200',
      icon: '⌚',
      tagColor: '#475569'
    },
    {
      id: 'headphone',
      name: 'Wireless Headphone',
      category: 'Electronics',
      price: 120.00,
      quantity: 1,
      imageBg: 'bg-orange-100',
      icon: '🎧',
      tagColor: '#EA580C'
    }
  ]);

  const categories = [
    { id: 'Shoes', label: 'Shoes', icon: '👟' },
    { id: 'Beauty', label: 'Beauty', icon: '💄' },
    { id: "Women's Fashion", label: "Women's Fashion", icon: '👗' },
    { id: 'Jewelry', label: 'Jewelry', icon: '💍' },
    { id: "Men's Fashion", label: "Men's Fashion", icon: '👔' },
  ];

  const colorSwatches = [
    { name: 'Burgundy', hex: '#831843' },
    { name: 'Midnight Black', hex: '#0F172A' },
    { name: 'Royal Blue', hex: '#2563EB' },
    { name: 'Warm Brown', hex: '#9A3412' },
    { name: 'Pearl White', hex: '#F1F5F9', border: true },
  ];

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const nextQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: nextQty };
      }
      return item;
    }));
  };

  const removeCartItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from cart');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = () => {
    const existing = cartItems.find(i => i.id === 'headphone-pro');
    if (existing) {
      updateQuantity('headphone-pro', productQuantity);
    } else {
      setCartItems(prev => [
        ...prev,
        {
          id: 'headphone-pro',
          name: `Wireless Headphone (${selectedColor})`,
          category: 'Electronics · Pro',
          price: 520.00,
          quantity: productQuantity,
          imageBg: 'bg-orange-100',
          icon: '🎧',
          tagColor: '#EA580C'
        }
      ]);
    }
    showToast(`Added ${productQuantity}x Wireless Headphone to cart!`);
  };

  const handleApplyPromo = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'SUPER50' || clean === '50OFF') {
      setDiscountPercent(50);
      setDiscountNotice('🎉 50% Super Sale discount applied!');
    } else if (clean === 'DISCOUNT20' || clean === 'SAVE20') {
      setDiscountPercent(20);
      setDiscountNotice('✨ 20% Discount voucher applied!');
    } else if (clean === '') {
      setDiscountNotice('Please enter a voucher code (try SUPER50)');
    } else {
      setDiscountPercent(15);
      setDiscountNotice(`🎁 Code applied: 15% off regular items`);
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  return (
    <div className="max-w-md mx-auto space-y-4">
      {/* Interactive Screen View Selector */}
      <div className="flex items-center justify-between bg-neutral-200/80 p-1.5 rounded-full text-xs font-semibold text-neutral-700">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 pl-3 hidden sm:inline">
          Screen View:
        </span>
        <div className="flex gap-1 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setCurrentScreen('home')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              currentScreen === 'home' ? 'bg-[#EA580C] text-white shadow-sm font-bold' : 'hover:text-black'
            }`}
          >
            1. Feed / Home
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('product')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              currentScreen === 'product' ? 'bg-[#EA580C] text-white shadow-sm font-bold' : 'hover:text-black'
            }`}
          >
            2. Product Detail
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('cart')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-full transition-all cursor-pointer relative ${
              currentScreen === 'cart' ? 'bg-[#EA580C] text-white shadow-sm font-bold' : 'hover:text-black'
            }`}
          >
            3. My Cart
            {totalCartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-white text-[#EA580C] text-[10px] rounded-full font-bold">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* iPhone 15 Pro Hardware Frame */}
      <div className="relative rounded-[48px] overflow-hidden border-[6px] border-[#18181B] shadow-2xl bg-[#F8F9FA] text-[#0F172A] font-sans min-h-[670px] flex flex-col justify-between select-none">
        
        {/* Dynamic Status Bar & Notch */}
        <div className="pt-3 px-6 flex items-center justify-between text-xs text-[#0F172A] z-20">
          <span className="font-semibold text-xs tracking-tight">12:10</span>
          {/* Dynamic Island */}
          <div className="w-24 h-5 bg-black rounded-full" />
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="font-mono text-[10px]">5G</span>
            <div className="w-4 h-2.5 border border-[#0F172A] rounded-xs p-0.5">
              <div className="w-2.5 h-full bg-[#0F172A] rounded-xs" />
            </div>
          </div>
        </div>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="absolute top-12 left-6 right-6 z-50 bg-[#0F172A] text-white text-xs font-semibold py-2 px-4 rounded-xl shadow-xl flex items-center justify-between animate-in fade-in slide-in-from-top-2">
            <span>{toastMessage}</span>
            <button
              type="button"
              onClick={() => setCurrentScreen('cart')}
              className="text-[#FB923C] font-bold underline cursor-pointer ml-2"
            >
              View Cart →
            </button>
          </div>
        )}

        {/* ============================================================
            SCREEN 1: FEED / HOME (Super Sale Up to 50%)
            ============================================================ */}
        {currentScreen === 'home' && (
          <div className="p-4 sm:p-5 space-y-4 animate-in fade-in flex-1 overflow-y-auto">
            {/* Top Navigation Bar: Grid Menu & Notifications */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="w-10 h-10 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs flex items-center justify-center text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
                title="Menu"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-1">
                <span className="text-sm font-extrabold font-heading tracking-tight text-[#0F172A]">
                  Discover
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCurrentScreen('cart')}
                className="w-10 h-10 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs flex items-center justify-center text-neutral-800 hover:bg-neutral-50 relative transition-colors cursor-pointer"
                title="Notifications"
              >
                <Bell className="w-5 h-5 text-neutral-700" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#EA580C]" />
              </button>
            </div>

            {/* Search Input Bar with Filter Slider */}
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2.5 bg-white border border-neutral-200/80 rounded-2xl px-3.5 py-2.5 shadow-2xs">
                <Search className="w-4 h-4 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full text-xs text-neutral-800 placeholder:text-neutral-400 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="w-10 h-10 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center shadow-md shadow-orange-500/20 hover:bg-[#C2410C] transition-colors cursor-pointer"
                title="Filter"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Promotional Banner: Super Sale Discount Up to 50% */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#FB923C] p-5 text-white shadow-lg shadow-orange-500/20">
              <div className="relative z-10 max-w-[65%] space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-black font-heading leading-tight tracking-tight drop-shadow-xs">
                  Super Sale
                </h3>
                <p className="text-xs font-semibold text-orange-100 font-sans">
                  Discount Up to 50%
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentScreen('product')}
                    className="px-4 py-2 bg-white text-[#EA580C] text-xs font-bold rounded-full shadow-sm hover:bg-neutral-100 transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Shop Now</span>
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </div>

              {/* Sneaker Graphic Illustration */}
              <div className="absolute -right-3 -bottom-2 w-36 h-36 flex items-center justify-center pointer-events-none opacity-90 drop-shadow-xl transform rotate-[-12deg]">
                <div className="relative w-full h-full flex items-center justify-center text-6xl">
                  👟
                </div>
              </div>

              {/* Decorative radial blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Categories Carousel */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F172A] tracking-tight">Categories</span>
              </div>
              <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className="flex flex-col items-center gap-1.5 shrink-0 group cursor-pointer"
                  >
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center text-xl transition-all ${
                        activeCategory === cat.id
                          ? 'bg-[#EA580C] text-white shadow-md shadow-orange-500/20 scale-105'
                          : 'bg-white border border-neutral-200/70 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <span>{cat.icon}</span>
                    </div>
                    <span
                      className={`text-[10px] text-center max-w-[62px] truncate transition-colors ${
                        activeCategory === cat.id ? 'font-bold text-[#EA580C]' : 'text-neutral-500'
                      }`}
                    >
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Special For You Section */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#0F172A] tracking-tight">Special For You</h4>
                <button
                  type="button"
                  onClick={() => setCurrentScreen('product')}
                  className="text-xs font-semibold text-[#EA580C] hover:underline cursor-pointer"
                >
                  See all
                </button>
              </div>

              {/* 2-Column Product Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Product 1: Wireless Headphone ($120.00) */}
                <div
                  onClick={() => setCurrentScreen('product')}
                  className="bg-white rounded-3xl p-3 border border-neutral-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer relative group flex flex-col justify-between"
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFavorite(!isFavorite);
                    }}
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 border border-neutral-200/60 shadow-2xs flex items-center justify-center z-10 cursor-pointer"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-[#EA580C] text-[#EA580C]' : 'text-neutral-400'}`} />
                  </button>

                  <div className="w-full h-28 rounded-2xl bg-orange-50/60 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                    🎧
                  </div>

                  <div className="pt-2 space-y-1">
                    <p className="font-bold text-xs text-[#0F172A] truncate">Wireless Headphone</p>
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-[#0F172A] font-mono">$120.00</span>
                      {/* Color Preview Dots */}
                      <div className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#831843]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 2: Woman Sweter ($120.00) */}
                <div
                  onClick={() => {
                    updateQuantity('sweter', 1);
                    showToast('Added Woman Sweter to cart!');
                  }}
                  className="bg-white rounded-3xl p-3 border border-neutral-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer relative group flex flex-col justify-between"
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showToast('Saved to wishlist');
                    }}
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 border border-neutral-200/60 shadow-2xs flex items-center justify-center z-10 cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 text-neutral-400 hover:text-[#EA580C]" />
                  </button>

                  <div className="w-full h-28 rounded-2xl bg-amber-50/60 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                    🧶
                  </div>

                  <div className="pt-2 space-y-1">
                    <p className="font-bold text-xs text-[#0F172A] truncate">Woman Sweter</p>
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-[#0F172A] font-mono">$120.00</span>
                      {/* Color Preview Dots */}
                      <div className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Bottom App Navigation Bar */}
            <div className="pt-2">
              <div className="bg-white rounded-3xl p-2 border border-neutral-200/80 shadow-sm flex items-center justify-around relative">
                <button
                  type="button"
                  onClick={() => setCurrentScreen('home')}
                  className="flex flex-col items-center text-[#EA580C] p-2 cursor-pointer"
                  title="Home"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C] mb-1" />
                  <span className="text-xs font-bold">Home</span>
                </button>

                <button
                  type="button"
                  onClick={() => showToast('Favorites: Wireless Headphone & Woman Sweter')}
                  className="text-neutral-400 hover:text-neutral-700 p-2 cursor-pointer"
                  title="Wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>

                {/* Floating Orange Bag Center Button */}
                <button
                  type="button"
                  onClick={() => setCurrentScreen('cart')}
                  className="w-12 h-12 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-lg shadow-orange-500/30 -mt-6 hover:bg-[#C2410C] transition-transform active:scale-95 cursor-pointer relative"
                  title="View Cart"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {totalCartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0F172A] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                      {totalCartCount}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => showToast('No new notifications')}
                  className="text-neutral-400 hover:text-neutral-700 p-2 cursor-pointer"
                  title="Notifications"
                >
                  <Bell className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => showToast('Profile: Tariqul Isalm Customer')}
                  className="text-neutral-400 hover:text-neutral-700 p-2 cursor-pointer"
                  title="Profile"
                >
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            SCREEN 2: PRODUCT DETAIL (Wireless Headphone $520.00)
            ============================================================ */}
        {currentScreen === 'product' && (
          <div className="p-4 sm:p-5 space-y-4 animate-in fade-in flex-1 overflow-y-auto">
            {/* Header: Back & Actions */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentScreen('home')}
                className="w-9 h-9 rounded-full bg-white border border-neutral-200/80 shadow-2xs flex items-center justify-center text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                title="Back"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => showToast('Share link copied to clipboard!')}
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200/80 shadow-2xs flex items-center justify-center text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  title="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200/80 shadow-2xs flex items-center justify-center cursor-pointer"
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#EA580C] text-[#EA580C]' : 'text-neutral-400'}`} />
                </button>
              </div>
            </div>

            {/* Hero Image Card with Carousel Dots */}
            <div className="relative rounded-3xl bg-neutral-100/90 border border-neutral-200/70 p-6 flex flex-col items-center justify-center min-h-[190px]">
              <div className="text-7xl drop-shadow-md transform transition-transform hover:scale-105">
                🎧
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
              </div>
            </div>

            {/* Product Title & Price */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-heading text-[#0F172A] tracking-tight">
                  Wireless Headphone
                </h3>
                <span className="text-xl font-black font-mono text-[#0F172A]">
                  $520.00
                </span>
              </div>

              {/* Seller and Rating Line */}
              <div className="flex items-center justify-between text-xs pt-0.5">
                <div className="flex items-center gap-1.5 text-neutral-600">
                  <span className="text-neutral-500 font-medium">Seller:</span>
                  <span className="font-bold text-[#0F172A]">Tariqul Isalm</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 fill-sky-100" />
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 text-amber-900 font-bold">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>4.8</span>
                  <span className="text-[10px] text-neutral-400 font-normal">(320 Review)</span>
                </div>
              </div>
            </div>

            {/* Color Swatches */}
            <div className="space-y-2 pt-1 border-t border-neutral-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0F172A]">Color</span>
                <span className="text-neutral-500 font-mono text-[11px]">{selectedColor}</span>
              </div>
              <div className="flex items-center gap-2.5">
                {colorSwatches.map(swatch => (
                  <button
                    key={swatch.name}
                    type="button"
                    onClick={() => setSelectedColor(swatch.name)}
                    className={`w-7 h-7 rounded-full transition-all cursor-pointer relative flex items-center justify-center ${
                      selectedColor === swatch.name
                        ? 'ring-2 ring-offset-2 ring-[#EA580C] scale-110'
                        : 'hover:scale-105'
                    } ${swatch.border ? 'border border-neutral-300' : ''}`}
                    style={{ backgroundColor: swatch.hex }}
                    title={swatch.name}
                  >
                    {selectedColor === swatch.name && (
                      <span className={`text-[10px] font-bold ${swatch.name === 'Pearl White' ? 'text-black' : 'text-white'}`}>
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info Tabs */}
            <div className="space-y-2 pt-1">
              <div className="flex border-b border-neutral-200/80 text-xs font-semibold">
                {(['Description', 'Specifications', 'Reviews'] as const).map(tab => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setDetailTab(tab)}
                    className={`py-2 px-3 border-b-2 transition-colors cursor-pointer ${
                      detailTab === tab
                        ? 'border-[#EA580C] text-[#EA580C] font-bold'
                        : 'border-transparent text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="text-xs text-neutral-600 leading-relaxed min-h-[50px]">
                {detailTab === 'Description' && (
                  <p>
                    Engineered with custom 40mm titanium dynamic drivers and hybrid active noise cancellation (ANC), delivering acoustic precision, deep bass, and up to 45 hours of playtime.
                  </p>
                )}
                {detailTab === 'Specifications' && (
                  <p className="space-y-1 font-mono text-[11px]">
                    <span className="block">Drivers: 40mm Titanium Dynamic</span>
                    <span className="block">Battery: 45h Playtime · 10m Quick Charge</span>
                    <span className="block">Connectivity: Bluetooth 5.3 + 3.5mm AUX</span>
                  </p>
                )}
                {detailTab === 'Reviews' && (
                  <p>
                    ★ 4.8 / 5.0 based on 320 verified orders. "Remarkable isolation, plush memory foam earcups, and studio-grade sound stage."
                  </p>
                )}
              </div>
            </div>

            {/* Floating Action Bar: Stepper & Add to Cart */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center bg-white border border-neutral-200/80 rounded-2xl p-1 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setProductQuantity(Math.max(1, productQuantity - 1))}
                  className="w-8 h-8 rounded-xl hover:bg-neutral-100 flex items-center justify-center text-neutral-700 font-bold cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-bold text-xs font-mono">{productQuantity}</span>
                <button
                  type="button"
                  onClick={() => setProductQuantity(productQuantity + 1)}
                  className="w-8 h-8 rounded-xl hover:bg-neutral-100 flex items-center justify-center text-neutral-700 font-bold cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-3 px-4 rounded-2xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart (${(520 * productQuantity).toFixed(2)})</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================
            SCREEN 3: MY CART (Woman Sweter, Smart Watch, Headphone)
            ============================================================ */}
        {currentScreen === 'cart' && (
          <div className="p-4 sm:p-5 space-y-4 animate-in fade-in flex-1 overflow-y-auto">
            {/* Header: Back & Title */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentScreen('home')}
                className="w-9 h-9 rounded-full bg-white border border-neutral-200/80 shadow-2xs flex items-center justify-center text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                title="Back"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="font-bold text-base text-[#0F172A] font-heading">My Cart</h3>
              <button
                type="button"
                onClick={() => {
                  setCartItems([
                    { id: 'sweter', name: 'Woman Sweter', category: 'Woman Fashion', price: 70.00, quantity: 1, imageBg: 'bg-amber-100', icon: '🧶', tagColor: '#D97706' },
                    { id: 'watch', name: 'Smart Watch', category: 'Electronics', price: 55.00, quantity: 1, imageBg: 'bg-slate-200', icon: '⌚', tagColor: '#475569' },
                    { id: 'headphone', name: 'Wireless Headphone', category: 'Electronics', price: 120.00, quantity: 1, imageBg: 'bg-orange-100', icon: '🎧', tagColor: '#EA580C' }
                  ]);
                  setDiscountPercent(0);
                  setDiscountNotice(null);
                  showToast('Cart reset to original mockup items');
                }}
                className="w-9 h-9 rounded-full bg-white border border-neutral-200/80 shadow-2xs flex items-center justify-center text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                title="Reset Cart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="space-y-3">
              {cartItems.length === 0 ? (
                <div className="py-8 text-center space-y-2">
                  <div className="text-4xl">🛍️</div>
                  <p className="text-xs font-bold text-[#0F172A]">Your cart is empty</p>
                  <button
                    type="button"
                    onClick={() => setCurrentScreen('home')}
                    className="text-xs text-[#EA580C] font-bold underline cursor-pointer"
                  >
                    Explore trending products →
                  </button>
                </div>
              ) : (
                cartItems.map(item => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-3 border border-neutral-200/80 shadow-2xs flex items-center justify-between gap-3"
                  >
                    {/* Item Thumbnail */}
                    <div className={`w-14 h-14 rounded-xl ${item.imageBg} flex items-center justify-center text-2xl shrink-0`}>
                      <span>{item.icon}</span>
                    </div>

                    {/* Item Information */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-[#0F172A] truncate">{item.name}</h4>
                      <p className="text-[11px] text-neutral-400 font-medium">{item.category}</p>
                      <p className="font-extrabold text-xs text-[#0F172A] font-mono mt-0.5">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Stepper & Trash Button */}
                    <div className="flex flex-col items-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => removeCartItem(item.id)}
                        className="text-[#EA580C] hover:text-red-600 p-1 cursor-pointer transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center bg-neutral-100 rounded-lg p-0.5 border border-neutral-200/60">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-neutral-600 hover:bg-white text-xs font-bold cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold font-mono text-[#0F172A]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-neutral-600 hover:bg-white text-xs font-bold cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Discount Code Input */}
            <div className="bg-white rounded-2xl p-3 border border-neutral-200/80 shadow-2xs space-y-2">
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Discount Code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-neutral-100 border border-neutral-200 rounded-xl px-3 py-2 text-xs text-[#0F172A] placeholder:text-neutral-400 focus:outline-none focus:border-[#EA580C]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#EA580C] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#C2410C] transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {/* Quick voucher pill suggestions */}
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
                <span>Try code:</span>
                <button
                  type="button"
                  onClick={() => {
                    setPromoCode('SUPER50');
                    setDiscountPercent(50);
                    setDiscountNotice('🎉 50% Super Sale discount applied!');
                  }}
                  className="px-2 py-0.5 bg-orange-50 text-[#EA580C] font-bold rounded-md border border-orange-200 hover:bg-orange-100 cursor-pointer"
                >
                  SUPER50 (50% off)
                </button>
              </div>

              {discountNotice && (
                <p className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">
                  {discountNotice}
                </p>
              )}
            </div>

            {/* Price Breakdown Card */}
            <div className="bg-white rounded-2xl p-3.5 border border-neutral-200/80 shadow-2xs space-y-2 text-xs">
              <div className="flex justify-between text-neutral-500 font-medium">
                <span>Subtotal</span>
                <span className="font-mono font-bold text-[#0F172A]">${subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Discount ({discountPercent}%)</span>
                  <span className="font-mono font-bold">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-neutral-500 font-medium">
                <span>Shipping</span>
                <span className="font-mono text-emerald-600 font-bold">FREE</span>
              </div>
              <div className="pt-2 border-t border-neutral-100 flex justify-between items-center text-[#0F172A]">
                <span className="font-bold text-sm">Total</span>
                <span className="font-extrabold text-base font-mono text-[#0F172A]">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Primary Checkout CTA */}
            <button
              type="button"
              disabled={cartItems.length === 0}
              onClick={() => setCheckoutCompleted(true)}
              className="w-full py-3.5 rounded-2xl bg-[#EA580C] hover:bg-[#C2410C] disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Checkout</span>
              <span className="font-mono font-extrabold">(${total.toFixed(2)})</span>
            </button>

            {/* Checkout Confirmation Modal / State */}
            {checkoutCompleted && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-lg shadow-sm">
                  ✓
                </div>
                <h4 className="font-bold text-sm text-emerald-900 font-heading">Order Confirmed!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you! Receipt #ORD-2026-8942 has been generated. Total: ${total.toFixed(2)}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCheckoutCompleted(false);
                    setCurrentScreen('home');
                  }}
                  className="px-4 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Back to Discover
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom Home Indicator */}
        <div className="py-2 flex justify-center z-20">
          <div className="w-32 h-1 bg-[#0F172A] rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   3. Interactive Weather Prototype (Amsterdam Light Rain)
   ============================================================ */
export function WeatherInteractiveDemo() {
  const cities = [
    {
      name: 'Amsterdam',
      country: 'NL',
      time: '10:09 AM',
      tempC: 14,
      feelsLikeC: 12,
      condition: 'Light Rain',
      highC: 16,
      lowC: 10,
      precip: 65,
      wind: 18,
      humidity: 82,
      uv: '3 (Low)',
      hourly: [
        { time: '10:00', tempC: 14, icon: 'rain' },
        { time: '12:00', tempC: 15, icon: 'rain' },
        { time: '14:00', tempC: 16, icon: 'cloud' },
        { time: '16:00', tempC: 16, icon: 'cloud' },
        { time: '17:00', tempC: 15, icon: 'sun-cloud' },
        { time: '18:00', tempC: 12, icon: 'sun-cloud' },
      ],
      curvePoints: [
        { x: 18, y: 50, label: '14°' },
        { x: 68, y: 35, label: '15°' },
        { x: 120, y: 18, label: '16°' },
        { x: 172, y: 18, label: '16°' },
        { x: 224, y: 35, label: '15°' },
        { x: 250, y: 48, label: '14°' },
        { x: 275, y: 62, label: '13°' },
        { x: 295, y: 74, label: '12°' }
      ]
    },
    {
      name: 'Ahmedabad',
      country: 'GJ',
      time: '03:30 PM',
      tempC: 32,
      feelsLikeC: 34,
      condition: 'Sunny & Clear',
      highC: 36,
      lowC: 22,
      precip: 0,
      wind: 12,
      humidity: 36,
      uv: '8 (Very High)',
      hourly: [
        { time: '10:00', tempC: 28, icon: 'sun' },
        { time: '12:00', tempC: 31, icon: 'sun' },
        { time: '14:00', tempC: 35, icon: 'sun' },
        { time: '16:00', tempC: 36, icon: 'sun' },
        { time: '17:00', tempC: 34, icon: 'sun-cloud' },
        { time: '18:00', tempC: 31, icon: 'sun-cloud' },
      ],
      curvePoints: [
        { x: 18, y: 55, label: '28°' },
        { x: 68, y: 40, label: '31°' },
        { x: 120, y: 22, label: '35°' },
        { x: 172, y: 16, label: '36°' },
        { x: 224, y: 28, label: '34°' },
        { x: 250, y: 42, label: '33°' },
        { x: 275, y: 56, label: '32°' },
        { x: 295, y: 70, label: '31°' }
      ]
    },
    {
      name: 'Zurich',
      country: 'CH',
      time: '10:09 AM',
      tempC: 11,
      feelsLikeC: 9,
      condition: 'Overcast Drizzle',
      highC: 13,
      lowC: 7,
      precip: 75,
      wind: 15,
      humidity: 88,
      uv: '2 (Low)',
      hourly: [
        { time: '10:00', tempC: 10, icon: 'rain' },
        { time: '12:00', tempC: 12, icon: 'rain' },
        { time: '14:00', tempC: 13, icon: 'cloud' },
        { time: '16:00', tempC: 13, icon: 'cloud' },
        { time: '17:00', tempC: 12, icon: 'cloud' },
        { time: '18:00', tempC: 11, icon: 'rain' },
      ],
      curvePoints: [
        { x: 18, y: 58, label: '10°' },
        { x: 68, y: 44, label: '12°' },
        { x: 120, y: 30, label: '13°' },
        { x: 172, y: 30, label: '13°' },
        { x: 224, y: 44, label: '12°' },
        { x: 250, y: 54, label: '12°' },
        { x: 275, y: 64, label: '11°' },
        { x: 295, y: 72, label: '11°' }
      ]
    }
  ];

  const [activeCityIndex, setActiveCityIndex] = useState(0);
  const [useFahrenheit, setUseFahrenheit] = useState(false);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);

  const city = cities[activeCityIndex];

  const toTemp = (c: number) => {
    if (useFahrenheit) {
      return Math.round((c * 9) / 5 + 32);
    }
    return c;
  };

  const currentDisplayTemp = selectedHour !== null ? city.hourly[selectedHour].tempC : city.tempC;

  return (
    <div className="max-w-md mx-auto space-y-4">
      {/* Top interactive toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-200/80 p-2 rounded-full text-xs font-semibold text-neutral-700">
        <div className="flex gap-1">
          {cities.map((c, idx) => (
            <button
              key={c.name}
              type="button"
              onClick={() => {
                setActiveCityIndex(idx);
                setSelectedHour(null);
              }}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                activeCityIndex === idx
                  ? 'bg-[#0F172A] text-white shadow-xs font-bold'
                  : 'hover:text-black'
              }`}
            >
              {c.name}
              {idx === 0 && <span className="ml-1 text-[10px] text-amber-300 font-normal">(Mockup)</span>}
            </button>
          ))}
        </div>

        {/* Unit Toggle */}
        <div className="flex bg-neutral-300/80 rounded-full p-0.5 text-[11px] font-bold">
          <button
            type="button"
            onClick={() => setUseFahrenheit(false)}
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
              !useFahrenheit ? 'bg-white text-black shadow-2xs' : 'text-neutral-600'
            }`}
          >
            °C
          </button>
          <button
            type="button"
            onClick={() => setUseFahrenheit(true)}
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
              useFahrenheit ? 'bg-white text-black shadow-2xs' : 'text-neutral-600'
            }`}
          >
            °F
          </button>
        </div>
      </div>

      {/* iPhone Frame */}
      <div className="relative rounded-[48px] overflow-hidden border-[6px] border-[#18181B] shadow-2xl bg-neutral-900 text-white font-sans min-h-[660px] flex flex-col justify-between select-none">
        
        {/* Misty Alpine Mountain Rain Photographic Backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.82] contrast-[1.05]"
          style={{ backgroundImage: `url('/assets/aistudio/image_d23ca786.png')` }}
        />

        {/* Subtle rain drizzle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/55 pointer-events-none" />

        {/* Dynamic Island Notch & Top Status */}
        <div className="relative z-20 pt-3 px-6 flex items-center justify-between text-xs text-white/90">
          <span className="font-semibold text-xs tracking-tight">10:09</span>
          <div className="w-24 h-5 bg-black rounded-full" />
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="font-mono text-[10px]">5G</span>
            <div className="w-4 h-2.5 border border-white/90 rounded-xs p-0.5">
              <div className="w-2.5 h-full bg-white rounded-xs" />
            </div>
          </div>
        </div>

        {/* Main Weather Screen Content */}
        <div className="relative z-10 px-5 sm:px-6 pt-3 pb-4 space-y-4 flex-1 flex flex-col justify-between">
          
          {/* Header Location & Condition */}
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
              {city.name}, {city.country}
            </h3>
            <p className="text-xs text-white/75 font-mono">
              {city.time}
            </p>
            <p className="text-sm font-medium text-white drop-shadow-sm pt-0.5">
              {city.condition}
            </p>
          </div>

          {/* Current Temperature & Weather Icon */}
          <div className="text-center space-y-1.5">
            <div className="flex items-center justify-center gap-4 py-1">
              {/* Cloud with Raindrops Icon */}
              <div className="w-16 h-14 flex items-center justify-center drop-shadow-lg">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  {/* Cloud Shape */}
                  <path
                    d="M 18 38 A 12 12 0 0 1 26 18 A 16 16 0 0 1 50 24 A 12 12 0 0 1 48 40 L 18 40 Z"
                    fill="#FFFFFF"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                  />
                  {/* 3 Rain Drops */}
                  <line x1="22" y1="46" x2="19" y2="54" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
                  <line x1="32" y1="46" x2="29" y2="54" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
                  <line x1="42" y1="46" x2="39" y2="54" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Big Temperature Display */}
              <div className="flex items-start text-white drop-shadow-md font-light tracking-tighter">
                <span className="text-6xl sm:text-7xl tabular-nums leading-none">
                  {toTemp(currentDisplayTemp)}
                </span>
                <span className="text-2xl font-normal ml-0.5 mt-1 leading-none">
                  °{useFahrenheit ? 'F' : 'C'}
                </span>
              </div>
            </div>

            {/* Feels like & High/Low */}
            <p className="text-xs text-white/85 font-medium drop-shadow-xs">
              Feels like {toTemp(city.feelsLikeC)}° | H: {toTemp(city.highC)}° L: {toTemp(city.lowC)}°
            </p>
          </div>

          {/* Frosted Glass Hourly Forecast Widget */}
          <div className="bg-white/20 backdrop-blur-2xl rounded-3xl p-3.5 border border-white/30 shadow-xl space-y-2 relative overflow-hidden">
            
            {/* Subtle background radar grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="h-full w-full flex flex-col justify-between py-6">
                <div className="w-full border-t border-dashed border-white" />
                <div className="w-full border-t border-dashed border-white" />
                <div className="w-full border-t border-dashed border-white" />
              </div>
            </div>

            {/* Weather Icons Row */}
            <div className="relative z-10 flex justify-between items-center text-center px-1">
              {city.hourly.map((h, i) => (
                <button
                  key={h.time}
                  type="button"
                  onClick={() => setSelectedHour(selectedHour === i ? null : i)}
                  className={`flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    selectedHour === i ? 'scale-110 drop-shadow-md' : 'hover:scale-105 opacity-95'
                  }`}
                  title={`${h.time}: ${toTemp(h.tempC)}°`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {h.icon === 'rain' && <CloudRain className="w-4 h-4 text-white drop-shadow-xs" />}
                    {h.icon === 'cloud' && <Cloud className="w-4 h-4 text-white drop-shadow-xs" />}
                    {h.icon === 'sun-cloud' && <CloudSun className="w-4 h-4 text-amber-200 drop-shadow-xs" />}
                    {h.icon === 'sun' && <Sun className="w-4 h-4 text-amber-300 drop-shadow-xs" />}
                  </div>
                </button>
              ))}
            </div>

            {/* SVG Spline Temperature Curve with Labels */}
            <div className="relative h-20 w-full my-0.5">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 310 80">
                <defs>
                  <linearGradient id="weatherCurveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Spline Area Fill */}
                <path
                  d="M 18 50 C 50 38, 90 20, 120 18 C 145 16, 155 16, 172 18 C 200 22, 230 40, 295 74 L 295 80 L 18 80 Z"
                  fill="url(#weatherCurveFill)"
                />

                {/* Spline Curve Stroke */}
                <path
                  d="M 18 50 C 50 38, 90 20, 120 18 C 145 16, 155 16, 172 18 C 200 22, 230 40, 295 74"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  filter="url(#glow)"
                />

                {/* Temperature Value Labels plotted along curve */}
                {city.curvePoints.map((pt, idx) => (
                  <g key={idx}>
                    <circle cx={pt.x} cy={pt.y} r="2" fill="#FFFFFF" opacity="0.9" />
                    <text
                      x={pt.x}
                      y={pt.y - 6}
                      fill="#FFFFFF"
                      fontSize="9"
                      fontWeight="600"
                      textAnchor="middle"
                      className="font-sans select-none drop-shadow-xs"
                    >
                      {pt.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Hourly Timestamps */}
            <div className="relative z-10 flex justify-between text-[10px] text-white/80 font-mono pt-1">
              {city.hourly.map(h => (
                <span key={h.time}>{h.time}</span>
              ))}
            </div>
          </div>

          {/* 2x2 Frosted Glass Environmental Metrics Tiles */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            
            {/* Tile 1: Precipitation */}
            <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-3.5 border border-white/25 shadow-lg flex flex-col justify-between">
              <div className="flex items-center gap-2 text-white/90 text-xs font-medium">
                <Umbrella className="w-4 h-4 text-white" />
                <span>Precip</span>
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white mt-2">
                {city.precip}%
              </span>
            </div>

            {/* Tile 2: Wind */}
            <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-3.5 border border-white/25 shadow-lg flex flex-col justify-between">
              <div className="flex items-center gap-2 text-white/90 text-xs font-medium">
                <Wind className="w-4 h-4 text-white" />
                <span>Wind</span>
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white mt-2">
                {city.wind} km/h
              </span>
            </div>

            {/* Tile 3: Humidity */}
            <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-3.5 border border-white/25 shadow-lg flex flex-col justify-between">
              <div className="flex items-center gap-2 text-white/90 text-xs font-medium">
                <Droplet className="w-4 h-4 text-white" />
                <span>Humidity</span>
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white mt-2">
                {city.humidity}%
              </span>
            </div>

            {/* Tile 4: UV Index */}
            <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-3.5 border border-white/25 shadow-lg flex flex-col justify-between">
              <div className="flex items-center gap-2 text-white/90 text-xs font-medium">
                <Sun className="w-4 h-4 text-white" />
                <span>UV Index</span>
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white mt-2">
                {city.uv}
              </span>
            </div>
          </div>

          {/* White iOS Home Indicator Bar */}
          <div className="pt-2 flex justify-center z-20">
            <div className="w-32 h-1 bg-white/90 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   4. Interactive Minimalist iOS Calculator Prototype
   ============================================================ */
export function CalculatorInteractiveDemo() {
  const [display, setDisplay] = useState('1,125');
  const [expression, setExpression] = useState('25 × 45 =');
  const [prevValue, setPrevValue] = useState<number | null>(25);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([
    '15 + 85 = 100',
    '25 × 45 = 1,125'
  ]);
  const [showHistory, setShowHistory] = useState(false);

  const formatNumber = (numStr: string) => {
    const clean = numStr.replace(/,/g, '');
    const parts = clean.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      const current = display.replace(/,/g, '');
      const next = current === '0' || current === '1125' && expression.includes('=') ? digit : current + digit;
      setDisplay(formatNumber(next));
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
    setExpression('');
  };

  const backspace = () => {
    const clean = display.replace(/,/g, '');
    if (clean.length <= 1) {
      setDisplay('0');
    } else {
      setDisplay(formatNumber(clean.slice(0, -1)));
    }
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display.replace(/,/g, ''));

    if (nextOperator === '=') {
      if (prevValue !== null && operator) {
        let result = inputValue;
        if (operator === '+') result = prevValue + inputValue;
        else if (operator === '−') result = prevValue - inputValue;
        else if (operator === '×') result = prevValue * inputValue;
        else if (operator === '÷') result = inputValue === 0 ? 0 : prevValue / inputValue;

        const formula = `${prevValue} ${operator} ${inputValue} =`;
        setExpression(formula);
        const formatted = formatNumber(String(result));
        setDisplay(formatted);
        setHistory(prev => [formula + ' ' + formatted, ...prev.slice(0, 5)]);
        setPrevValue(result);
        setOperator(null);
        setWaitingForOperand(true);
      }
      return;
    }

    if (prevValue === null) {
      setPrevValue(inputValue);
      setExpression(`${inputValue} ${nextOperator}`);
    } else if (operator && !waitingForOperand) {
      let result = prevValue;
      if (operator === '+') result = prevValue + inputValue;
      else if (operator === '−') result = prevValue - inputValue;
      else if (operator === '×') result = prevValue * inputValue;
      else if (operator === '÷') result = inputValue === 0 ? 0 : prevValue / inputValue;

      setPrevValue(result);
      setDisplay(formatNumber(String(result)));
      setExpression(`${result} ${nextOperator}`);
    } else {
      setExpression(`${prevValue} ${nextOperator}`);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const percentage = () => {
    const value = parseFloat(display.replace(/,/g, ''));
    setDisplay(formatNumber(String(value / 100)));
  };

  return (
    <div className="relative rounded-[44px] overflow-hidden border-[4px] border-[#18181B] shadow-2xl max-w-xs mx-auto bg-[#F8F9FA] text-[#09090B] font-sans">
      {/* Phone Screen Area */}
      <div className="p-5 sm:p-6 space-y-3">
        {/* Status Bar */}
        <div className="flex items-center justify-between text-xs text-[#09090B] pb-1">
          <span className="font-semibold text-xs tracking-tight">9:41</span>
          {/* Dynamic Island */}
          <div className="w-20 h-5 bg-black rounded-full mx-auto" />
          <div className="flex items-center gap-1 text-[11px]">
            <span className="font-mono text-[10px]">5G</span>
            <div className="w-4 h-2.5 border border-black rounded-xs p-0.5"><div className="w-2.5 h-full bg-black rounded-xs" /></div>
          </div>
        </div>

        {/* History Toggle Bar */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={() => setShowHistory(prev => !prev)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#1E2430] hover:bg-neutral-200/60 transition-colors cursor-pointer"
            title="Calculation History"
          >
            <History className="w-4 h-4" />
          </button>
          {showHistory && (
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              Tape History
            </span>
          )}
        </div>

        {/* Calculation History Drawer (Collapsible) */}
        {showHistory && (
          <div className="bg-neutral-100 p-2.5 rounded-xl border border-neutral-200 text-xs font-mono space-y-1 text-right animate-in fade-in">
            {history.map((item, idx) => (
              <p key={idx} className="text-neutral-600 truncate">{item}</p>
            ))}
          </div>
        )}

        {/* Two-Line Display */}
        <div className="text-right pt-2 pb-1 pr-1">
          <p className="text-xs font-normal text-neutral-500 font-sans tracking-wide min-h-[18px]">
            {expression || ' '}
          </p>
          <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#09090B] tabular-nums font-heading">
            {display}
          </p>
          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={backspace}
              className="px-2 py-0.5 rounded-md border border-neutral-400/80 text-neutral-600 hover:text-black hover:border-black transition-colors cursor-pointer flex items-center justify-center"
              title="Backspace"
            >
              <span className="text-xs font-bold font-mono">←</span>
            </button>
          </div>
        </div>

        {/* Keypad Grid (5 Rows x 4 Cols matching exact user design) */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {/* Row 1: AC (Teal), ( ), %, ÷ */}
          <button
            onClick={clearAll}
            className="h-12 rounded-2xl bg-[#3DBBB0] hover:bg-[#349e95] text-white font-bold text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            AC
          </button>
          <button
            onClick={() => {}}
            className="h-12 rounded-2xl bg-[#E2F0ED] hover:bg-[#d4e7e3] text-[#1C2E38] font-bold text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            ( )
          </button>
          <button
            onClick={percentage}
            className="h-12 rounded-2xl bg-[#E2F0ED] hover:bg-[#d4e7e3] text-[#1C2E38] font-bold text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            %
          </button>
          <button
            onClick={() => performOperation('÷')}
            className={`h-12 rounded-2xl text-base font-bold shadow-sm transition-all active:scale-95 cursor-pointer ${
              operator === '÷' ? 'bg-[#3DBBB0] text-white' : 'bg-[#E2F0ED] hover:bg-[#d4e7e3] text-[#1C2E38]'
            }`}
          >
            ÷
          </button>

          {/* Row 2: 7, 8, 9, × */}
          <button
            onClick={() => inputDigit('7')}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            7
          </button>
          <button
            onClick={() => inputDigit('8')}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            8
          </button>
          <button
            onClick={() => inputDigit('9')}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            9
          </button>
          <button
            onClick={() => performOperation('×')}
            className={`h-12 rounded-2xl text-base font-bold shadow-sm transition-all active:scale-95 cursor-pointer ${
              operator === '×' ? 'bg-[#3DBBB0] text-white' : 'bg-[#E2F0ED] hover:bg-[#d4e7e3] text-[#1C2E38]'
            }`}
          >
            ×
          </button>

          {/* Row 3: 4, 5, 6, − */}
          <button
            onClick={() => inputDigit('4')}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            4
          </button>
          <button
            onClick={() => inputDigit('5')}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            5
          </button>
          <button
            onClick={() => inputDigit('6')}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            6
          </button>
          <button
            onClick={() => performOperation('−')}
            className={`h-12 rounded-2xl text-lg font-bold shadow-sm transition-all active:scale-95 cursor-pointer ${
              operator === '−' ? 'bg-[#3DBBB0] text-white' : 'bg-[#E2F0ED] hover:bg-[#d4e7e3] text-[#1C2E38]'
            }`}
          >
            −
          </button>

          {/* Row 4: 1, 2, 3, + */}
          <button
            onClick={() => inputDigit('1')}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            1
          </button>
          <button
            onClick={() => inputDigit('2')}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            2
          </button>
          <button
            onClick={() => inputDigit('3')}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            3
          </button>
          <button
            onClick={() => performOperation('+')}
            className={`h-12 rounded-2xl text-base font-bold shadow-sm transition-all active:scale-95 cursor-pointer ${
              operator === '+' ? 'bg-[#3DBBB0] text-white' : 'bg-[#E2F0ED] hover:bg-[#d4e7e3] text-[#1C2E38]'
            }`}
          >
            +
          </button>

          {/* Row 5: 0 (wide span 2), ., = */}
          <button
            onClick={() => inputDigit('0')}
            className="col-span-2 h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer flex items-center justify-center"
          >
            0
          </button>
          <button
            onClick={inputDot}
            className="h-12 rounded-2xl bg-[#1E2430] hover:bg-[#2c3444] text-white font-bold text-base shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            .
          </button>
          <button
            onClick={() => performOperation('=')}
            className="h-12 rounded-2xl bg-[#E2F0ED] hover:bg-[#d4e7e3] text-[#1C2E38] font-bold text-lg shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            =
          </button>
        </div>

        {/* Home Indicator */}
        <div className="pt-3 flex justify-center">
          <div className="w-32 h-1 bg-[#18181B] rounded-full" />
        </div>
      </div>
    </div>
  );
}
