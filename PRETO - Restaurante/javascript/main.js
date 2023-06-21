window.addEventListener("load", function () {
  // page loader
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 3000);
  // animation on scroll
  AOS.init({
    once: true,
  });
});

// ativar navbar

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}
// fechar quando clicar
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
});
// sticky header
window.addEventListener("scroll", function () {
  if (this.pageYOffset > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

// menu tabs

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const menuSection = document.querySelector(".menu-section");
    menuSection
      .querySelector(".menu-tab-content.active")
      .classList.remove("active");
    menuSection.querySelector(target).classList.add("active");
  }
});


// calendario reserva

flatpickr("#date", {
  enableTime: true,
  locale: {
      weekdays: {
          shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
          longhand: [
              "Domingo",
              "Segunda-feira",
              "Terça-feira",
              "Quarta-feira",
              "Quinta-feira",
              "Sexta-feira",
              "Sábado"
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez"
          ],
          longhand: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro"
          ]
      },
      firstDayOfWeek: 1, //
  }
});
