// jlearn-protection.js — Protection commune des manuels J-Learn
// Page d'authenticité, filigrane répété et pied de page officiel.
const path = require("path");
const {
  Header,
  Footer,
  Paragraph,
  TextRun,
  ExternalHyperlink,
  AlignmentType,
  BorderStyle,
  PageNumber,
} = require("docx");
const { TextWatermark } = require("docx/watermarks");

const FACEBOOK_URL = "https://web.facebook.com/profile.php?id=61575599505051";
const QR_PATH = path.join(__dirname, "jlearn_facebook_officiel_qr.png");
const FONT = "Times New Roman";

function authenticityPage(B, manuel) {
  const out = [
    B.p("AUTHENTICITÉ ET DROITS", {
      size: 34,
      bold: true,
      align: AlignmentType.CENTER,
      color: "1F4E79",
      after: 180,
    }),
    B.p("ATTENTION AUX REVENTES NON AUTORISÉES", {
      size: 27,
      bold: true,
      align: AlignmentType.CENTER,
      color: "C00000",
      after: 180,
    }),
    B.p(`Ce manuel « ${manuel} » est une publication officielle J-Learn. Il est vendu exclusivement par la page Facebook officielle J-Learn indiquée ci-dessous.`, {
      size: 24,
      align: AlignmentType.CENTER,
      after: 120,
    }),
    B.p("Tout fichier proposé par un autre compte, une autre page ou un revendeur est une copie non autorisée. Avant tout achat, vérifiez le lien officiel ou scannez le QR code.", {
      size: 24,
      align: AlignmentType.CENTER,
      after: 120,
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [
        new ExternalHyperlink({
          link: FACEBOOK_URL,
          children: [new TextRun({
            text: FACEBOOK_URL,
            style: "Hyperlink",
            bold: true,
            size: 22,
            font: FONT,
          })],
        }),
      ],
    }),
  ];

  out.push(...B.imageBlock(QR_PATH, 150));
  out.push(B.p("Scannez ce QR code pour accéder à l'unique page de vente officielle J-Learn.", {
    size: 22,
    bold: true,
    align: AlignmentType.CENTER,
    color: "1F4E79",
    after: 140,
  }));
  out.push(B.p("© 2026 J-Learn — Tous droits réservés. Toute revente, reproduction, modification ou diffusion intégrale ou partielle sans autorisation écrite de J-Learn est interdite.", {
    size: 21,
    italics: true,
    align: AlignmentType.CENTER,
    color: "555555",
    after: 100,
  }));
  out.push(B.pageBreak());
  return out;
}

function protectedHeader() {
  return new Header({
    children: [
      new Paragraph({
        children: [
          new TextWatermark({
            text: "COPIE OFFICIELLE J-LEARN",
            font: "Arial",
            bold: true,
            color: "90A4AE",
            opacity: 0.12,
            rotation: 315,
            width: 500,
            height: 70,
          }),
        ],
      }),
    ],
  });
}

function protectedFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 0 },
        border: {
          top: { style: BorderStyle.SINGLE, size: 4, color: "1F4E79", space: 2 },
        },
        children: [
          new TextRun({
            text: "© 2026 J-Learn — Copie officielle. Revente, reproduction et diffusion non autorisées interdites.",
            size: 16,
            bold: true,
            color: "444444",
            font: FONT,
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 0 },
        children: [
          new TextRun({ text: "Vente autorisée exclusivement via ", size: 15, color: "555555", font: FONT }),
          new ExternalHyperlink({
            link: FACEBOOK_URL,
            children: [new TextRun({
              text: "la page Facebook officielle J-Learn",
              style: "Hyperlink",
              size: 15,
              bold: true,
              font: FONT,
            })],
          }),
          new TextRun({ text: " — Page ", size: 15, color: "555555", font: FONT }),
          new TextRun({ children: [PageNumber.CURRENT], size: 15, color: "555555", font: FONT }),
        ],
      }),
    ],
  });
}

function emptyHeader() {
  return new Header({ children: [new Paragraph({ children: [] })] });
}

function emptyFooter() {
  return new Footer({ children: [new Paragraph({ children: [] })] });
}

function headers() {
  return { default: protectedHeader(), first: emptyHeader() };
}

function footers() {
  return { default: protectedFooter(), first: emptyFooter() };
}

module.exports = {
  FACEBOOK_URL,
  authenticityPage,
  headers,
  footers,
};
