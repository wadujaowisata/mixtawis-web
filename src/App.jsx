import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  QrCode, 
  MapPin, 
  Calendar, 
  Camera, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook,
  Award,
  ArrowUpRight,
  Youtube, 
  Play,
  Clock,
  ExternalLink,
  Heart
} from 'lucide-react';

// Custom TikTok Icon
const TikTokIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/wadujaowisata/", icon: <Instagram size={20} /> },
    { name: "TikTok", href: "https://www.tiktok.com/@wadujaowisata", icon: <TikTokIcon size={20} /> },
    { name: "YouTube", href: "https://www.youtube.com/@WaduJaoWisata", icon: <Youtube size={20} /> },
    { name: "Facebook", href: "https://www.facebook.com/wadujaowisata", icon: <Facebook size={20} /> },
  ];

  const eventCalendar = [
    { month: "Januari", event: "Bersih Pantai & Doa Awal Tahun", desc: "Gotong royong dan doa adat bersama pemerintah desa." },
    { month: "Februari", event: "Workshop Branding Wisata", desc: "Pelatihan konten kreatif dan promosi digital untuk pemuda." },
    { month: "Maret", event: "Festival Kuliner Pesisir", desc: "Pameran masakan laut khas PKK dan demo masak produk lokal." },
    { month: "April", event: "Ekspedisi Jelajah Pantai", desc: "Hiking pantai dan tracking edukasi terumbu karang." },
    { month: "Mei", event: "Lomba Foto & Video Wisata", desc: "Kompetisi konten kreatif untuk mengekspos keindahan destinasi." },
    { month: "Juni", event: "Konservasi Penanaman Pohon", desc: "Aksi lingkungan berkelanjutan bersama sekolah dan komunitas." },
    { month: "Juli", event: "Pekan Permainan Rakyat", desc: "Lomba tarik tambang, sepak bola pasir, dan festival layang-layang." },
    { month: "Agustus", event: "Pentas Budaya Merdeka", desc: "Pertunjukan tarian tradisional dan musik lokal Sanggar Seni." },
    { month: "September", event: "Pasar Seni & Kerajinan", desc: "Pameran kerajinan kulit kerang dan tenun UMKM binaan." },
    { month: "Oktober", event: "Camping Wisata Pantai", desc: "Kemah komunitas dengan api unggun budaya di pinggir pantai." },
    { month: "November", event: "Festival Musik 'Senja Wadu Jao'", desc: "Konser musik akustik romantis saat matahari terbenam." },
    { month: "Desember", event: "Wadu Jao Beach Celebration", desc: "Refleksi akhir tahun dan malam kebudayaan desa." },
  ];

  const stats = [
    { label: "Pengunjung Festival", value: "126+", icon: <Users className="text-blue-600" /> },
    { label: "Kenaikan Omzet PKK", value: "25-40%", icon: <TrendingUp className="text-green-600" /> },
    { label: "Scan QR Code", value: "87", icon: <QrCode className="text-purple-600" /> },
    { label: "Medsos Aktif", value: "4", icon: <Camera className="text-pink-600" /> },
  ];

  const programs = [
    {
      title: "Digital Branding",
      desc: "Pelatihan pembuatan konten promosi menggunakan Canva dan CapCut untuk Instagram, TikTok, dan Facebook.",
      icon: <Camera size={32} />
    },
    {
      title: "Sistem QR Code",
      desc: "Integrasi peta digital kawasan, kalender event tahunan, dan katalog digital produk lokal.",
      icon: <QrCode size={32} />
    },
    {
      title: "Inovasi Produk",
      desc: "Pengembangan produk khas seperti Jus Jagung dan Bawang Goreng dengan kemasan profesional.",
      icon: <Award size={32} />
    }
  ];

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Program", href: "#program" },
    { name: "Dampak", href: "#impact" },
    { name: "Lokasi", href: "#location" },
  ];

  const gmapsLink = "https://maps.app.goo.gl/1xQYVcUvmicYpZYSA";
  // Updated with the number provided in the error message
  const waLink = "https://wa.me/6282143813013";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">WJ</div>
            <span className={`text-xl font-bold tracking-tight ${scrolled || isMenuOpen ? 'text-blue-900' : 'text-white'}`}>WADU JAO</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`hover:text-blue-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-300/30 hidden lg:block" />
            <div className="hidden lg:flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`transition-transform hover:scale-110 ${scrolled ? 'text-slate-400 hover:text-blue-600' : 'text-white/70 hover:text-white'}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled || isMenuOpen ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute w-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen border-b border-slate-100 shadow-xl' : 'max-h-0'}`}>
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-semibold text-slate-800 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
            ))}
            <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-100">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" 
            alt="Pantai Wadu Jao" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-white">
          <span className="inline-block px-4 py-1 bg-blue-600 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">PENGABDIAN MASYARAKAT 2025</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Pemberdayaan Berbasis <br/>
            <span className="text-blue-400 font-mono italic text-4xl md:text-6xl text-shadow-sm">Model MIXTAWIS</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light">
            Penguatan Ekonomi Kreatif di Kawasan Wisata Pantai Wadu Jao melalui Inovasi Digital dan Produk Lokal.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#program" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/30 no-underline text-white group">
              Pelajari Program <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>            
            <button 
              onClick={() => setIsEventModalOpen(true)}
              className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold flex items-center gap-2 transition-all shadow-xl hover:bg-blue-50 group"
            >
              <Calendar size={20} className="text-blue-600" /> Kalender Event
            </button>
            <a href="https://www.youtube.com/@WaduJaoWisata" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-xl font-bold transition-all text-white flex items-center gap-2 no-underline">
              <Play size={18} fill="currentColor" /> Tonton Video
            </a>
          </div>
        </div>
      </section>

      {/* Event Calendar Modal */}
      {isEventModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-blue-600 text-white">
              <div>
                <h2 className="text-2xl font-bold">Kalender Event Tahunan</h2>
                <p className="text-blue-100 text-sm">Destinasi Wisata Desa Wadu Jao</p>
              </div>
              <button onClick={() => setIsEventModalOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
              <div className="grid md:grid-cols-2 gap-4">
                {eventCalendar.map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all flex gap-4 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex flex-col items-center justify-center font-bold text-xs uppercase group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <span className="text-[10px] opacity-70">Bulan</span>
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">{item.month}: {item.event}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Counter */}
      <section className="relative z-30 -mt-16 max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest mb-4">LATAR BELAKANG</h2>
            <h3 className="text-4xl font-extrabold mb-8 text-slate-900 leading-snug">Mewujudkan Desa Jambu Sebagai Ikon Wisata Mandiri</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Model MIXTAWIS merupakan sinergi antara teknologi digital, kreativitas lokal, dan pemberdayaan masyarakat partisipatif bersama Pokdarwis dan PKK Desa Jambu.
            </p>
            <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-900 mb-2 italic text-lg">"Mahasiswa Berdampak, Masyarakat Berdaya"</h4>
              <p className="text-blue-800/80 text-sm font-medium tracking-tight uppercase">Tim Pelaksana: Sahrul Ramadhan, dkk — UM Bima.</p>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" className="rounded-3xl shadow-2xl w-full h-80 object-cover" alt="Workshop" />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Users size={20} /></div>
                <div><p className="text-xs text-slate-400 font-bold">Kolaborasi</p><p className="font-bold text-slate-900">Masyarakat Aktif</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section id="program" className="bg-slate-900 py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold mb-4 uppercase tracking-tighter">STRATEGI UTAMA</h2>
            <h3 className="text-4xl md:text-5xl font-black">Implementasi Model MIXTAWIS</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((item, idx) => (
              <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UMKM Section */}
      <section id="impact" className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-widest">Produk Binaan</h2>
        <h3 className="text-4xl font-extrabold mb-12 text-slate-900 font-serif">Inovasi Ekonomi Kreatif</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-50 hover:border-blue-100 transition-colors">
            <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-slate-900">Jus Jagung "Wadu Jao"</h4>
            <p className="text-slate-500 mb-6 leading-relaxed text-sm">Minuman sehat kaya nutrisi berbahan dasar jagung lokal pilihan dengan kemasan modern.</p>
            <span className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600 uppercase tracking-tighter">High Power Blender & Sealer</span>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-50 hover:border-blue-100 transition-colors">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TrendingUp size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-slate-900">Bawang Goreng Gurih</h4>
            <p className="text-slate-500 mb-6 leading-relaxed text-sm">Varian bawang goreng kualitas premium dengan bumbu rahasia khas Desa Jambu.</p>
            <span className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600 uppercase tracking-tighter">Peningkatan Alat Produksi</span>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section id="location" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-widest">Kunjungi Kami</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Lokasi & Navigasi</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-2 bg-slate-100 rounded-3xl overflow-hidden shadow-inner min-h-[400px] relative group">
              {/* Actual Map Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15767.14798656117!2d118.4418641!3d-8.7118218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db4963098522617%3A0x6a0a09e02c6168e3!2sPantai%20Wadu%20Jao!5e0!3m2!1sen!2sid!4v1716123456789!5m2!1sen!2sid" 
                className="w-full h-full border-0 absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="bg-blue-600 text-white p-10 rounded-3xl flex flex-col justify-center shadow-xl shadow-blue-500/20">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <MapPin size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Pantai Wadu Jao</h4>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Terletak di Desa Jambu, Kabupaten Bima. Menawarkan keindahan tebing batu ikonik dan hamparan pasir putih yang memukau.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 text-sm font-medium">
                  <Clock size={18} className="text-blue-200" />
                  <span>Buka 24 Jam (Direkomendasikan Pagi/Sore)</span>
                </div>
                <div className="flex items-start gap-4 text-sm font-medium">
                  <Award size={18} className="text-blue-200" />
                  <span>Ikon: Tebing Batu Jao & Pasir Putih</span>
                </div>
              </div>
              <a 
                href={gmapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-lg"
              >
                Petunjuk Arah <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 pt-20 pb-10 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">WJ</div>
                <span className="text-2xl font-black text-blue-900 uppercase tracking-tighter">MIXTAWIS</span>
              </div>
              <p className="text-slate-500 text-lg max-w-sm mb-6 leading-relaxed">
                Program Pengabdian Masyarakat oleh Universitas Muhammadiyah Bima untuk kemajuan ekonomi kreatif pesisir Pantai Wadu Jao.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Navigasi</h5>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#home" className="hover:text-blue-600 transition no-underline">Beranda</a></li>
                <li><a href="#about" className="hover:text-blue-600 transition no-underline">Tentang Kami</a></li>
                <li><a href="#program" className="hover:text-blue-600 transition no-underline">Program Kerja</a></li>
                <li><a href="#impact" className="hover:text-blue-600 transition no-underline">UMKM Binaan</a></li>
                <li><a href="#location" className="hover:text-blue-600 transition no-underline">Lokasi</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Kontak</h5>
              <ul className="space-y-4 text-slate-500 font-medium text-sm">
                <li className="flex gap-2 items-start tracking-tight">
                  <MapPin size={18} className="text-blue-600 shrink-0 mt-1" /> 
                  <a href={gmapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Desa Jambu, Kab. Bima (Pantai Wadu Jao)</a>
                </li>
                <li className="flex gap-2 italic text-blue-600 font-bold">@wadujaowisata</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2025 Universitas Muhammadiyah Bima. 
            <span className="relative inline-block ml-1 group cursor-help">
              <span className="text-blue-500 hover:text-blue-700 transition-colors">PKM MIXTAWIS</span>
              {/* Tooltip Popup */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-[11px] rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-xl z-50">
                <div className="flex items-center gap-1.5 normal-case tracking-normal font-medium">
                  Design with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> by 
                  <a 
                    href={waLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-white underline decoration-blue-400/30 transition-colors inline-flex items-center gap-0.5 ml-0.5 no-underline"
                  >
                    Qomar Rahmadhin
                  </a>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
              </div>
            </span>.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;