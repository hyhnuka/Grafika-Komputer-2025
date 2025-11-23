var vertices = [
    // HURUF H (24 vertices)
    // Prisma Kiri H
    -0.8, 0.8, 0.1,  -0.4, 0.8, 0.1,  -0.4, -0.8, 0.1,  -0.8, -0.8, 0.1, //0-3
    -0.8, 0.8, -0.1, -0.4, 0.8, -0.1, -0.4, -0.8, -0.1, -0.8, -0.8, -0.1, //4-7
    // Prisma Kanan H
    0.4, 0.8, 0.1,   0.8, 0.8, 0.1,   0.8, -0.8, 0.1,   0.4, -0.8, 0.1, //8-11
    0.4, 0.8, -0.1,  0.8, 0.8, -0.1,  0.8, -0.8, -0.1,  0.4, -0.8, -0.1, //12-15
    // Prisma Tengah H
    -0.4, 0.2, 0.1,   0.4, 0.2, 0.1,   0.4, -0.2, 0.1,   -0.4, -0.2, 0.1, //16-19
    -0.4, 0.2, -0.1,  0.4, 0.2, -0.1,  0.4, -0.2, -0.1,  -0.4, -0.2, -0.1, //20-23

    // HURUF A (24 vertices)
    // Kaki Kiri A
    -0.8, -0.8, 0.1,  -0.4, -0.8, 0.1,  0.0, 0.8, 0.1,   -0.6, 0.6, 0.1, //24-27
    -0.8, -0.8, -0.1, -0.4, -0.8, -0.1, 0.0, 0.8, -0.1,  -0.6, 0.6, -0.1, //28-31
    // Kaki Kanan A
    0.4, -0.8, 0.1,   0.8, -0.8, 0.1,   0.6, 0.6, 0.1,    0.0, 0.8, 0.1, //32-35
    0.4, -0.8, -0.1,  0.8, -0.8, -0.1,  0.6, 0.6, -0.1,   0.0, 0.8, -0.1, //36-39
    // Palang Tengah A
    -0.226, 0.0, 0.1,   0.226, 0.0, 0.1,   0.280, -0.196, 0.1,  -0.280, -0.2, 0.1,
    -0.226, 0.0, -0.1,  0.226, 0.0, -0.1,  0.280, -0.196, -0.1,  -0.280, -0.2, -0.1,

    
    // ANGKA 8 (56 vertices)
    // 1. Top Bar horizontal
    -0.4, 0.8, 0.1,   0.4, 0.8, 0.1,   0.4, 0.6, 0.1,   -0.4, 0.6, 0.1,
    -0.4, 0.8, -0.1,  0.4, 0.8, -0.1,  0.4, 0.6, -0.1,  -0.4, 0.6, -0.1,
    // 2. Middle Bar horizontal 
    -0.4, 0.1, 0.1,   0.4, 0.1, 0.1,   0.4,-0.1, 0.1,   -0.4,-0.1, 0.1,
    -0.4, 0.1, -0.1,  0.4, 0.1, -0.1,  0.4,-0.1, -0.1,  -0.4,-0.1, -0.1,
    // 3. Bottom Bar horizontal
    -0.4,-0.6, 0.1,   0.4,-0.6, 0.1,   0.4,-0.8, 0.1,   -0.4,-0.8, 0.1,
    -0.4,-0.6, -0.1,  0.4,-0.6, -0.1,  0.4,-0.8, -0.1,  -0.4,-0.8, -0.1,

    // 4. Top-Left Vertical
    -0.4, 0.6, 0.1,  -0.2, 0.6, 0.1,  -0.2, 0.1, 0.1,   -0.4, 0.1, 0.1,
    -0.4, 0.6, -0.1, -0.2, 0.6, -0.1, -0.2, 0.1, -0.1,  -0.4, 0.1, -0.1,
    // 5. Top-Right Vertical
    0.2, 0.6, 0.1,   0.4, 0.6, 0.1,   0.4, 0.1, 0.1,    0.2, 0.1, 0.1,
    0.2, 0.6, -0.1,  0.4, 0.6, -0.1,  0.4, 0.1, -0.1,   0.2, 0.1, -0.1,
    // 6. Bottom-Left Vertical
    -0.4,-0.1, 0.1,  -0.2,-0.1, 0.1,  -0.2,-0.6, 0.1,   -0.4,-0.6, 0.1,
    -0.4,-0.1, -0.1, -0.2,-0.1, -0.1, -0.2,-0.6, -0.1,  -0.4,-0.6, -0.1,
    // 7. Bottom-Right Vertical
    0.2,-0.1, 0.1,   0.4,-0.1, 0.1,   0.4,-0.6, 0.1,    0.2,-0.6, 0.1,
    0.2,-0.1, -0.1,  0.4,-0.1, -0.1,  0.4,-0.6, -0.1,   0.2,-0.6, -0.1
      
];

