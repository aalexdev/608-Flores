/* ==========================================================
   608 FLORES — script.js
   Vitrine digital: ao clicar em "Consultar disponibilidade"
   de um produto, o site abre o WhatsApp com o nome do arranjo
   pré-preenchido na mensagem. Não há carrinho, checkout ou
   qualquer fluxo de pagamento — apenas encaminhamento para
   atendimento humano.
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const WHATSAPP_BASE_URL = "https://wa.me/6133570377"; // número informado no briefing

  // Seleciona todos os botões "Consultar disponibilidade" dos cards de produto
  const whatsappButtons = document.querySelectorAll(".btn-whatsapp");

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Nome do produto vem do atributo data-product de cada botão
      const productName = button.dataset.product || "este arranjo";

      // Monta a mensagem pré-preenchida
      const message = `Olá! Gostaria de garantir a minha: ${productName}`;

      // Codifica a mensagem para uso seguro em uma URL
      const encodedMessage = encodeURIComponent(message);

      // Monta a URL final do WhatsApp
      const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodedMessage}`;

      // Abre em uma nova aba
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Pequeno feedback visual no próprio botão
      const originalText = button.textContent;
      button.textContent = "Redirecionando…";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1500);
    });
  });

  // ------------------------------------------------------
  // Menu mobile: alterna a navegação em telas pequenas
  // ------------------------------------------------------
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("nav-open");
      menuToggle.classList.toggle("is-active");
    });
  }
});