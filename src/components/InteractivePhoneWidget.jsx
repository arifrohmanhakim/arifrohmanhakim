import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Eye, EyeOff, ShieldCheck } from 'lucide-react';

export const InteractivePhoneWidget = ({ onPlaySound }) => {
  const [showBalance, setShowBalance] = useState(true);
  const [balance, setBalance] = useState(14850000);

  const toggleBalance = () => {
    onPlaySound?.(500, 'sine', 0.04);
    setShowBalance((prev) => !prev);
  };

  const handleQuickAction = (amount, label) => {
    onPlaySound?.(660, 'triangle', 0.06);
    setBalance((prev) => prev + amount);
  };

  return (
    <div className="phone-mockup-frame">
      <div className="phone-notch"></div>
      <div className="phone-screen-content">
        <div className="phone-header">
          <div className="phone-user-info">
            <span className="phone-badge">Doit Wallet</span>
            <div className="phone-greeting">Dompet Utama</div>
          </div>
          <button
            type="button"
            onClick={toggleBalance}
            className="phone-toggle-btn"
            title="Sembunyikan / Tampilkan Saldo"
          >
            {showBalance ? <Eye size={14} /> : <EyeOff size={14} />}
          </button>
        </div>

        <div className="phone-balance-card">
          <span className="balance-label">Total Saldo Aktif</span>
          <div className="balance-value">
            {showBalance ? `Rp ${balance.toLocaleString('id-ID')}` : '••••••••••••'}
          </div>
          <div className="balance-footer">
            <ShieldCheck size={12} className="text-emerald" />
            <span>Terenkripsi End-to-End</span>
          </div>
        </div>

        <div className="phone-actions-row">
          <button
            type="button"
            className="phone-action-btn"
            onClick={() => handleQuickAction(250000, 'Top Up')}
          >
            <ArrowDownLeft size={14} />
            <span>Top Up</span>
          </button>
          <button
            type="button"
            className="phone-action-btn"
            onClick={() => handleQuickAction(-100000, 'Kirim')}
          >
            <ArrowUpRight size={14} />
            <span>Kirim</span>
          </button>
        </div>

        <div className="phone-transactions-list">
          <span className="section-micro-title">Riwayat Terakhir</span>
          <div className="transaction-item">
            <span className="tx-name">Pembayaran API Central</span>
            <span className="tx-amount negative">-Rp 45.000</span>
          </div>
          <div className="transaction-item">
            <span className="tx-name">Vercel Pro Payout</span>
            <span className="tx-amount positive">+Rp 320.000</span>
          </div>
        </div>
      </div>
    </div>
  );
};