var colors = [
    // // WARNA H
    // // Prisma Kiri H (Biru)
    // 0.5, 0.5, 1.0,  0.5, 0.5, 1.0,  0.5, 0.5, 1.0,  0.5, 0.5, 1.0,
    // 0.4, 0.4, 0.9,  0.4, 0.4, 0.9,  0.4, 0.4, 0.9,  0.4, 0.4, 0.9,
    // // Prisma Kanan H (Hijau)
    // 0.5, 1.0, 0.5,  0.5, 1.0, 0.5,  0.5, 1.0, 0.5,  0.5, 1.0, 0.5,
    // 0.4, 0.9, 0.4,  0.4, 0.9, 0.4,  0.4, 0.9, 0.4,  0.4, 0.9, 0.4,
    // // Prisma Tengah H (Merah)
    // 1.0, 0.5, 0.5,  1.0, 0.5, 0.5,  1.0, 0.5, 0.5,  1.0, 0.5, 0.5,
    // 0.9, 0.4, 0.4,  0.9, 0.4, 0.4,  0.9, 0.4, 0.4,  0.9, 0.4, 0.4,

    // // WARNA A
    // // Kaki Kiri A (Kuning)
    // 1.0, 0.8, 0.2,  1.0, 0.8, 0.2,  1.0, 0.8, 0.2,  1.0, 0.8, 0.2,
    // 0.9, 0.7, 0.1,  0.9, 0.7, 0.1,  0.9, 0.7, 0.1,  0.9, 0.7, 0.1,
    // // Kaki Kanan A (Oranye)
    // 1.0, 0.6, 0.2,  1.0, 0.6, 0.2,  1.0, 0.6, 0.2,  1.0, 0.6, 0.2,
    // 0.9, 0.5, 0.1,  0.9, 0.5, 0.1,  0.9, 0.5, 0.1,  0.9, 0.5, 0.1,
    // // Palang Tengah A (Kuning Muda)
    // 1.0, 1.0, 0.5,  1.0, 1.0, 0.5,  1.0, 1.0, 0.5,  1.0, 1.0, 0.5,
    // 0.9, 0.9, 0.4,  0.9, 0.9, 0.4,  0.9, 0.9, 0.4,  0.9, 0.9, 0.4,


    
    // // WARNA 8 (Ungu)
    // // 1. Top Bar
    // 0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,
    // 0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,
    // // 2. Middle Bar
    // 0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,
    // 0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,
    // // 3. Bottom Bar
    // 0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,
    // 0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,
    // // 4. Top-Left Vertical
    // 0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,
    // 0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,
    // // 5. Top-Right Vertical
    // 0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,
    // 0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,
    // // 6. Bottom-Left Vertical
    // 0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,
    // 0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,
    // // 7. Bottom-Right Vertical
    // 0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,  0.8, 0.6, 1.0,
    // 0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9,  0.7, 0.5, 0.9

    // ==========================
    // HURUF H (Ocean Gradient)
    // ==========================
    
    // Prisma Kiri H (Sisi Depan - Gradasi Cyan ke Biru Laut)
    0.0, 0.8, 1.0,   0.0, 0.8, 1.0,   // Top: Cyan Terang
    0.0, 0.2, 0.6,   0.0, 0.2, 0.6,   // Bottom: Biru Gelap
    
    // Prisma Kiri H (Sisi Belakang - Shadow - Biru Gelap Pekat)
    0.0, 0.3, 0.5,   0.0, 0.3, 0.5,   
    0.0, 0.1, 0.3,   0.0, 0.1, 0.3,

    // Prisma Kanan H (Sisi Depan - Gradasi Teal ke Navy)
    0.2, 0.9, 0.8,   0.2, 0.9, 0.8,   // Top: Teal Terang
    0.0, 0.3, 0.4,   0.0, 0.3, 0.4,   // Bottom: Navy
    
    // Prisma Kanan H (Sisi Belakang - Shadow)
    0.1, 0.4, 0.4,   0.1, 0.4, 0.4,
    0.0, 0.1, 0.2,   0.0, 0.1, 0.2,

    // Prisma Tengah H (Penghubung - Gradasi Horizontal Biru)
    0.0, 0.6, 0.9,   0.0, 0.4, 0.8,   // Left: Lebih Terang
    0.0, 0.6, 0.9,   0.0, 0.4, 0.8,   // Right: Sedikit Gelap
    
    // Prisma Tengah H (Sisi Belakang)
    0.0, 0.3, 0.5,   0.0, 0.2, 0.4,
    0.0, 0.3, 0.5,   0.0, 0.2, 0.4,


    // ==========================
    // HURUF A (Sunset Gradient)
    // ==========================

    // Kaki Kiri A (Sisi Depan - Gradasi Kuning ke Orange)
    1.0, 0.9, 0.3,   1.0, 0.9, 0.3,   // Top: Kuning Matahari
    1.0, 0.4, 0.1,   1.0, 0.4, 0.1,   // Bottom: Orange Senja

    // Kaki Kiri A (Sisi Belakang - Shadow - Coklat Orange)
    0.7, 0.5, 0.2,   0.7, 0.5, 0.2,
    0.6, 0.2, 0.0,   0.6, 0.2, 0.0,

    // Kaki Kanan A (Sisi Depan - Gradasi Gold ke Merah Bata)
    1.0, 0.8, 0.2,   1.0, 0.8, 0.2,   // Top: Gold
    0.9, 0.2, 0.1,   0.9, 0.2, 0.1,   // Bottom: Merah Bata

    // Kaki Kanan A (Sisi Belakang - Shadow)
    0.7, 0.4, 0.1,   0.7, 0.4, 0.1,
    0.5, 0.1, 0.0,   0.5, 0.1, 0.0,

    // Palang Tengah A (Sisi Depan - Gradasi Putih Gading ke Kuning)
    1.0, 1.0, 0.8,   1.0, 1.0, 0.8,   // Top
    1.0, 0.8, 0.4,   1.0, 0.8, 0.4,   // Bottom
    
    // Palang Tengah A (Sisi Belakang)
    0.7, 0.7, 0.5,   0.7, 0.7, 0.5,
    0.6, 0.5, 0.2,   0.6, 0.5, 0.2,


    // ==========================
    // ANGKA 8 (Neon/Cyberpunk)
    // ==========================
    // Note: Bagian atas 8 diberi warna terang (Lavender), 
    // bagian bawah 8 diberi warna gelap (Deep Purple)

    // 1. Top Bar (Lavender Terang)
    0.9, 0.7, 1.0,   0.9, 0.7, 1.0,
    0.8, 0.5, 1.0,   0.8, 0.5, 1.0,
    // Shadow
    0.5, 0.3, 0.6,   0.5, 0.3, 0.6,
    0.4, 0.2, 0.5,   0.4, 0.2, 0.5,

    // 2. Middle Bar (Magenta)
    0.8, 0.2, 0.8,   0.8, 0.2, 0.8,
    0.6, 0.0, 0.6,   0.6, 0.0, 0.6,
    // Shadow
    0.4, 0.1, 0.4,   0.4, 0.1, 0.4,
    0.3, 0.0, 0.3,   0.3, 0.0, 0.3,

    // 3. Bottom Bar (Deep Violet)
    0.5, 0.0, 0.8,   0.5, 0.0, 0.8,
    0.3, 0.0, 0.5,   0.3, 0.0, 0.5,
    // Shadow
    0.2, 0.0, 0.4,   0.2, 0.0, 0.4,
    0.1, 0.0, 0.2,   0.1, 0.0, 0.2,

    // 4. Top-Left Vertical (Gradasi Lavender ke Magenta)
    0.8, 0.5, 1.0,   0.8, 0.5, 1.0,
    0.7, 0.2, 0.9,   0.7, 0.2, 0.9,
    // Shadow
    0.4, 0.2, 0.5,   0.4, 0.2, 0.5,
    0.3, 0.1, 0.4,   0.3, 0.1, 0.4,

    // 5. Top-Right Vertical (Gradasi Lavender ke Magenta)
    0.8, 0.5, 1.0,   0.8, 0.5, 1.0,
    0.7, 0.2, 0.9,   0.7, 0.2, 0.9,
    // Shadow
    0.4, 0.2, 0.5,   0.4, 0.2, 0.5,
    0.3, 0.1, 0.4,   0.3, 0.1, 0.4,

    // 6. Bottom-Left Vertical (Gradasi Magenta ke Ungu Tua)
    0.7, 0.2, 0.8,   0.7, 0.2, 0.8,
    0.5, 0.0, 0.6,   0.5, 0.0, 0.6,
    // Shadow
    0.3, 0.1, 0.4,   0.3, 0.1, 0.4,
    0.2, 0.0, 0.3,   0.2, 0.0, 0.3,

    // 7. Bottom-Right Vertical (Gradasi Magenta ke Ungu Tua)
    0.7, 0.2, 0.8,   0.7, 0.2, 0.8,
    0.5, 0.0, 0.6,   0.5, 0.0, 0.6,
    // Shadow
    0.3, 0.1, 0.4,   0.3, 0.1, 0.4,
    0.2, 0.0, 0.3,   0.2, 0.0, 0.3

];

