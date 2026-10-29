import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patheffects as pe

coast = [
    (49.543519,-12.469833),(49.808981,-12.895285),(50.056511,-13.555761),(50.217431,-14.758789),
    (50.476537,-15.226512),(50.377111,-15.706069),(50.200275,-16.000263),(49.860606,-15.414253),
    (49.672607,-15.710204),(49.863344,-16.451037),(49.774564,-16.875042),(49.498612,-17.106036),
    (49.435619,-17.953064),(49.041792,-19.118781),(48.548541,-20.496888),(47.930749,-22.391501),
    (47.547723,-23.781959),(47.095761,-24.94163),(46.282478,-25.178463),(45.409508,-25.601434),
    (44.833574,-25.346101),(44.03972,-24.988345),(43.763768,-24.460677),(43.697778,-23.574116),
    (43.345654,-22.776904),(43.254187,-22.057413),(43.433298,-21.336475),(43.893683,-21.163307),
    (43.89637,-20.830459),(44.374325,-20.072366),(44.464397,-19.435454),(44.232422,-18.961995),
    (44.042976,-18.331387),(43.963084,-17.409945),(44.312469,-16.850496),(44.446517,-16.216219),
    (44.944937,-16.179374),(45.502732,-15.974373),(45.872994,-15.793454),(46.312243,-15.780018),
    (46.882183,-15.210182),(47.70513,-14.594303),(48.005215,-14.091233),(47.869047,-13.663869),
    (48.293828,-13.784068),(48.84506,-13.089175),(48.863509,-12.487868),(49.194651,-12.040557),
    (49.543519,-12.469833)
]
# Source : contour reel simplifie de Madagascar (johan/world.geo.json, domaine public / donnees
# administratives ouvertes), utilise pour obtenir une silhouette fidele de l'ile.
coast_x = [p[0] for p in coast]
coast_y = [p[1] for p in coast]

cities = {
    "Antananarivo": (47.52,-18.88, True, (8,6)),
    "Toamasina": (49.40,-18.15, False, (8,2)),
    "Mahajanga": (46.32,-15.72, False, (8,4)),
    "Antsiranana": (49.29,-12.28, False, (8,4)),
    "Toliara": (43.67,-23.35, False, (-60,-4)),
    "Tolagnaro\n(Fort-Dauphin)": (46.98,-25.03, False, (8,-6)),
    "Fianarantsoa": (47.08,-21.45, False, (8,4)),
    "Antsirabe": (47.03,-19.87, False, (8,4)),
    "Morondava": (44.28,-20.30, False, (-70,2)),
    "Manakara": (48.02,-22.15, False, (8,-10)),
}

waypoints = {
    "Antananarivo": (47.52,-18.88), "Tsiroanomandidy": (46.05,-18.77),
    "Moramanga": (48.22,-18.93), "Toamasina": (49.40,-18.15),
    "Maevatanana": (46.82,-16.95), "Mahajanga": (46.32,-15.72),
    "Ambondromamy": (46.72,-16.45), "Ambanja": (48.45,-13.68),
    "Antsiranana": (49.29,-12.28), "Antsirabe": (47.03,-19.87),
    "Fianarantsoa": (47.08,-21.45), "Ihosy": (46.12,-22.40),
    "Ranohira": (45.38,-22.55), "Toliara": (43.67,-23.35),
    "Manakara": (48.02,-22.15), "Tolagnaro": (46.98,-25.03),
    "Miandrivazo": (45.45,-19.52), "Morondava": (44.28,-20.30),
    "Soanierana-Ivongo": (49.58,-16.92),
}

routes = {
    "RN1":  (["Antananarivo","Tsiroanomandidy"], "#C0392B", (46.75,-18.65)),
    "RN2":  (["Antananarivo","Moramanga","Toamasina"], "#1F4E79", (48.55,-18.55)),
    "RN4":  (["Antananarivo","Maevatanana","Mahajanga"], "#1E7B34", (46.55,-17.7)),
    "RN6":  (["Mahajanga","Ambondromamy","Ambanja","Antsiranana"], "#8E44AD", (48.55,-13.9)),
    "RN7":  (["Antananarivo","Antsirabe","Fianarantsoa","Ihosy","Ranohira","Toliara"], "#D4820A", (45.55,-22.0)),
    "RN12": (["Fianarantsoa","Manakara"], "#117864", (47.65,-21.9)),
    "RN13": (["Ihosy","Tolagnaro"], "#B7950B", (46.25,-23.8)),
    "RN34": (["Antsirabe","Miandrivazo","Morondava"], "#A93226", (45.65,-19.3)),
    "RN5":  (["Toamasina","Soanierana-Ivongo"], "#2471A3", (49.75,-17.5)),
}

