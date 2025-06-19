"use client";

import React from "react";
import { FiX, FiMail } from "react-icons/fi";

interface IThanksProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Thanks({ isOpen, onClose }: IThanksProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-xl transition-all duration-500"
        onClick={onClose}
      />

      <div className="relative bg-bg1 rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden transform transition-all duration-500 animate-in fade-in-0 zoom-in-95">
        <div className="relative bg-bg3 px-8 pt-8 pb-6">
          <button
            onClick={onClose}
            className="absolute z-20 top-4 right-4 p-2 rounded-full hover:bg-gray-600/50 transition-all duration-300 group cursor-pointer"
            aria-label="Fechar modal"
          >
            <FiX className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>

          <h2 className="text-2xl font-light text-center text-white mb-2 tracking-wide">
            Mensagem Recebida
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-cyan-400 mx-auto"></div>
        </div>

        <div className="px-8 py-6 space-y-6">
          <div className="text-center space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Obrigado pelo seu interesse em meu perfil profissional.
            </p>

            <div className="flex items-center justify-center gap-3 py-4">
              <div className="flex items-center gap-2 text-primary">
                <FiMail className="w-5 h-5" />
                <span className="font-medium tracking-wide">
                  Email recebido com sucesso
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Entrarei em contato o mais breve possível para conversarmos sobre
              as oportunidades disponíveis. Aguardo ansiosamente nossa conversa!
            </p>
          </div>
        </div>

        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full bg-primary text-gray-900 font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800 uppercase tracking-wider text-sm cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
