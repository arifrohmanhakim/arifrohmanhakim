import React, { useState } from 'react';
import { Plus, Trash2, Code2 } from 'lucide-react';

export const InteractiveQueryBuilderWidget = ({ onPlaySound }) => {
  const [rules, setRules] = useState([
    { id: 1, field: 'status', operator: 'equals', value: 'active' },
    { id: 2, field: 'stars', operator: 'greater_than', value: '10' }
  ]);

  const addRule = () => {
    onPlaySound?.(720, 'sine', 0.05);
    setRules((prev) => [
      ...prev,
      { id: Date.now(), field: 'language', operator: 'equals', value: 'TypeScript' }
    ]);
  };

  const removeRule = (id) => {
    onPlaySound?.(380, 'triangle', 0.04);
    setRules((prev) => prev.filter((r) => r.id !== id));
  };

  const updateRule = (id, key, val) => {
    onPlaySound?.(600, 'sine', 0.03);
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [key]: val } : r))
    );
  };

  return (
    <div className="query-builder-widget">
      <div className="widget-header">
        <div className="widget-title-row">
          <Code2 size={16} className="text-accent" />
          <span>Interactive Query Builder (Live Preview)</span>
        </div>
        <button
          type="button"
          onClick={addRule}
          className="widget-mini-btn"
          title="Tambah aturan baru"
        >
          <Plus size={14} />
          <span>Tambah Rule</span>
        </button>
      </div>

      <div className="rules-list">
        {rules.map((rule) => (
          <div key={rule.id} className="rule-row">
            <select
              value={rule.field}
              onChange={(e) => updateRule(rule.id, 'field', e.target.value)}
              className="widget-select"
            >
              <option value="status">status</option>
              <option value="stars">stars</option>
              <option value="language">language</option>
              <option value="framework">framework</option>
            </select>

            <select
              value={rule.operator}
              onChange={(e) => updateRule(rule.id, 'operator', e.target.value)}
              className="widget-select"
            >
              <option value="equals">==</option>
              <option value="not_equals">!=</option>
              <option value="greater_than">&gt;</option>
              <option value="contains">contains</option>
            </select>

            <input
              type="text"
              value={rule.value}
              onChange={(e) => updateRule(rule.id, 'value', e.target.value)}
              className="widget-input"
              placeholder="Nilai filter"
            />

            {rules.length > 1 && (
              <button
                type="button"
                onClick={() => removeRule(rule.id)}
                className="widget-icon-btn danger"
                title="Hapus rule"
              >
                <Trash2 size={13} />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="query-output-box">
        <span className="output-label">GENERATED JSON QUERY:</span>
        <pre className="output-json">
          {JSON.stringify({ condition: 'AND', rules: rules.map(({ field, operator, value }) => ({ field, operator, value })) }, null, 2)}
        </pre>
      </div>
    </div>
  );
};