var indices = [];

// Generate indices untuk setiap prisma (1 prisma = 8 vertices, 12 segitiga, 36 indices)
function generatePrismIndices(offset) {
    return [
        offset+0, offset+1, offset+2, offset+0, offset+2, offset+3, // depan
        offset+4, offset+5, offset+6, offset+4, offset+6, offset+7, // belakang
        offset+0, offset+4, offset+7, offset+0, offset+7, offset+3, // kiri
        offset+1, offset+5, offset+6, offset+1, offset+6, offset+2, // kanan
        offset+0, offset+1, offset+5, offset+0, offset+5, offset+4, // atas
        offset+3, offset+2, offset+6, offset+3, offset+6, offset+7, // bawah
    ];
}

// H (3 prisma * 36 = 108 indices)
indices.push(...generatePrismIndices(0));  // Prisma Kiri
indices.push(...generatePrismIndices(8));  // Prisma Kanan
indices.push(...generatePrismIndices(16)); // Prisma Tengah

// A (3 prisma * 36 = 108 indices)
indices.push(...generatePrismIndices(24)); // Kaki Kiri
indices.push(...generatePrismIndices(32)); // Kaki Kanan
indices.push(...generatePrismIndices(40)); // Palang Tengah

// 8 (7 prisma * 36 = 252 indices)
for (let i = 0; i < 7; i++) {
    const vertexOffset = 48 + (i * 8); 
    indices.push(...generatePrismIndices(vertexOffset));
}

