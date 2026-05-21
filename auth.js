/* ─── Auth + Supabase — Consciencia Creativa ────────────────── */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://bwqqvawavawotrryzyys.supabase.co';
  var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3cXF2YXdhdmF3b3Rycnl6eXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMjU4NTUsImV4cCI6MjA5NDkwMTg1NX0.2IAVaHlgONmoC6fHDrcznr6kk-ZIlyu-fSPlxAEmuY0';
  var _client = null;

  function getClient() {
    if (!_client) _client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    return _client;
  }

  // ── SVG icons ────────────────────────────────────────────────
  var EYE_ON  = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
  var EYE_OFF = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';

  // ── Modal HTML ───────────────────────────────────────────────
  var MODAL_HTML = '\
<div id="auth-overlay" role="dialog" aria-modal="true" aria-label="Autenticación">\
  <div id="auth-modal">\
    <button id="auth-close" aria-label="Cerrar">\
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\
    </button>\
    <div class="auth-brand">\
      <span class="auth-brand-dot"></span>\
      <span class="auth-brand-name">Consciencia Creativa</span>\
    </div>\
    <div class="auth-tabs" id="auth-tabs">\
      <button class="auth-tab active" id="atab-login" onclick="authTab(\'login\')">Iniciar Sesión</button>\
      <button class="auth-tab" id="atab-register" onclick="authTab(\'register\')">Registrarse</button>\
    </div>\
\
    <!-- LOGIN -->\
    <div class="auth-panel active" id="auth-panel-login">\
      <h2 class="auth-panel-title">Bienvenido de vuelta</h2>\
      <p class="auth-panel-sub">Ingresa a tu cuenta para continuar</p>\
      <div class="auth-message" id="msg-login"></div>\
      <form id="form-login" novalidate>\
        <div class="auth-field">\
          <label for="l-email">Correo electrónico</label>\
          <input type="email" id="l-email" placeholder="correo@empresa.com" autocomplete="email">\
          <span class="auth-field-error" id="e-l-email"></span>\
        </div>\
        <div class="auth-field">\
          <label for="l-pwd">Contraseña</label>\
          <div class="auth-pwd-wrap">\
            <input type="password" id="l-pwd" placeholder="········" autocomplete="current-password">\
            <button type="button" class="auth-eye" onclick="authEye(\'l-pwd\',this)" aria-label="Mostrar contraseña">' + EYE_ON + '</button>\
          </div>\
          <span class="auth-field-error" id="e-l-pwd"></span>\
        </div>\
        <div class="auth-forgot-row">\
          <button type="button" class="auth-link" onclick="authTab(\'forgot\')">¿Olvidaste tu contraseña?</button>\
        </div>\
        <button type="submit" class="auth-btn-primary" id="btn-login">\
          <span class="auth-btn-label">Entrar</span>\
          <div class="auth-btn-spinner"></div>\
        </button>\
      </form>\
      <p class="auth-switch-text">¿No tienes cuenta? <button type="button" class="auth-link" onclick="authTab(\'register\')">Regístrate gratis</button></p>\
    </div>\
\
    <!-- REGISTER -->\
    <div class="auth-panel" id="auth-panel-register">\
      <h2 class="auth-panel-title">Crea tu cuenta</h2>\
      <p class="auth-panel-sub">Únete a la comunidad Consciencia Creativa</p>\
      <div class="auth-message" id="msg-register"></div>\
      <form id="form-register" novalidate>\
        <div class="auth-two-col">\
          <div class="auth-field">\
            <label for="r-nombre">Nombre</label>\
            <input type="text" id="r-nombre" placeholder="Juan" autocomplete="given-name">\
            <span class="auth-field-error" id="e-r-nombre"></span>\
          </div>\
          <div class="auth-field">\
            <label for="r-apellido">Apellido</label>\
            <input type="text" id="r-apellido" placeholder="Pérez" autocomplete="family-name">\
            <span class="auth-field-error" id="e-r-apellido"></span>\
          </div>\
        </div>\
        <div class="auth-field">\
          <label for="r-empresa">Empresa <span class="optional">(opcional)</span></label>\
          <input type="text" id="r-empresa" placeholder="Mi Empresa S.A.S." autocomplete="organization">\
        </div>\
        <div class="auth-field">\
          <label for="r-email">Correo electrónico</label>\
          <input type="email" id="r-email" placeholder="correo@empresa.com" autocomplete="email">\
          <span class="auth-field-error" id="e-r-email"></span>\
        </div>\
        <div class="auth-field">\
          <label for="r-pwd">Contraseña</label>\
          <div class="auth-pwd-wrap">\
            <input type="password" id="r-pwd" placeholder="Mínimo 8 caracteres" autocomplete="new-password" oninput="authStrength(this.value)">\
            <button type="button" class="auth-eye" onclick="authEye(\'r-pwd\',this)" aria-label="Mostrar contraseña">' + EYE_ON + '</button>\
          </div>\
          <div class="auth-strength"><div class="auth-strength-fill" id="strength-fill"></div></div>\
          <span class="auth-strength-label" id="strength-label"></span>\
          <span class="auth-field-error" id="e-r-pwd"></span>\
        </div>\
        <div class="auth-field">\
          <label for="r-confirm">Confirmar contraseña</label>\
          <div class="auth-pwd-wrap">\
            <input type="password" id="r-confirm" placeholder="········" autocomplete="new-password">\
            <button type="button" class="auth-eye" onclick="authEye(\'r-confirm\',this)" aria-label="Mostrar contraseña">' + EYE_ON + '</button>\
          </div>\
          <span class="auth-field-error" id="e-r-confirm"></span>\
        </div>\
        <button type="submit" class="auth-btn-primary" id="btn-register">\
          <span class="auth-btn-label">Crear cuenta</span>\
          <div class="auth-btn-spinner"></div>\
        </button>\
      </form>\
      <p class="auth-switch-text">¿Ya tienes cuenta? <button type="button" class="auth-link" onclick="authTab(\'login\')">Inicia Sesión</button></p>\
    </div>\
\
    <!-- FORGOT -->\
    <div class="auth-panel" id="auth-panel-forgot">\
      <button class="auth-back" onclick="authTab(\'login\')">\
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>\
        Volver\
      </button>\
      <h2 class="auth-panel-title">Recuperar contraseña</h2>\
      <p class="auth-panel-sub">Escribe tu correo y te enviaremos un enlace para restablecer tu contraseña.</p>\
      <div class="auth-message" id="msg-forgot"></div>\
      <form id="form-forgot" novalidate>\
        <div class="auth-field">\
          <label for="f-email">Correo electrónico</label>\
          <input type="email" id="f-email" placeholder="correo@empresa.com" autocomplete="email">\
          <span class="auth-field-error" id="e-f-email"></span>\
        </div>\
        <button type="submit" class="auth-btn-primary" id="btn-forgot">\
          <span class="auth-btn-label">Enviar enlace</span>\
          <div class="auth-btn-spinner"></div>\
        </button>\
      </form>\
    </div>\
\
    <!-- SUCCESS -->\
    <div class="auth-panel" id="auth-panel-success">\
      <div class="auth-success-icon">\
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#436653" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\
      </div>\
      <h2 class="auth-success-title" id="success-title">¡Cuenta creada!</h2>\
      <p class="auth-success-sub" id="success-sub">Revisa tu correo y confirma tu cuenta para activarla.</p>\
      <button class="auth-btn-primary" id="btn-success" onclick="closeAuthModal()">\
        <span class="auth-btn-label">Entendido</span>\
      </button>\
    </div>\
  </div>\
</div>';

  // ── Inject modal ─────────────────────────────────────────────
  function injectModal() {
    document.body.insertAdjacentHTML('beforeend', MODAL_HTML);
    document.getElementById('auth-close').addEventListener('click', closeAuthModal);
    document.getElementById('auth-overlay').addEventListener('click', function (e) {
      if (e.target === this) closeAuthModal();
    });
    document.getElementById('form-login').addEventListener('submit', handleLogin);
    document.getElementById('form-register').addEventListener('submit', handleRegister);
    document.getElementById('form-forgot').addEventListener('submit', handleForgot);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAuthModal();
    });
  }

  // ── Tab switch ───────────────────────────────────────────────
  window.authTab = function (tab) {
    document.querySelectorAll('.auth-panel').forEach(function (p) { p.classList.remove('active'); });
    clearMessages();
    var tabs = document.getElementById('auth-tabs');
    if (tab === 'login' || tab === 'register') {
      tabs.style.display = '';
      document.getElementById('atab-login').classList.toggle('active', tab === 'login');
      document.getElementById('atab-register').classList.toggle('active', tab === 'register');
    } else {
      tabs.style.display = 'none';
    }
    var panel = document.getElementById('auth-panel-' + tab);
    if (panel) panel.classList.add('active');
    setTimeout(function () {
      var inp = document.querySelector('#auth-panel-' + tab + ' input');
      if (inp) inp.focus();
    }, 100);
  };

  // ── Open / Close ─────────────────────────────────────────────
  window.openAuthModal = function (tab) {
    authTab(tab || 'login');
    document.getElementById('auth-overlay').classList.add('auth-visible');
    document.body.style.overflow = 'hidden';
  };

  window.closeAuthModal = function () {
    document.getElementById('auth-overlay').classList.remove('auth-visible');
    document.body.style.overflow = '';
  };

  // ── Password eye toggle ──────────────────────────────────────
  window.authEye = function (inputId, btn) {
    var inp = document.getElementById(inputId);
    var show = inp.type === 'password';
    inp.type = show ? 'text' : 'password';
    btn.innerHTML = show ? EYE_OFF : EYE_ON;
    btn.setAttribute('aria-label', show ? 'Ocultar contraseña' : 'Mostrar contraseña');
  };

  // ── Password strength ────────────────────────────────────────
  window.authStrength = function (val) {
    var fill  = document.getElementById('strength-fill');
    var label = document.getElementById('strength-label');
    if (!fill) return;
    var score = 0;
    if (val.length >= 8)          score++;
    if (/[A-Z]/.test(val))        score++;
    if (/[0-9]/.test(val))        score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    var levels = [
      { pct: '0%',   color: '#e0e3e5', text: '' },
      { pct: '25%',  color: '#e07a5f', text: 'Muy débil' },
      { pct: '50%',  color: '#e07a5f', text: 'Débil' },
      { pct: '75%',  color: '#f5a623', text: 'Moderada' },
      { pct: '100%', color: '#436653', text: 'Fuerte' },
    ];
    var lvl = val.length === 0 ? levels[0] : levels[Math.min(score, 4)];
    fill.style.width      = lvl.pct;
    fill.style.background = lvl.color;
    label.textContent     = lvl.text;
    label.style.color     = lvl.color;
  };

  // ── Helpers ──────────────────────────────────────────────────
  function clearMessages() {
    document.querySelectorAll('.auth-message').forEach(function (m) {
      m.className = 'auth-message'; m.textContent = '';
    });
    document.querySelectorAll('.auth-field-error').forEach(function (e) { e.textContent = ''; });
    document.querySelectorAll('.auth-field input').forEach(function (i) { i.classList.remove('auth-err'); });
  }

  function fieldErr(inputId, errId, msg) {
    var inp = document.getElementById(inputId);
    var err = document.getElementById(errId);
    if (inp) inp.classList.add('auth-err');
    if (err) err.textContent = msg;
  }

  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }

  function setLoading(btnId, on) {
    var btn = document.getElementById(btnId);
    if (!btn) return;
    btn.disabled = on;
    btn.classList.toggle('loading', on);
  }

  function showMsg(id, type, text) {
    var el = document.getElementById(id);
    if (!el) return;
    el.className = 'auth-message ' + type;
    el.textContent = text;
  }

  function sbError(error) {
    var msg = (error && error.message) || '';
    if (msg.includes('Invalid login credentials'))  return 'Correo o contraseña incorrectos.';
    if (msg.includes('Email not confirmed'))         return 'Confirma tu correo antes de iniciar sesión. Revisa tu bandeja de entrada.';
    if (msg.includes('User already registered'))    return 'Este correo ya está registrado. Intenta iniciar sesión.';
    if (msg.includes('Password should be at least')) return 'La contraseña debe tener al menos 6 caracteres.';
    if (msg.includes('rate limit') || msg.includes('over_email_send_rate_limit')) return 'Demasiados intentos. Espera unos minutos e intenta de nuevo.';
    if (msg.includes('network') || msg.includes('fetch')) return 'Error de conexión. Verifica tu internet.';
    return 'Ocurrió un error inesperado. Intenta de nuevo.';
  }

  // ── Login ────────────────────────────────────────────────────
  function handleLogin(e) {
    e.preventDefault();
    clearMessages();
    var email = document.getElementById('l-email').value.trim();
    var pwd   = document.getElementById('l-pwd').value;
    var ok    = true;
    if (!email || !isEmail(email)) { fieldErr('l-email', 'e-l-email', 'Ingresa un correo electrónico válido.'); ok = false; }
    if (!pwd || pwd.length < 6)    { fieldErr('l-pwd',   'e-l-pwd',   'La contraseña debe tener al menos 6 caracteres.'); ok = false; }
    if (!ok) return;

    setLoading('btn-login', true);
    getClient().auth.signInWithPassword({ email: email, password: pwd })
      .then(function (result) {
        setLoading('btn-login', false);
        if (result.error) {
          showMsg('msg-login', 'msg-error', sbError(result.error));
        } else {
          window.location.href = 'dashboard.html';
        }
      });
  }

  // ── Register ─────────────────────────────────────────────────
  function handleRegister(e) {
    e.preventDefault();
    clearMessages();
    var nombre   = document.getElementById('r-nombre').value.trim();
    var apellido = document.getElementById('r-apellido').value.trim();
    var empresa  = document.getElementById('r-empresa').value.trim();
    var email    = document.getElementById('r-email').value.trim();
    var pwd      = document.getElementById('r-pwd').value;
    var confirm  = document.getElementById('r-confirm').value;
    var ok = true;
    if (!nombre)                    { fieldErr('r-nombre',   'e-r-nombre',   'Ingresa tu nombre.'); ok = false; }
    if (!apellido)                  { fieldErr('r-apellido', 'e-r-apellido', 'Ingresa tu apellido.'); ok = false; }
    if (!email || !isEmail(email))  { fieldErr('r-email',    'e-r-email',    'Ingresa un correo electrónico válido.'); ok = false; }
    if (!pwd || pwd.length < 8)     { fieldErr('r-pwd',      'e-r-pwd',      'La contraseña debe tener mínimo 8 caracteres.'); ok = false; }
    if (pwd !== confirm)            { fieldErr('r-confirm',  'e-r-confirm',  'Las contraseñas no coinciden.'); ok = false; }
    if (!ok) return;

    setLoading('btn-register', true);
    getClient().auth.signUp({
      email: email,
      password: pwd,
      options: {
        data: {
          nombre:     nombre,
          apellido:   apellido,
          empresa:    empresa,
          full_name:  nombre + ' ' + apellido,
        },
        emailRedirectTo: window.location.origin + '/dashboard.html',
      },
    }).then(function (result) {
      setLoading('btn-register', false);
      if (result.error) {
        showMsg('msg-register', 'msg-error', sbError(result.error));
      } else {
        document.getElementById('success-title').textContent = '¡Revisa tu correo!';
        document.getElementById('success-sub').textContent =
          'Te enviamos un enlace de confirmación a ' + email +
          '. Actívalo para ingresar a tu cuenta.';
        authTab('success');
      }
    });
  }

  // ── Forgot password ──────────────────────────────────────────
  function handleForgot(e) {
    e.preventDefault();
    clearMessages();
    var email = document.getElementById('f-email').value.trim();
    if (!email || !isEmail(email)) { fieldErr('f-email', 'e-f-email', 'Ingresa un correo electrónico válido.'); return; }

    setLoading('btn-forgot', true);
    getClient().auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/dashboard.html',
    }).then(function (result) {
      setLoading('btn-forgot', false);
      if (result.error) {
        showMsg('msg-forgot', 'msg-error', sbError(result.error));
      } else {
        showMsg('msg-forgot', 'msg-info', '✓ Enlace enviado. Revisa tu bandeja de entrada.');
        document.getElementById('f-email').value = '';
      }
    });
  }

  // ── Nav state ────────────────────────────────────────────────
  function getUserName(user) {
    if (user.user_metadata) {
      if (user.user_metadata.nombre) return user.user_metadata.nombre;
      if (user.user_metadata.full_name) return user.user_metadata.full_name.split(' ')[0];
    }
    return user.email.split('@')[0];
  }

  function updateNavLoggedIn(user) {
    var name    = getUserName(user);
    var initial = name.charAt(0).toUpperCase();
    // Replace all auth trigger buttons on the page
    document.querySelectorAll('button[onclick*="openAuthModal"]').forEach(function (btn) {
      // Only replace buttons in nav bars (not the mobile icon in disc page)
      var userEl = document.createElement('div');
      userEl.className = 'auth-nav-user';
      userEl.innerHTML =
        '<div class="auth-nav-avatar">' + initial + '</div>' +
        '<span class="auth-nav-name">' + name + '</span>' +
        '<button class="auth-nav-out" onclick="authSignOut()">Salir</button>';
      btn.parentNode.replaceChild(userEl, btn);
    });
    // Also hide dividers that were paired with auth buttons (they remain harmlessly)
  }

  window.authSignOut = function () {
    getClient().auth.signOut().then(function () {
      window.location.href = 'index.html';
    });
  };

  // ── Auth state check on every page load ──────────────────────
  function checkAuthState() {
    getClient().auth.getSession().then(function (result) {
      if (result.data && result.data.session && result.data.session.user) {
        updateNavLoggedIn(result.data.session.user);
      }
    });
    getClient().auth.onAuthStateChange(function (event, session) {
      if (event === 'SIGNED_IN' && session) {
        updateNavLoggedIn(session.user);
      }
    });
  }

  // ── Init ─────────────────────────────────────────────────────
  function init() {
    injectModal();
    checkAuthState();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