fig = plt.figure(figsize=(13,11), dpi=200)
gs = fig.add_gridspec(1,2, width_ratios=[1.05,1.55], wspace=0.02)
axL = fig.add_subplot(gs[0,0]); axL.axis("off")
axR = fig.add_subplot(gs[0,1])

# ---- Right panel: the map ----
axR.fill(coast_x, coast_y, color="#EAF4E3", edgecolor="#4A7C3C", linewidth=2, zorder=1)

for rn,(pts,color,lbl) in routes.items():
    xs=[waypoints[p][0] for p in pts]; ys=[waypoints[p][1] for p in pts]
    axR.plot(xs, ys, color=color, linewidth=2.8, zorder=2, solid_capstyle="round")
    axR.text(lbl[0], lbl[1], rn, color=color, fontsize=10.5, fontweight="bold", zorder=5,
              path_effects=[pe.withStroke(linewidth=3, foreground="white")])

for name,(x,y,is_cap,off) in cities.items():
    if is_cap:
        axR.scatter([x],[y], marker="*", s=360, color="#C0392B", edgecolor="black", linewidth=0.9, zorder=6)
    else:
        axR.scatter([x],[y], marker="o", s=75, color="#2C3E50", edgecolor="white", linewidth=0.9, zorder=6)
    axR.annotate(name, (x,y), textcoords="offset points", xytext=off, fontsize=11,
                  fontweight="bold" if is_cap else "normal", color="#1A1A1A", zorder=7,
                  path_effects=[pe.withStroke(linewidth=3, foreground="white")])

cx, cy = 50.5, -24.3
axR.annotate("", xy=(cx,cy+1.0), xytext=(cx,cy-0.2), arrowprops=dict(arrowstyle="-|>", color="black", linewidth=2.2))
axR.text(cx, cy+1.2, "N", fontsize=14, fontweight="bold", ha="center")

axR.set_xlim(42.0, 51.3); axR.set_ylim(-26.2, -11.0)
axR.set_aspect(1.058); axR.axis("off")  # correction 1/cos(latitude moyenne ~19°) pour des proportions fideles
axR.set_title("Madagascar : routes nationales (RN)", fontsize=14, fontweight="bold", pad=10)

# ---- Left panel: legend ----
axL.set_xlim(0,10); axL.set_ylim(0,10)
axL.text(0.2, 9.55, "Légende", fontsize=16, fontweight="bold")
axL.text(0.2, 9.0, "Routes Nationales (RN) de Madagascar", fontsize=10.5, style="italic", color="#444444")

legend_lines = [
    ("RN1", "Antananarivo – Tsiroanomandidy"),
    ("RN2", "Antananarivo – Toamasina (via Moramanga)"),
    ("RN4", "Antananarivo – Mahajanga (via Maevatanana)"),
    ("RN5", "Toamasina – Soanierana-Ivongo"),
    ("RN6", "Mahajanga – Antsiranana (via Ambanja)"),
    ("RN7", "Antananarivo – Toliara (via Antsirabe,\nFianarantsoa, Ihosy)"),
    ("RN12", "Fianarantsoa – Manakara"),
    ("RN13", "Ihosy – Tolagnaro (Fort-Dauphin)"),
    ("RN34", "Antsirabe – Morondava (via Miandrivazo)"),
]
y = 8.3
for rn,desc in legend_lines:
    color = routes[rn][1]
    axL.plot([0.2,1.1],[y,y], color=color, linewidth=4, solid_capstyle="round")
    nlines = desc.count("\n")+1
    axL.text(1.3, y+0.03, f"{rn} : {desc}", fontsize=10, va="center", color="#1A1A1A")
    y -= 0.62 + 0.42*(nlines-1)

y -= 0.25
axL.scatter([0.45],[y], marker="*", s=240, color="#C0392B", edgecolor="black", linewidth=0.8)
axL.text(1.3, y, "Capitale (Antananarivo)", fontsize=10, va="center")
y -= 0.55
axL.scatter([0.45],[y], marker="o", s=70, color="#2C3E50", edgecolor="white", linewidth=0.8)
axL.text(1.3, y, "Chef-lieu / grande ville", fontsize=10, va="center")

y -= 0.9
axL.plot([0.2,9.6],[y,y], color="#CCCCCC", linewidth=1)
y -= 0.5
axL.text(0.2, y, "Carte pédagogique schématique,\nréalisée pour J-Learn à partir de\ndonnées géographiques publiques.\nNon à l'échelle — à but illustratif.",
          fontsize=9, color="#555555", va="top")

fig.suptitle("Carte simplifiée des routes nationales (RN) de Madagascar", fontsize=15.5, fontweight="bold", y=0.985)
plt.savefig("/home/user/jlearn-pack/scripts/geo_t6_map/carte_rn_madagascar.png", facecolor="white", bbox_inches="tight")
print("saved")
