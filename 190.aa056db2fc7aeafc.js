(self.webpackChunkapp_scottytheais = self.webpackChunkapp_scottytheais || []).push([
    [190], {
        5972: (He, $, ie) => {
            "use strict";
            $.Xx = $._w = $.aP = $.KS = $.jQ = void 0;
            ie(5465);
            const be = ie(6713);
            ie(3403);

            function te(K) {
                const V = new Float64Array(16);
                if (K)
                    for (let z = 0; z < K.length; z++) V[z] = K[z];
                return V
            }
            $.jQ = 64, $.KS = 64, $.aP = 32, new Uint8Array(32)[0] = 9;
            const Re = te(),
                ae = te([1]),
                fe = (te([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), te([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                Ce = te([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                xe = te([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
            te([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function de(K, V) {
                for (let z = 0; z < 16; z++) K[z] = 0 | V[z]
            }

            function et(K) {
                let V = 1;
                for (let z = 0; z < 16; z++) {
                    let d = K[z] + V + 65535;
                    V = Math.floor(d / 65536), K[z] = d - 65536 * V
                }
                K[0] += V - 1 + 37 * (V - 1)
            }

            function Ue(K, V, z) {
                const d = ~(z - 1);
                for (let L = 0; L < 16; L++) {
                    const Oe = d & (K[L] ^ V[L]);
                    K[L] ^= Oe, V[L] ^= Oe
                }
            }

            function We(K, V) {
                const z = te(),
                    d = te();
                for (let L = 0; L < 16; L++) d[L] = V[L];
                et(d), et(d), et(d);
                for (let L = 0; L < 2; L++) {
                    z[0] = d[0] - 65517;
                    for (let Fe = 1; Fe < 15; Fe++) z[Fe] = d[Fe] - 65535 - (z[Fe - 1] >> 16 & 1), z[Fe - 1] &= 65535;
                    z[15] = d[15] - 32767 - (z[14] >> 16 & 1);
                    const Oe = z[15] >> 16 & 1;
                    z[14] &= 65535, Ue(d, z, 1 - Oe)
                }
                for (let L = 0; L < 16; L++) K[2 * L] = 255 & d[L], K[2 * L + 1] = d[L] >> 8
            }

            function re(K) {
                const V = new Uint8Array(32);
                return We(V, K), 1 & V[0]
            }

            function pe(K, V, z) {
                for (let d = 0; d < 16; d++) K[d] = V[d] + z[d]
            }

            function Z(K, V, z) {
                for (let d = 0; d < 16; d++) K[d] = V[d] - z[d]
            }

            function J(K, V, z) {
                let d, L, Oe = 0,
                    Fe = 0,
                    nt = 0,
                    bt = 0,
                    ot = 0,
                    lt = 0,
                    Jt = 0,
                    Tt = 0,
                    wt = 0,
                    ir = 0,
                    zt = 0,
                    Dt = 0,
                    Rt = 0,
                    ht = 0,
                    dt = 0,
                    ft = 0,
                    rt = 0,
                    Qt = 0,
                    sr = 0,
                    yr = 0,
                    hr = 0,
                    dr = 0,
                    Sr = 0,
                    Tr = 0,
                    br = 0,
                    Te = 0,
                    wr = 0,
                    _n = 0,
                    Jn = 0,
                    mn = 0,
                    fn = 0,
                    Nt = z[0],
                    Lt = z[1],
                    jt = z[2],
                    At = z[3],
                    Yt = z[4],
                    or = z[5],
                    Xt = z[6],
                    ar = z[7],
                    er = z[8],
                    qt = z[9],
                    Ut = z[10],
                    _t = z[11],
                    cr = z[12],
                    tr = z[13],
                    $t = z[14],
                    rr = z[15];
                d = V[0], Oe += d * Nt, Fe += d * Lt, nt += d * jt, bt += d * At, ot += d * Yt, lt += d * or, Jt += d * Xt, Tt += d * ar, wt += d * er, ir += d * qt, zt += d * Ut, Dt += d * _t, Rt += d * cr, ht += d * tr, dt += d * $t, ft += d * rr, d = V[1], Fe += d * Nt, nt += d * Lt, bt += d * jt, ot += d * At, lt += d * Yt, Jt += d * or, Tt += d * Xt, wt += d * ar, ir += d * er, zt += d * qt, Dt += d * Ut, Rt += d * _t, ht += d * cr, dt += d * tr, ft += d * $t, rt += d * rr, d = V[2], nt += d * Nt, bt += d * Lt, ot += d * jt, lt += d * At, Jt += d * Yt, Tt += d * or, wt += d * Xt, ir += d * ar, zt += d * er, Dt += d * qt, Rt += d * Ut, ht += d * _t, dt += d * cr, ft += d * tr, rt += d * $t, Qt += d * rr, d = V[3], bt += d * Nt, ot += d * Lt, lt += d * jt, Jt += d * At, Tt += d * Yt, wt += d * or, ir += d * Xt, zt += d * ar, Dt += d * er, Rt += d * qt, ht += d * Ut, dt += d * _t, ft += d * cr, rt += d * tr, Qt += d * $t, sr += d * rr, d = V[4], ot += d * Nt, lt += d * Lt, Jt += d * jt, Tt += d * At, wt += d * Yt, ir += d * or, zt += d * Xt, Dt += d * ar, Rt += d * er, ht += d * qt, dt += d * Ut, ft += d * _t, rt += d * cr, Qt += d * tr, sr += d * $t, yr += d * rr, d = V[5], lt += d * Nt, Jt += d * Lt, Tt += d * jt, wt += d * At, ir += d * Yt, zt += d * or, Dt += d * Xt, Rt += d * ar, ht += d * er, dt += d * qt, ft += d * Ut, rt += d * _t, Qt += d * cr, sr += d * tr, yr += d * $t, hr += d * rr, d = V[6], Jt += d * Nt, Tt += d * Lt, wt += d * jt, ir += d * At, zt += d * Yt, Dt += d * or, Rt += d * Xt, ht += d * ar, dt += d * er, ft += d * qt, rt += d * Ut, Qt += d * _t, sr += d * cr, yr += d * tr, hr += d * $t, dr += d * rr, d = V[7], Tt += d * Nt, wt += d * Lt, ir += d * jt, zt += d * At, Dt += d * Yt, Rt += d * or, ht += d * Xt, dt += d * ar, ft += d * er, rt += d * qt, Qt += d * Ut, sr += d * _t, yr += d * cr, hr += d * tr, dr += d * $t, Sr += d * rr, d = V[8], wt += d * Nt, ir += d * Lt, zt += d * jt, Dt += d * At, Rt += d * Yt, ht += d * or, dt += d * Xt, ft += d * ar, rt += d * er, Qt += d * qt, sr += d * Ut, yr += d * _t, hr += d * cr, dr += d * tr, Sr += d * $t, Tr += d * rr, d = V[9], ir += d * Nt, zt += d * Lt, Dt += d * jt, Rt += d * At, ht += d * Yt, dt += d * or, ft += d * Xt, rt += d * ar, Qt += d * er, sr += d * qt, yr += d * Ut, hr += d * _t, dr += d * cr, Sr += d * tr, Tr += d * $t, br += d * rr, d = V[10], zt += d * Nt, Dt += d * Lt, Rt += d * jt, ht += d * At, dt += d * Yt, ft += d * or, rt += d * Xt, Qt += d * ar, sr += d * er, yr += d * qt, hr += d * Ut, dr += d * _t, Sr += d * cr, Tr += d * tr, br += d * $t, Te += d * rr, d = V[11], Dt += d * Nt, Rt += d * Lt, ht += d * jt, dt += d * At, ft += d * Yt, rt += d * or, Qt += d * Xt, sr += d * ar, yr += d * er, hr += d * qt, dr += d * Ut, Sr += d * _t, Tr += d * cr, br += d * tr, Te += d * $t, wr += d * rr, d = V[12], Rt += d * Nt, ht += d * Lt, dt += d * jt, ft += d * At, rt += d * Yt, Qt += d * or, sr += d * Xt, yr += d * ar, hr += d * er, dr += d * qt, Sr += d * Ut, Tr += d * _t, br += d * cr, Te += d * tr, wr += d * $t, _n += d * rr, d = V[13], ht += d * Nt, dt += d * Lt, ft += d * jt, rt += d * At, Qt += d * Yt, sr += d * or, yr += d * Xt, hr += d * ar, dr += d * er, Sr += d * qt, Tr += d * Ut, br += d * _t, Te += d * cr, wr += d * tr, _n += d * $t, Jn += d * rr, d = V[14], dt += d * Nt, ft += d * Lt, rt += d * jt, Qt += d * At, sr += d * Yt, yr += d * or, hr += d * Xt, dr += d * ar, Sr += d * er, Tr += d * qt, br += d * Ut, Te += d * _t, wr += d * cr, _n += d * tr, Jn += d * $t, mn += d * rr, d = V[15], ft += d * Nt, rt += d * Lt, Qt += d * jt, sr += d * At, yr += d * Yt, hr += d * or, dr += d * Xt, Sr += d * ar, Tr += d * er, br += d * qt, Te += d * Ut, wr += d * _t, _n += d * cr, Jn += d * tr, mn += d * $t, fn += d * rr, Oe += 38 * rt, Fe += 38 * Qt, nt += 38 * sr, bt += 38 * yr, ot += 38 * hr, lt += 38 * dr, Jt += 38 * Sr, Tt += 38 * Tr, wt += 38 * br, ir += 38 * Te, zt += 38 * wr, Dt += 38 * _n, Rt += 38 * Jn, ht += 38 * mn, dt += 38 * fn, L = 1, d = Oe + L + 65535, L = Math.floor(d / 65536), Oe = d - 65536 * L, d = Fe + L + 65535, L = Math.floor(d / 65536), Fe = d - 65536 * L, d = nt + L + 65535, L = Math.floor(d / 65536), nt = d - 65536 * L, d = bt + L + 65535, L = Math.floor(d / 65536), bt = d - 65536 * L, d = ot + L + 65535, L = Math.floor(d / 65536), ot = d - 65536 * L, d = lt + L + 65535, L = Math.floor(d / 65536), lt = d - 65536 * L, d = Jt + L + 65535, L = Math.floor(d / 65536), Jt = d - 65536 * L, d = Tt + L + 65535, L = Math.floor(d / 65536), Tt = d - 65536 * L, d = wt + L + 65535, L = Math.floor(d / 65536), wt = d - 65536 * L, d = ir + L + 65535, L = Math.floor(d / 65536), ir = d - 65536 * L, d = zt + L + 65535, L = Math.floor(d / 65536), zt = d - 65536 * L, d = Dt + L + 65535, L = Math.floor(d / 65536), Dt = d - 65536 * L, d = Rt + L + 65535, L = Math.floor(d / 65536), Rt = d - 65536 * L, d = ht + L + 65535, L = Math.floor(d / 65536), ht = d - 65536 * L, d = dt + L + 65535, L = Math.floor(d / 65536), dt = d - 65536 * L, d = ft + L + 65535, L = Math.floor(d / 65536), ft = d - 65536 * L, Oe += L - 1 + 37 * (L - 1), L = 1, d = Oe + L + 65535, L = Math.floor(d / 65536), Oe = d - 65536 * L, d = Fe + L + 65535, L = Math.floor(d / 65536), Fe = d - 65536 * L, d = nt + L + 65535, L = Math.floor(d / 65536), nt = d - 65536 * L, d = bt + L + 65535, L = Math.floor(d / 65536), bt = d - 65536 * L, d = ot + L + 65535, L = Math.floor(d / 65536), ot = d - 65536 * L, d = lt + L + 65535, L = Math.floor(d / 65536), lt = d - 65536 * L, d = Jt + L + 65535, L = Math.floor(d / 65536), Jt = d - 65536 * L, d = Tt + L + 65535, L = Math.floor(d / 65536), Tt = d - 65536 * L, d = wt + L + 65535, L = Math.floor(d / 65536), wt = d - 65536 * L, d = ir + L + 65535, L = Math.floor(d / 65536), ir = d - 65536 * L, d = zt + L + 65535, L = Math.floor(d / 65536), zt = d - 65536 * L, d = Dt + L + 65535, L = Math.floor(d / 65536), Dt = d - 65536 * L, d = Rt + L + 65535, L = Math.floor(d / 65536), Rt = d - 65536 * L, d = ht + L + 65535, L = Math.floor(d / 65536), ht = d - 65536 * L, d = dt + L + 65535, L = Math.floor(d / 65536), dt = d - 65536 * L, d = ft + L + 65535, L = Math.floor(d / 65536), ft = d - 65536 * L, Oe += L - 1 + 37 * (L - 1), K[0] = Oe, K[1] = Fe, K[2] = nt, K[3] = bt, K[4] = ot, K[5] = lt, K[6] = Jt, K[7] = Tt, K[8] = wt, K[9] = ir, K[10] = zt, K[11] = Dt, K[12] = Rt, K[13] = ht, K[14] = dt, K[15] = ft
            }

            function y(K, V) {
                J(K, V, V)
            }

            function A(K, V) {
                const z = te(),
                    d = te(),
                    L = te(),
                    Oe = te(),
                    Fe = te(),
                    nt = te(),
                    bt = te(),
                    ot = te(),
                    lt = te();
                Z(z, K[1], K[0]), Z(lt, V[1], V[0]), J(z, z, lt), pe(d, K[0], K[1]), pe(lt, V[0], V[1]), J(d, d, lt), J(L, K[3], V[3]), J(L, L, fe), J(Oe, K[2], V[2]), pe(Oe, Oe, Oe), Z(Fe, d, z), Z(nt, Oe, L), pe(bt, Oe, L), pe(ot, d, z), J(K[0], Fe, nt), J(K[1], ot, bt), J(K[2], bt, nt), J(K[3], Fe, ot)
            }

            function w(K, V, z) {
                for (let d = 0; d < 4; d++) Ue(K[d], V[d], z)
            }

            function g(K, V) {
                const z = te(),
                    d = te(),
                    L = te();
                (function P(K, V) {
                    const z = te();
                    let d;
                    for (d = 0; d < 16; d++) z[d] = V[d];
                    for (d = 253; d >= 0; d--) y(z, z), 2 !== d && 4 !== d && J(z, z, V);
                    for (d = 0; d < 16; d++) K[d] = z[d]
                })(L, V[2]), J(z, V[0], L), J(d, V[1], L), We(K, d), K[31] ^= re(z) << 7
            }

            function G(K, V) {
                const z = [te(), te(), te(), te()];
                de(z[0], Ce), de(z[1], xe), de(z[2], ae), J(z[3], Ce, xe),
                    function I(K, V, z) {
                        de(K[0], Re), de(K[1], ae), de(K[2], ae), de(K[3], Re);
                        for (let d = 255; d >= 0; --d) {
                            const L = z[d / 8 | 0] >> (7 & d) & 1;
                            w(K, V, L), A(V, K), A(K, K), w(K, V, L)
                        }
                    }(K, z, V)
            }
            $._w = function ve(K) {
                if (K.length !== $.aP) throw new Error(`ed25519: seed must be ${$.aP} bytes`);
                const V = (0, be.hash)(K);
                V[0] &= 248, V[31] &= 127, V[31] |= 64;
                const z = new Uint8Array(32),
                    d = [te(), te(), te(), te()];
                G(d, V), g(z, d);
                const L = new Uint8Array(64);
                return L.set(K), L.set(z, 32), {
                    publicKey: z,
                    secretKey: L
                }
            };
            const se = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function B(K, V) {
                let z, d, L, Oe;
                for (d = 63; d >= 32; --d) {
                    for (z = 0, L = d - 32, Oe = d - 12; L < Oe; ++L) V[L] += z - 16 * V[d] * se[L - (d - 32)], z = Math.floor((V[L] + 128) / 256), V[L] -= 256 * z;
                    V[L] += z, V[d] = 0
                }
                for (z = 0, L = 0; L < 32; L++) V[L] += z - (V[31] >> 4) * se[L], z = V[L] >> 8, V[L] &= 255;
                for (L = 0; L < 32; L++) V[L] -= z * se[L];
                for (d = 0; d < 32; d++) V[d + 1] += V[d] >> 8, K[d] = 255 & V[d]
            }

            function Pe(K) {
                const V = new Float64Array(64);
                for (let z = 0; z < 64; z++) V[z] = K[z];
                for (let z = 0; z < 64; z++) K[z] = 0;
                B(K, V)
            }
            $.Xx = function ke(K, V) {
                const z = new Float64Array(64),
                    d = [te(), te(), te(), te()],
                    L = (0, be.hash)(K.subarray(0, 32));
                L[0] &= 248, L[31] &= 127, L[31] |= 64;
                const Oe = new Uint8Array(64);
                Oe.set(L.subarray(32), 32);
                const Fe = new be.SHA512;
                Fe.update(Oe.subarray(32)), Fe.update(V);
                const nt = Fe.digest();
                Fe.clean(), Pe(nt), G(d, nt), g(Oe, d), Fe.reset(), Fe.update(Oe.subarray(0, 32)), Fe.update(K.subarray(32)), Fe.update(V);
                const bt = Fe.digest();
                Pe(bt);
                for (let ot = 0; ot < 32; ot++) z[ot] = nt[ot];
                for (let ot = 0; ot < 32; ot++)
                    for (let lt = 0; lt < 32; lt++) z[ot + lt] += bt[ot] * L[lt];
                return B(Oe.subarray(32), z), Oe
            }
        },
        6713: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            });
            var v = ie(9546),
                ye = ie(3403);
            $.DIGEST_LENGTH = 64, $.BLOCK_SIZE = 128;
            var be = function() {
                function Re() {
                    this.digestLength = $.DIGEST_LENGTH, this.blockSize = $.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return Re.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, Re.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, Re.prototype.clean = function() {
                    ye.wipe(this._buffer), ye.wipe(this._tempHi), ye.wipe(this._tempLo), this.reset()
                }, Re.prototype.update = function(ae, le) {
                    if (void 0 === le && (le = ae.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var fe = 0;
                    if (this._bytesHashed += le, this._bufferLength > 0) {
                        for (; this._bufferLength < $.BLOCK_SIZE && le > 0;) this._buffer[this._bufferLength++] = ae[fe++], le--;
                        this._bufferLength === this.blockSize && (te(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (le >= this.blockSize && (fe = te(this._tempHi, this._tempLo, this._stateHi, this._stateLo, ae, fe, le), le %= this.blockSize); le > 0;) this._buffer[this._bufferLength++] = ae[fe++], le--;
                    return this
                }, Re.prototype.finish = function(ae) {
                    if (!this._finished) {
                        var le = this._bytesHashed,
                            fe = this._bufferLength,
                            Ce = le / 536870912 | 0,
                            xe = le << 3,
                            _e = le % 128 < 112 ? 128 : 256;
                        this._buffer[fe] = 128;
                        for (var de = fe + 1; de < _e - 8; de++) this._buffer[de] = 0;
                        v.writeUint32BE(Ce, this._buffer, _e - 8), v.writeUint32BE(xe, this._buffer, _e - 4), te(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, _e), this._finished = !0
                    }
                    for (de = 0; de < this.digestLength / 8; de++) v.writeUint32BE(this._stateHi[de], ae, 8 * de), v.writeUint32BE(this._stateLo[de], ae, 8 * de + 4);
                    return this
                }, Re.prototype.digest = function() {
                    var ae = new Uint8Array(this.digestLength);
                    return this.finish(ae), ae
                }, Re.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, Re.prototype.restoreState = function(ae) {
                    return this._stateHi.set(ae.stateHi), this._stateLo.set(ae.stateLo), this._bufferLength = ae.bufferLength, ae.buffer && this._buffer.set(ae.buffer), this._bytesHashed = ae.bytesHashed, this._finished = !1, this
                }, Re.prototype.cleanSavedState = function(ae) {
                    ye.wipe(ae.stateHi), ye.wipe(ae.stateLo), ae.buffer && ye.wipe(ae.buffer), ae.bufferLength = 0, ae.bytesHashed = 0
                }, Re
            }();
            $.SHA512 = be;
            var m = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function te(Re, ae, le, fe, Ce, xe, _e) {
                for (var g, I, G, ve, D, W, se, B, de = le[0], et = le[1], Ue = le[2], We = le[3], Je = le[4], ce = le[5], re = le[6], he = le[7], pe = fe[0], Z = fe[1], J = fe[2], y = fe[3], P = fe[4], E = fe[5], A = fe[6], w = fe[7]; _e >= 128;) {
                    for (var Pe = 0; Pe < 16; Pe++) Re[Pe] = v.readUint32BE(Ce, ke = 8 * Pe + xe), ae[Pe] = v.readUint32BE(Ce, ke + 4);
                    for (Pe = 0; Pe < 80; Pe++) {
                        var d, Jt, Zt = et,
                            tn = Ue,
                            vt = We,
                            K = Je,
                            V = ce,
                            z = re,
                            Oe = Z,
                            Fe = J,
                            nt = y,
                            bt = P,
                            ot = E,
                            lt = A;
                        if (D = 65535 & (I = w), W = I >>> 16, se = 65535 & (g = he), B = g >>> 16, D += 65535 & (I = (P >>> 14 | Je << 18) ^ (P >>> 18 | Je << 14) ^ (Je >>> 9 | P << 23)), W += I >>> 16, se += 65535 & (g = (Je >>> 14 | P << 18) ^ (Je >>> 18 | P << 14) ^ (P >>> 9 | Je << 23)), B += g >>> 16, D += 65535 & (I = P & E ^ ~P & A), W += I >>> 16, se += 65535 & (g = Je & ce ^ ~Je & re), B += g >>> 16, D += 65535 & (I = m[2 * Pe + 1]), W += I >>> 16, se += 65535 & (g = m[2 * Pe]), B += g >>> 16, W += (I = ae[Pe % 16]) >>> 16, se += 65535 & (g = Re[Pe % 16]), B += g >>> 16, se += (W += (D += 65535 & I) >>> 16) >>> 16, D = 65535 & (I = ve = 65535 & D | W << 16), W = I >>> 16, se = 65535 & (g = G = 65535 & se | (B += se >>> 16) << 16), B = g >>> 16, D += 65535 & (I = (pe >>> 28 | de << 4) ^ (de >>> 2 | pe << 30) ^ (de >>> 7 | pe << 25)), W += I >>> 16, se += 65535 & (g = (de >>> 28 | pe << 4) ^ (pe >>> 2 | de << 30) ^ (pe >>> 7 | de << 25)), B += g >>> 16, W += (I = pe & Z ^ pe & J ^ Z & J) >>> 16, se += 65535 & (g = de & et ^ de & Ue ^ et & Ue), B += g >>> 16, d = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, Jt = 65535 & D | W << 16, D = 65535 & (I = nt), W = I >>> 16, se = 65535 & (g = vt), B = g >>> 16, W += (I = ve) >>> 16, se += 65535 & (g = G), B += g >>> 16, et = de, Ue = Zt, We = tn, Je = vt = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, ce = K, re = V, he = z, de = d, Z = pe, J = Oe, y = Fe, P = nt = 65535 & D | W << 16, E = bt, A = ot, w = lt, pe = Jt, Pe % 16 == 15)
                            for (var ke = 0; ke < 16; ke++) D = 65535 & (I = ae[ke]), W = I >>> 16, se = 65535 & (g = Re[ke]), B = g >>> 16, D += 65535 & (I = ae[(ke + 9) % 16]), W += I >>> 16, se += 65535 & (g = Re[(ke + 9) % 16]), B += g >>> 16, D += 65535 & (I = ((ve = ae[(ke + 1) % 16]) >>> 1 | (G = Re[(ke + 1) % 16]) << 31) ^ (ve >>> 8 | G << 24) ^ (ve >>> 7 | G << 25)), W += I >>> 16, se += 65535 & (g = (G >>> 1 | ve << 31) ^ (G >>> 8 | ve << 24) ^ G >>> 7), B += g >>> 16, W += (I = ((ve = ae[(ke + 14) % 16]) >>> 19 | (G = Re[(ke + 14) % 16]) << 13) ^ (G >>> 29 | ve << 3) ^ (ve >>> 6 | G << 26)) >>> 16, se += 65535 & (g = (G >>> 19 | ve << 13) ^ (ve >>> 29 | G << 3) ^ G >>> 6), B += g >>> 16, Re[ke] = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, ae[ke] = 65535 & D | W << 16
                    }
                    D = 65535 & (I = pe), W = I >>> 16, se = 65535 & (g = de), B = g >>> 16, W += (I = fe[0]) >>> 16, se += 65535 & (g = le[0]), B += g >>> 16, le[0] = de = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, fe[0] = pe = 65535 & D | W << 16, D = 65535 & (I = Z), W = I >>> 16, se = 65535 & (g = et), B = g >>> 16, W += (I = fe[1]) >>> 16, se += 65535 & (g = le[1]), B += g >>> 16, le[1] = et = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, fe[1] = Z = 65535 & D | W << 16, D = 65535 & (I = J), W = I >>> 16, se = 65535 & (g = Ue), B = g >>> 16, W += (I = fe[2]) >>> 16, se += 65535 & (g = le[2]), B += g >>> 16, le[2] = Ue = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, fe[2] = J = 65535 & D | W << 16, D = 65535 & (I = y), W = I >>> 16, se = 65535 & (g = We), B = g >>> 16, W += (I = fe[3]) >>> 16, se += 65535 & (g = le[3]), B += g >>> 16, le[3] = We = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, fe[3] = y = 65535 & D | W << 16, D = 65535 & (I = P), W = I >>> 16, se = 65535 & (g = Je), B = g >>> 16, W += (I = fe[4]) >>> 16, se += 65535 & (g = le[4]), B += g >>> 16, le[4] = Je = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, fe[4] = P = 65535 & D | W << 16, D = 65535 & (I = E), W = I >>> 16, se = 65535 & (g = ce), B = g >>> 16, W += (I = fe[5]) >>> 16, se += 65535 & (g = le[5]), B += g >>> 16, le[5] = ce = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, fe[5] = E = 65535 & D | W << 16, D = 65535 & (I = A), W = I >>> 16, se = 65535 & (g = re), B = g >>> 16, W += (I = fe[6]) >>> 16, se += 65535 & (g = le[6]), B += g >>> 16, le[6] = re = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, fe[6] = A = 65535 & D | W << 16, D = 65535 & (I = w), W = I >>> 16, se = 65535 & (g = he), B = g >>> 16, W += (I = fe[7]) >>> 16, se += 65535 & (g = le[7]), B += g >>> 16, le[7] = he = 65535 & (se += (W += (D += 65535 & I) >>> 16) >>> 16) | (B += se >>> 16) << 16, fe[7] = w = 65535 & D | W << 16, xe += 128, _e -= 128
                }
                return xe
            }
            $.hash = function we(Re) {
                var ae = new be;
                ae.update(Re);
                var le = ae.digest();
                return ae.clean(), le
            }
        },
        7263: (He, $) => {
            "use strict";

            function ie() {
                return (null == global ? void 0 : global.crypto) || (null == global ? void 0 : global.msCrypto) || {}
            }

            function v() {
                const be = ie();
                return be.subtle || be.webkitSubtle
            }
            Object.defineProperty($, "__esModule", {
                value: !0
            }), $.isBrowserCryptoAvailable = $.getSubtleCrypto = $.getBrowerCrypto = void 0, $.getBrowerCrypto = ie, $.getSubtleCrypto = v, $.isBrowserCryptoAvailable = function ye() {
                return !!ie() && !!v()
            }
        },
        4574: (He, $) => {
            "use strict";

            function ie() {
                return typeof document > "u" && typeof navigator < "u" && "ReactNative" === navigator.product
            }

            function v() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }
            Object.defineProperty($, "__esModule", {
                value: !0
            }), $.isBrowser = $.isNode = $.isReactNative = void 0, $.isReactNative = ie, $.isNode = v, $.isBrowser = function ye() {
                return !ie() && !v()
            }
        },
        2299: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            });
            const v = ie(4308);
            v.__exportStar(ie(7263), $), v.__exportStar(ie(4574), $)
        },
        8190: (He, $, ie) => {
            "use strict";
            ie.r($), ie.d($, {
                EthereumProvider: () => cy,
                OPTIONAL_EVENTS: () => ku,
                OPTIONAL_METHODS: () => Vu,
                REQUIRED_EVENTS: () => Ms,
                REQUIRED_METHODS: () => Fs,
                default: () => zs
            });
            var v = ie(5861),
                ye = ie(2016),
                be = ie.n(ye),
                m = ie(4778);
            const te = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                we = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                Re = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function ae(f, r) {
                if (!("__proto__" === f || "constructor" === f && r && "object" == typeof r && "prototype" in r)) return r;
                ! function le(f) {
                    console.warn(`[destr] Dropping "${f}" key to prevent prototype pollution.`)
                }(f)
            }

            function fe(f, r = {}) {
                if ("string" != typeof f) return f;
                const t = f.trim();
                if ('"' === f[0] && f.endsWith('"') && !f.includes("\\")) return t.slice(1, -1);
                if (t.length <= 9) {
                    const o = t.toLowerCase();
                    if ("true" === o) return !0;
                    if ("false" === o) return !1;
                    if ("undefined" === o) return;
                    if ("null" === o) return null;
                    if ("nan" === o) return Number.NaN;
                    if ("infinity" === o) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === o) return Number.NEGATIVE_INFINITY
                }
                if (!Re.test(f)) {
                    if (r.strict) throw new SyntaxError("[destr] Invalid JSON");
                    return f
                }
                try {
                    if (te.test(f) || we.test(f)) {
                        if (r.strict) throw new Error("[destr] Possible prototype pollution");
                        return JSON.parse(f, ae)
                    }
                    return JSON.parse(f)
                } catch (o) {
                    if (r.strict) throw o;
                    return f
                }
            }

            function _e(f, ...r) {
                try {
                    return function xe(f) {
                        return f && "function" == typeof f.then ? f : Promise.resolve(f)
                    }(f(...r))
                } catch (t) {
                    return Promise.reject(t)
                }
            }

            function Ue(f) {
                if (function de(f) {
                        const r = typeof f;
                        return null === f || "object" !== r && "function" !== r
                    }(f)) return String(f);
                if (function et(f) {
                        const r = Object.getPrototypeOf(f);
                        return !r || r.isPrototypeOf(Object)
                    }(f) || Array.isArray(f)) return JSON.stringify(f);
                if ("function" == typeof f.toJSON) return Ue(f.toJSON());
                throw new Error("[unstorage] Cannot stringify value!")
            }

            function We() {
                if (void 0 === typeof Buffer) throw new TypeError("[unstorage] Buffer is not supported!")
            }
            const Je = "base64:";

            function Z(f) {
                return f ? f.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function J(...f) {
                return Z(f.join(":"))
            }

            function y(f) {
                return (f = Z(f)) ? f + ":" : ""
            }
            const A = () => {
                const f = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: r => f.has(r),
                    getItem: r => f.get(r) ? ? null,
                    getItemRaw: r => f.get(r) ? ? null,
                    setItem(r, t) {
                        f.set(r, t)
                    },
                    setItemRaw(r, t) {
                        f.set(r, t)
                    },
                    removeItem(r) {
                        f.delete(r)
                    },
                    getKeys: () => Array.from(f.keys()),
                    clear() {
                        f.clear()
                    },
                    dispose() {
                        f.clear()
                    }
                }
            };

            function D(f, r, t) {
                return f.watch ? f.watch((o, a) => r(o, t + a)) : () => {}
            }

            function W(f) {
                return se.apply(this, arguments)
            }

            function se() {
                return (se = (0, v.Z)(function*(f) {
                    "function" == typeof f.dispose && (yield _e(f.dispose))
                })).apply(this, arguments)
            }

            function Pe(f) {
                return new Promise((r, t) => {
                    f.oncomplete = f.onsuccess = () => r(f.result), f.onabort = f.onerror = () => t(f.error)
                })
            }

            function ke(f, r) {
                const t = indexedDB.open(f);
                t.onupgradeneeded = () => t.result.createObjectStore(r);
                const o = Pe(t);
                return (a, u) => o.then(h => u(h.transaction(r, a).objectStore(r)))
            }
            let Me;

            function Zt() {
                return Me || (Me = ke("keyval-store", "keyval")), Me
            }

            function tn(f, r = Zt()) {
                return r("readonly", t => Pe(t.get(f)))
            }
            const lt = f => JSON.stringify(f, (r, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                Jt = f => {
                    const t = f.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(t, (o, a) => "string" == typeof a && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a)
                };

            function Tt(f) {
                if ("string" != typeof f) throw new Error("Cannot safe json parse value of type " + typeof f);
                try {
                    return Jt(f)
                } catch {
                    return f
                }
            }

            function wt(f) {
                return "string" == typeof f ? f : lt(f) || ""
            }
            var Dt = (f = {}) => {
                const r = f.base && f.base.length > 0 ? `${f.base}:` : "",
                    t = a => r + a;
                let o;
                return f.dbName && f.storeName && (o = ke(f.dbName, f.storeName)), {
                    name: "idb-keyval",
                    options: f,
                    hasItem: a => (0, v.Z)(function*() {
                        return !(typeof(yield tn(t(a), o)) > "u")
                    })(),
                    getItem: a => (0, v.Z)(function*() {
                        return (yield tn(t(a), o)) ? ? null
                    })(),
                    setItem: (a, u) => function vt(f, r, t = Zt()) {
                        return t("readwrite", o => (o.put(r, f), Pe(o.transaction)))
                    }(t(a), u, o),
                    removeItem: a => function d(f, r = Zt()) {
                        return r("readwrite", t => (t.delete(f), Pe(t.transaction)))
                    }(t(a), o),
                    getKeys: () => function nt(f = Zt()) {
                        return f("readonly", r => {
                            if (r.getAllKeys) return Pe(r.getAllKeys());
                            const t = [];
                            return function Fe(f, r) {
                                return f.openCursor().onsuccess = function() {
                                    this.result && (r(this.result), this.result.continue())
                                }, Pe(f.transaction)
                            }(r, o => t.push(o.key)).then(() => t)
                        })
                    }(o),
                    clear: () => function Oe(f = Zt()) {
                        return f("readwrite", r => (r.clear(), Pe(r.transaction)))
                    }(o)
                }
            };
            class dt {
                constructor() {
                    this.indexedDb = function w(f = {}) {
                        const r = {
                                mounts: {
                                    "": f.driver || A()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            t = O => {
                                for (const N of r.mountpoints)
                                    if (O.startsWith(N)) return {
                                        base: N,
                                        relativeKey: O.slice(N.length),
                                        driver: r.mounts[N]
                                    };
                                return {
                                    base: "",
                                    relativeKey: O,
                                    driver: r.mounts[""]
                                }
                            },
                            o = (O, N) => r.mountpoints.filter(H => H.startsWith(O) || N && O.startsWith(H)).map(H => ({
                                relativeBase: O.length > H.length ? O.slice(H.length) : void 0,
                                mountpoint: H,
                                driver: r.mounts[H]
                            })),
                            a = (O, N) => {
                                if (r.watching) {
                                    N = Z(N);
                                    for (const H of r.watchListeners) H(O, N)
                                }
                            },
                            u = function() {
                                var O = (0, v.Z)(function*() {
                                    if (!r.watching) {
                                        r.watching = !0;
                                        for (const N in r.mounts) r.unwatch[N] = yield D(r.mounts[N], a, N)
                                    }
                                });
                                return function() {
                                    return O.apply(this, arguments)
                                }
                            }(),
                            h = function() {
                                var O = (0, v.Z)(function*() {
                                    if (r.watching) {
                                        for (const N in r.unwatch) yield r.unwatch[N]();
                                        r.unwatch = {}, r.watching = !1
                                    }
                                });
                                return function() {
                                    return O.apply(this, arguments)
                                }
                            }(),
                            b = (O, N, H) => {
                                const Q = new Map,
                                    ge = ue => {
                                        let Ne = Q.get(ue.base);
                                        return Ne || (Ne = {
                                            driver: ue.driver,
                                            base: ue.base,
                                            items: []
                                        }, Q.set(ue.base, Ne)), Ne
                                    };
                                for (const ue of O) {
                                    const Ne = "string" == typeof ue,
                                        Be = Z(Ne ? ue : ue.key),
                                        tt = Ne ? void 0 : ue.value,
                                        Kt = Ne || !ue.options ? N : { ...N,
                                            ...ue.options
                                        },
                                        ct = t(Be);
                                    ge(ct).items.push({
                                        key: Be,
                                        value: tt,
                                        relativeKey: ct.relativeKey,
                                        options: Kt
                                    })
                                }
                                return Promise.all([...Q.values()].map(ue => H(ue))).then(ue => ue.flat())
                            },
                            C = {
                                hasItem(O, N = {}) {
                                    O = Z(O);
                                    const {
                                        relativeKey: H,
                                        driver: Q
                                    } = t(O);
                                    return _e(Q.hasItem, H, N)
                                },
                                getItem(O, N = {}) {
                                    O = Z(O);
                                    const {
                                        relativeKey: H,
                                        driver: Q
                                    } = t(O);
                                    return _e(Q.getItem, H, N).then(ge => fe(ge))
                                },
                                getItems: (O, N) => b(O, N, H => H.driver.getItems ? _e(H.driver.getItems, H.items.map(Q => ({
                                    key: Q.relativeKey,
                                    options: Q.options
                                })), N).then(Q => Q.map(ge => ({
                                    key: J(H.base, ge.key),
                                    value: fe(ge.value)
                                }))) : Promise.all(H.items.map(Q => _e(H.driver.getItem, Q.relativeKey, Q.options).then(ge => ({
                                    key: Q.key,
                                    value: fe(ge)
                                }))))),
                                getItemRaw(O, N = {}) {
                                    O = Z(O);
                                    const {
                                        relativeKey: H,
                                        driver: Q
                                    } = t(O);
                                    return Q.getItemRaw ? _e(Q.getItemRaw, H, N) : _e(Q.getItem, H, N).then(ge => function re(f) {
                                        return "string" == typeof f && f.startsWith(Je) ? (We(), Buffer.from(f.slice(7), "base64")) : f
                                    }(ge))
                                },
                                setItem: (O, N, H = {}) => (0, v.Z)(function*() {
                                    if (void 0 === N) return C.removeItem(O);
                                    O = Z(O);
                                    const {
                                        relativeKey: Q,
                                        driver: ge
                                    } = t(O);
                                    ge.setItem && (yield _e(ge.setItem, Q, Ue(N), H), ge.watch || a("update", O))
                                })(),
                                setItems: (O, N) => (0, v.Z)(function*() {
                                    yield b(O, N, function() {
                                        var H = (0, v.Z)(function*(Q) {
                                            Q.driver.setItems && (yield _e(Q.driver.setItems, Q.items.map(ge => ({
                                                key: ge.relativeKey,
                                                value: Ue(ge.value),
                                                options: ge.options
                                            })), N)), Q.driver.setItem && (yield Promise.all(Q.items.map(ge => _e(Q.driver.setItem, ge.relativeKey, Ue(ge.value), ge.options))))
                                        });
                                        return function(Q) {
                                            return H.apply(this, arguments)
                                        }
                                    }())
                                })(),
                                setItemRaw: (O, N, H = {}) => (0, v.Z)(function*() {
                                    if (void 0 === N) return C.removeItem(O, H);
                                    O = Z(O);
                                    const {
                                        relativeKey: Q,
                                        driver: ge
                                    } = t(O);
                                    if (ge.setItemRaw) yield _e(ge.setItemRaw, Q, N, H);
                                    else {
                                        if (!ge.setItem) return;
                                        yield _e(ge.setItem, Q, function ce(f) {
                                            if ("string" == typeof f) return f;
                                            We();
                                            const r = Buffer.from(f).toString("base64");
                                            return Je + r
                                        }(N), H)
                                    }
                                    ge.watch || a("update", O)
                                })(),
                                removeItem: (O, N = {}) => (0, v.Z)(function*() {
                                    "boolean" == typeof N && (N = {
                                        removeMeta: N
                                    }), O = Z(O);
                                    const {
                                        relativeKey: H,
                                        driver: Q
                                    } = t(O);
                                    Q.removeItem && (yield _e(Q.removeItem, H, N), (N.removeMeta || N.removeMata) && (yield _e(Q.removeItem, H + "$", N)), Q.watch || a("remove", O))
                                })(),
                                getMeta: (O, N = {}) => (0, v.Z)(function*() {
                                    "boolean" == typeof N && (N = {
                                        nativeOnly: N
                                    }), O = Z(O);
                                    const {
                                        relativeKey: H,
                                        driver: Q
                                    } = t(O), ge = Object.create(null);
                                    if (Q.getMeta && Object.assign(ge, yield _e(Q.getMeta, H, N)), !N.nativeOnly) {
                                        const ue = yield _e(Q.getItem, H + "$", N).then(Ne => fe(Ne));
                                        ue && "object" == typeof ue && ("string" == typeof ue.atime && (ue.atime = new Date(ue.atime)), "string" == typeof ue.mtime && (ue.mtime = new Date(ue.mtime)), Object.assign(ge, ue))
                                    }
                                    return ge
                                })(),
                                setMeta(O, N, H = {}) {
                                    return this.setItem(O + "$", N, H)
                                },
                                removeMeta(O, N = {}) {
                                    return this.removeItem(O + "$", N)
                                },
                                getKeys: (O, N = {}) => (0, v.Z)(function*() {
                                    O = y(O);
                                    const H = o(O, !0);
                                    let Q = [];
                                    const ge = [];
                                    for (const ue of H) {
                                        const Be = (yield _e(ue.driver.getKeys, ue.relativeBase, N)).map(tt => ue.mountpoint + Z(tt)).filter(tt => !Q.some(Kt => tt.startsWith(Kt)));
                                        ge.push(...Be), Q = [ue.mountpoint, ...Q.filter(tt => !tt.startsWith(ue.mountpoint))]
                                    }
                                    return ge.filter(O ? ue => ue.startsWith(O) && !ue.endsWith("$") : ue => !ue.endsWith("$"))
                                })(),
                                clear: (O, N = {}) => (0, v.Z)(function*() {
                                    O = y(O), yield Promise.all(o(O, !1).map(function() {
                                        var H = (0, v.Z)(function*(Q) {
                                            if (Q.driver.clear) return _e(Q.driver.clear, Q.relativeBase, N);
                                            if (Q.driver.removeItem) {
                                                const ge = yield Q.driver.getKeys(Q.relativeBase || "", N);
                                                return Promise.all(ge.map(ue => Q.driver.removeItem(ue, N)))
                                            }
                                        });
                                        return function(Q) {
                                            return H.apply(this, arguments)
                                        }
                                    }()))
                                })(),
                                dispose: () => (0, v.Z)(function*() {
                                    yield Promise.all(Object.values(r.mounts).map(O => W(O)))
                                })(),
                                watch: O => (0, v.Z)(function*() {
                                    return yield u(), r.watchListeners.push(O), (0, v.Z)(function*() {
                                        r.watchListeners = r.watchListeners.filter(N => N !== O), 0 === r.watchListeners.length && (yield h())
                                    })
                                })(),
                                unwatch: () => (0, v.Z)(function*() {
                                    r.watchListeners = [], yield h()
                                })(),
                                mount(O, N) {
                                    if ((O = y(O)) && r.mounts[O]) throw new Error(`already mounted at ${O}`);
                                    return O && (r.mountpoints.push(O), r.mountpoints.sort((H, Q) => Q.length - H.length)), r.mounts[O] = N, r.watching && Promise.resolve(D(N, a, O)).then(H => {
                                        r.unwatch[O] = H
                                    }).catch(console.error), C
                                },
                                unmount: (O, N = !0) => (0, v.Z)(function*() {
                                    (O = y(O)) && r.mounts[O] && (r.watching && O in r.unwatch && (r.unwatch[O](), delete r.unwatch[O]), N && (yield W(r.mounts[O])), r.mountpoints = r.mountpoints.filter(H => H !== O), delete r.mounts[O])
                                })(),
                                getMount(O = "") {
                                    O = Z(O) + ":";
                                    const N = t(O);
                                    return {
                                        driver: N.driver,
                                        base: N.base
                                    }
                                },
                                getMounts: (O = "", N = {}) => (O = Z(O), o(O, N.parents).map(Q => ({
                                    driver: Q.driver,
                                    base: Q.mountpoint
                                })))
                            };
                        return C
                    }({
                        driver: Dt({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                getKeys() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return r.indexedDb.getKeys()
                    })()
                }
                getEntries() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return (yield r.indexedDb.getItems(yield r.indexedDb.getKeys())).map(t => [t.key, t.value])
                    })()
                }
                getItem(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        const o = yield t.indexedDb.getItem(r);
                        if (null !== o) return o
                    })()
                }
                setItem(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        yield o.indexedDb.setItem(r, wt(t))
                    })()
                }
                removeItem(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.indexedDb.removeItem(r)
                    })()
                }
            }
            var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                rt = {
                    exports: {}
                };

            function Qt(f) {
                var r;
                return [f[0], Tt(null != (r = f[1]) ? r : "")]
            }! function() {
                let f;

                function r() {}
                f = r, f.prototype.getItem = function(t) {
                    return this.hasOwnProperty(t) ? String(this[t]) : null
                }, f.prototype.setItem = function(t, o) {
                    this[t] = String(o)
                }, f.prototype.removeItem = function(t) {
                    delete this[t]
                }, f.prototype.clear = function() {
                    const t = this;
                    Object.keys(t).forEach(function(o) {
                        t[o] = void 0, delete t[o]
                    })
                }, f.prototype.key = function(t) {
                    return t = t || 0, Object.keys(this)[t]
                }, f.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), rt.exports = typeof ft < "u" && ft.localStorage ? ft.localStorage : typeof window < "u" && window.localStorage ? window.localStorage : new r
            }();
            class sr {
                constructor() {
                    this.localStorage = rt.exports
                }
                getKeys() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return Object.keys(r.localStorage)
                    })()
                }
                getEntries() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return Object.entries(r.localStorage).map(Qt)
                    })()
                }
                getItem(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        const o = t.localStorage.getItem(r);
                        if (null !== o) return Tt(o)
                    })()
                }
                setItem(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        o.localStorage.setItem(r, wt(t))
                    })()
                }
                removeItem(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        t.localStorage.removeItem(r)
                    })()
                }
            }
            const dr = function() {
                    var f = (0, v.Z)(function*(r, t, o) {
                        const a = "wc_storage_version",
                            u = yield t.getItem(a);
                        if (u && u >= 1) return void o(t);
                        const h = yield r.getKeys();
                        if (!h.length) return void o(t);
                        const b = [];
                        for (; h.length;) {
                            const C = h.shift();
                            if (!C) continue;
                            const O = C.toLowerCase();
                            if (O.includes("wc@") || O.includes("walletconnect") || O.includes("wc_") || O.includes("wallet_connect")) {
                                const N = yield r.getItem(C);
                                yield t.setItem(C, N), b.push(C)
                            }
                        }
                        yield t.setItem(a, 1), o(t), Sr(r, b)
                    });
                    return function(t, o, a) {
                        return f.apply(this, arguments)
                    }
                }(),
                Sr = function() {
                    var f = (0, v.Z)(function*(r, t) {
                        t.length && t.forEach(function() {
                            var o = (0, v.Z)(function*(a) {
                                yield r.removeItem(a)
                            });
                            return function(a) {
                                return o.apply(this, arguments)
                            }
                        }())
                    });
                    return function(t, o) {
                        return f.apply(this, arguments)
                    }
                }();
            class Tr {
                constructor() {
                    this.initialized = !1, this.setInitialized = t => {
                        this.storage = t, this.initialized = !0
                    };
                    const r = new sr;
                    this.storage = r;
                    try {
                        const t = new dt;
                        dr(r, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                getKeys() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return yield r.initialize(), r.storage.getKeys()
                    })()
                }
                getEntries() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return yield r.initialize(), r.storage.getEntries()
                    })()
                }
                getItem(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        return yield t.initialize(), t.storage.getItem(r)
                    })()
                }
                setItem(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        return yield o.initialize(), o.storage.setItem(r, t)
                    })()
                }
                removeItem(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        return yield t.initialize(), t.storage.removeItem(r)
                    })()
                }
                initialize() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.initialized || (yield new Promise(t => {
                            const o = setInterval(() => {
                                r.initialized && (clearInterval(o), t())
                            }, 20)
                        }))
                    })()
                }
            }
            var br = ie(986),
                Te = ie(2997),
                wr = ie(2108);
            class _n extends wr.q {
                constructor(r) {
                    super(), this.opts = r, this.protocol = "wc", this.version = 2
                }
            }
            class mn extends wr.q {
                constructor(r, t) {
                    super(), this.core = r, this.logger = t, this.records = new Map
                }
            }
            class fn {
                constructor(r, t) {
                    this.logger = r, this.core = t
                }
            }
            class Nt extends wr.q {
                constructor(r, t) {
                    super(), this.relayer = r, this.logger = t
                }
            }
            class Lt extends wr.q {
                constructor(r) {
                    super()
                }
            }
            class jt {
                constructor(r, t, o, a) {
                    this.core = r, this.logger = t, this.name = o
                }
            }
            class Yt extends wr.q {
                constructor(r, t) {
                    super(), this.relayer = r, this.logger = t
                }
            }
            class Xt extends wr.q {
                constructor(r, t) {
                    super(), this.core = r, this.logger = t
                }
            }
            class er {
                constructor(r, t) {
                    this.projectId = r, this.logger = t
                }
            }
            class qt {
                constructor(r, t) {
                    this.projectId = r, this.logger = t
                }
            }
            class _t {
                constructor(r) {
                    this.opts = r, this.protocol = "wc", this.version = 2
                }
            }
            class tr {
                constructor(r) {
                    this.client = r
                }
            }
            var $t = ie(5972),
                rr = ie(5465),
                Ae = ie(5409);
            const ws = "base64url",
                jo = "utf8",
                bn = ":",
                Mo = "did",
                Zo = "key",
                xs = "base58btc",
                zo = "z",
                qo = "K36";
            var $o = ie(1376),
                Hr = ie(878),
                Ui = ie(2269);

            function di(f) {
                return (0, Hr.B)((0, Ui.m)(wt(f), jo), ws)
            }

            function Es(f) {
                const r = (0, Ui.m)(qo, xs),
                    t = zo + (0, Hr.B)((0, $o.z)([r, f]), xs);
                return [Mo, Zo, t].join(bn)
            }

            function Ho(f) {
                return (0, Hr.B)(f, ws)
            }

            function Ps(f = (0, rr.randomBytes)(32)) {
                return $t._w(f)
            }

            function $i() {
                return ($i = (0, v.Z)(function*(f, r, t, o, a = (0, Ae.fromMiliseconds)(Date.now())) {
                    const u = {
                            alg: "EdDSA",
                            typ: "JWT"
                        },
                        C = {
                            iss: Es(o.publicKey),
                            sub: f,
                            aud: r,
                            iat: a,
                            exp: a + t
                        },
                        O = function Bo(f) {
                            return (0, Ui.m)([di(f.header), di(f.payload)].join("."), "utf8")
                        }({
                            header: u,
                            payload: C
                        });
                    return function Is(f) {
                        return [di(f.header), di(f.payload), Ho(f.signature)].join(".")
                    }({
                        header: u,
                        payload: C,
                        signature: $t.Xx(o.secretKey, O)
                    })
                })).apply(this, arguments)
            }
            ie(2768);
            var ko = ie(3544);
            const Os = "INTERNAL_ERROR",
                Br = "SERVER_ERROR",
                Wo = [-32700, -32600, -32601, -32602, -32603],
                Qn = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [Os]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [Br]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                Rs = Br;

            function Cs(f) {
                return Object.keys(Qn).includes(f) ? Qn[f] : Qn[Rs]
            }

            function _i(f, r, t) {
                return f.message.includes("getaddrinfo ENOTFOUND") || f.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${r}`) : f
            }
            var Jo = ie(2299);

            function mi(f = 3) {
                return Date.now() * Math.pow(10, f) + Math.floor(Math.random() * Math.pow(10, f))
            }

            function Hi(f = 6) {
                return BigInt(mi(f))
            }

            function Kr(f, r, t) {
                return {
                    id: t || mi(),
                    jsonrpc: "2.0",
                    method: f,
                    params: r
                }
            }

            function Xn(f, r) {
                return {
                    id: f,
                    jsonrpc: "2.0",
                    result: r
                }
            }

            function bi(f, r, t) {
                return {
                    id: f,
                    jsonrpc: "2.0",
                    error: Yo(r, t)
                }
            }

            function Yo(f, r) {
                return typeof f > "u" ? Cs(Os) : ("string" == typeof f && (f = Object.assign(Object.assign({}, Cs(Br)), {
                    message: f
                })), typeof r < "u" && (f.data = r), function hn(f) {
                    return Wo.includes(f)
                }(f.code) && (f = function Yn(f) {
                    return Object.values(Qn).find(t => t.code === f) || Qn[Rs]
                }(f.code)), f)
            }
            class Xo {}
            class j extends Xo {
                constructor() {
                    super()
                }
            }
            class ne extends j {
                constructor(r) {
                    super()
                }
            }

            function xt(f, r) {
                const t = function ze(f) {
                    const r = f.match(new RegExp(/^\w+:/, "gi"));
                    if (r && r.length) return r[0]
                }(f);
                return !(typeof t > "u") && new RegExp(r).test(t)
            }

            function Ht(f) {
                return xt(f, "^https?:")
            }

            function nr(f) {
                return xt(f, "^wss?:")
            }

            function xr(f) {
                return "object" == typeof f && "id" in f && "jsonrpc" in f && "2.0" === f.jsonrpc
            }

            function Or(f) {
                return xr(f) && "method" in f
            }

            function Bt(f) {
                return xr(f) && (Ft(f) || Pt(f))
            }

            function Ft(f) {
                return "result" in f
            }

            function Pt(f) {
                return "error" in f
            }
            class ur extends ne {
                constructor(r) {
                    super(r), this.events = new ye.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(r), this.connection.connected && this.registerEventListeners()
                }
                connect(r = this.connection) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.open(r)
                    })()
                }
                disconnect() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        yield r.close()
                    })()
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                request(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        return o.requestStrict(Kr(r.method, r.params || [], r.id || Hi().toString()), t)
                    })()
                }
                requestStrict(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        return new Promise(function() {
                            var a = (0, v.Z)(function*(u, h) {
                                if (!o.connection.connected) try {
                                    yield o.open()
                                } catch (b) {
                                    h(b)
                                }
                                o.events.on(`${r.id}`, b => {
                                    Pt(b) ? h(b.error) : u(b.result)
                                });
                                try {
                                    yield o.connection.send(r, t)
                                } catch (b) {
                                    h(b)
                                }
                            });
                            return function(u, h) {
                                return a.apply(this, arguments)
                            }
                        }())
                    })()
                }
                setConnection(r = this.connection) {
                    return r
                }
                onPayload(r) {
                    this.events.emit("payload", r), Bt(r) ? this.events.emit(`${r.id}`, r) : this.events.emit("message", {
                        type: r.method,
                        data: r.params
                    })
                }
                onClose(r) {
                    r && 3e3 === r.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${r.code} ${r.reason?`(${r.reason})`:""}`)), this.events.emit("disconnect")
                }
                open(r = this.connection) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        t.connection === r && t.connection.connected || (t.connection.connected && t.close(), "string" == typeof r && (yield t.connection.open(r), r = t.connection), t.connection = t.setConnection(r), yield t.connection.open(), t.registerEventListeners(), t.events.emit("connect"))
                    })()
                }
                close() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        yield r.connection.close()
                    })()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", r => this.onPayload(r)), this.connection.on("close", r => this.onClose(r)), this.connection.on("error", r => this.events.emit("error", r)), this.connection.on("register_error", r => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            const Vc = f => f.split("?")[0],
                Ch = typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : ie(3569);
            class Th {
                constructor(r) {
                    if (this.url = r, this.events = new ye.EventEmitter, this.registering = !1, !nr(r)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${r}`);
                    this.url = r
                }
                get connected() {
                    return typeof this.socket < "u"
                }
                get connecting() {
                    return this.registering
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                open(r = this.url) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.register(r)
                    })()
                }
                close() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return new Promise((t, o) => {
                            typeof r.socket > "u" ? o(new Error("Connection already closed")) : (r.socket.onclose = a => {
                                r.onClose(a), t()
                            }, r.socket.close())
                        })
                    })()
                }
                send(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        typeof t.socket > "u" && (t.socket = yield t.register());
                        try {
                            t.socket.send(wt(r))
                        } catch (o) {
                            t.onError(r.id, o)
                        }
                    })()
                }
                register(r = this.url) {
                    if (!nr(r)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${r}`);
                    if (this.registering) {
                        const t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((o, a) => {
                            this.events.once("register_error", u => {
                                this.resetMaxListeners(), a(u)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return a(new Error("WebSocket connection is missing or invalid"));
                                o(this.socket)
                            })
                        })
                    }
                    return this.url = r, this.registering = !0, new Promise((t, o) => {
                        const a = new URLSearchParams(r).get("origin"),
                            u = (0, Jo.isReactNative)() ? {
                                headers: {
                                    origin: a
                                }
                            } : {
                                rejectUnauthorized: (f = r, !new RegExp("wss?://localhost(:d{2,5})?").test(f))
                            },
                            h = new Ch(r, [], u);
                        var f;
                        typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? h.onerror = b => {
                            o(this.emitError(b.error))
                        } : h.on("error", b => {
                            o(this.emitError(b))
                        }), h.onopen = () => {
                            this.onOpen(h), t(h)
                        }
                    })
                }
                onOpen(r) {
                    r.onmessage = t => this.onPayload(t), r.onclose = t => this.onClose(t), this.socket = r, this.registering = !1, this.events.emit("open")
                }
                onClose(r) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", r)
                }
                onPayload(r) {
                    if (typeof r.data > "u") return;
                    const t = "string" == typeof r.data ? Tt(r.data) : r.data;
                    this.events.emit("payload", t)
                }
                onError(r, t) {
                    const o = this.parseError(t),
                        u = bi(r, o.message || o.toString());
                    this.events.emit("payload", u)
                }
                parseError(r, t = this.url) {
                    return _i(r, Vc(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(r) {
                    const t = this.parseError(new Error(r ? .message || `WebSocket connection failed for host: ${Vc(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var Dh = ie(2650),
                Nh = ie.n(Dh),
                Lh = ie(9557),
                jh = ie.n(Lh),
                Zh = function Fh(f, r) {
                    if (f.length >= 255) throw new TypeError("Alphabet too long");
                    for (var t = new Uint8Array(256), o = 0; o < t.length; o++) t[o] = 255;
                    for (var a = 0; a < f.length; a++) {
                        var u = f.charAt(a),
                            h = u.charCodeAt(0);
                        if (255 !== t[h]) throw new TypeError(u + " is ambiguous");
                        t[h] = a
                    }
                    var b = f.length,
                        C = f.charAt(0),
                        O = Math.log(b) / Math.log(256),
                        N = Math.log(256) / Math.log(b);

                    function Q(ue) {
                        if ("string" != typeof ue) throw new TypeError("Expected String");
                        if (0 === ue.length) return new Uint8Array;
                        var Ne = 0;
                        if (" " !== ue[Ne]) {
                            for (var Be = 0, tt = 0; ue[Ne] === C;) Be++, Ne++;
                            for (var Kt = (ue.length - Ne) * O + 1 >>> 0, ct = new Uint8Array(Kt); ue[Ne];) {
                                var Vt = t[ue.charCodeAt(Ne)];
                                if (255 === Vt) return;
                                for (var gt = 0, kt = Kt - 1;
                                    (0 !== Vt || gt < tt) && -1 !== kt; kt--, gt++) ct[kt] = (Vt += b * ct[kt] >>> 0) % 256 >>> 0, Vt = Vt / 256 >>> 0;
                                if (0 !== Vt) throw new Error("Non-zero carry");
                                tt = gt, Ne++
                            }
                            if (" " !== ue[Ne]) {
                                for (var it = Kt - tt; it !== Kt && 0 === ct[it];) it++;
                                for (var pr = new Uint8Array(Be + (Kt - it)), zn = Be; it !== Kt;) pr[zn++] = ct[it++];
                                return pr
                            }
                        }
                    }
                    return {
                        encode: function H(ue) {
                            if (ue instanceof Uint8Array || (ArrayBuffer.isView(ue) ? ue = new Uint8Array(ue.buffer, ue.byteOffset, ue.byteLength) : Array.isArray(ue) && (ue = Uint8Array.from(ue))), !(ue instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === ue.length) return "";
                            for (var Ne = 0, Be = 0, tt = 0, Kt = ue.length; tt !== Kt && 0 === ue[tt];) tt++, Ne++;
                            for (var ct = (Kt - tt) * N + 1 >>> 0, Vt = new Uint8Array(ct); tt !== Kt;) {
                                for (var gt = ue[tt], kt = 0, it = ct - 1;
                                    (0 !== gt || kt < Be) && -1 !== it; it--, kt++) Vt[it] = (gt += 256 * Vt[it] >>> 0) % b >>> 0, gt = gt / b >>> 0;
                                if (0 !== gt) throw new Error("Non-zero carry");
                                Be = kt, tt++
                            }
                            for (var pr = ct - Be; pr !== ct && 0 === Vt[pr];) pr++;
                            for (var zn = C.repeat(Ne); pr < ct; ++pr) zn += f.charAt(Vt[pr]);
                            return zn
                        },
                        decodeUnsafe: Q,
                        decode: function ge(ue) {
                            var Ne = Q(ue);
                            if (Ne) return Ne;
                            throw new Error(`Non-${r} character`)
                        }
                    }
                };
            const Gc = f => {
                if (f instanceof Uint8Array && "Uint8Array" === f.constructor.name) return f;
                if (f instanceof ArrayBuffer) return new Uint8Array(f);
                if (ArrayBuffer.isView(f)) return new Uint8Array(f.buffer, f.byteOffset, f.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class Uh {
                constructor(r, t, o) {
                    this.name = r, this.prefix = t, this.baseEncode = o
                }
                encode(r) {
                    if (r instanceof Uint8Array) return `${this.prefix}${this.baseEncode(r)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class $h {
                constructor(r, t, o) {
                    if (this.name = r, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = o
                }
                decode(r) {
                    if ("string" == typeof r) {
                        if (r.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(r)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(r.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(r) {
                    return Wc(this, r)
                }
            }
            class Hh {
                constructor(r) {
                    this.decoders = r
                }
                or(r) {
                    return Wc(this, r)
                }
                decode(r) {
                    const o = this.decoders[r[0]];
                    if (o) return o.decode(r);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(r)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const Wc = (f, r) => new Hh({ ...f.decoders || {
                    [f.prefix]: f
                },
                ...r.decoders || {
                    [r.prefix]: r
                }
            });
            class Bh {
                constructor(r, t, o, a) {
                    this.name = r, this.prefix = t, this.baseEncode = o, this.baseDecode = a, this.encoder = new Uh(r, t, o), this.decoder = new $h(r, t, a)
                }
                encode(r) {
                    return this.encoder.encode(r)
                }
                decode(r) {
                    return this.decoder.decode(r)
                }
            }
            const Ts = ({
                    name: f,
                    prefix: r,
                    encode: t,
                    decode: o
                }) => new Bh(f, r, t, o),
                Bi = ({
                    prefix: f,
                    name: r,
                    alphabet: t
                }) => {
                    const {
                        encode: o,
                        decode: a
                    } = Zh(t, r);
                    return Ts({
                        prefix: f,
                        name: r,
                        encode: o,
                        decode: u => Gc(a(u))
                    })
                },
                vr = ({
                    name: f,
                    prefix: r,
                    bitsPerChar: t,
                    alphabet: o
                }) => Ts({
                    prefix: r,
                    name: f,
                    encode: a => ((f, r, t) => {
                        const o = "=" === r[r.length - 1],
                            a = (1 << t) - 1;
                        let u = "",
                            h = 0,
                            b = 0;
                        for (let C = 0; C < f.length; ++C)
                            for (b = b << 8 | f[C], h += 8; h > t;) h -= t, u += r[a & b >> h];
                        if (h && (u += r[a & b << t - h]), o)
                            for (; u.length * t & 7;) u += "=";
                        return u
                    })(a, o, t),
                    decode: a => ((f, r, t, o) => {
                        const a = {};
                        for (let N = 0; N < r.length; ++N) a[r[N]] = N;
                        let u = f.length;
                        for (;
                            "=" === f[u - 1];) --u;
                        const h = new Uint8Array(u * t / 8 | 0);
                        let b = 0,
                            C = 0,
                            O = 0;
                        for (let N = 0; N < u; ++N) {
                            const H = a[f[N]];
                            if (void 0 === H) throw new SyntaxError(`Non-${o} character`);
                            C = C << t | H, b += t, b >= 8 && (b -= 8, h[O++] = 255 & C >> b)
                        }
                        if (b >= t || 255 & C << 8 - b) throw new SyntaxError("Unexpected end of data");
                        return h
                    })(a, o, t, f)
                }),
                kh = Ts({
                    prefix: "\0",
                    name: "identity",
                    encode: f => (f => (new TextDecoder).decode(f))(f),
                    decode: f => (f => (new TextEncoder).encode(f))(f)
                });
            var Gh = Object.freeze({
                __proto__: null,
                identity: kh
            });
            const Wh = vr({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var Jh = Object.freeze({
                __proto__: null,
                base2: Wh
            });
            const Qh = vr({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var Yh = Object.freeze({
                __proto__: null,
                base8: Qh
            });
            const Xh = Bi({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var ed = Object.freeze({
                __proto__: null,
                base10: Xh
            });
            const td = vr({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                rd = vr({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var nd = Object.freeze({
                __proto__: null,
                base16: td,
                base16upper: rd
            });
            const id = vr({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                sd = vr({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                od = vr({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                ad = vr({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                cd = vr({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                ud = vr({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                ld = vr({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                fd = vr({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                hd = vr({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var dd = Object.freeze({
                __proto__: null,
                base32: id,
                base32upper: sd,
                base32pad: od,
                base32padupper: ad,
                base32hex: cd,
                base32hexupper: ud,
                base32hexpad: ld,
                base32hexpadupper: fd,
                base32z: hd
            });
            const pd = Bi({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                gd = Bi({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var yd = Object.freeze({
                __proto__: null,
                base36: pd,
                base36upper: gd
            });
            const vd = Bi({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                _d = Bi({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var md = Object.freeze({
                __proto__: null,
                base58btc: vd,
                base58flickr: _d
            });
            const bd = vr({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                wd = vr({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                xd = vr({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                Ed = vr({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var Id = Object.freeze({
                __proto__: null,
                base64: bd,
                base64pad: wd,
                base64url: xd,
                base64urlpad: Ed
            });
            const Jc = Array.from("\u{1f680}\u{1fa90}\u2604\u{1f6f0}\u{1f30c}\u{1f311}\u{1f312}\u{1f313}\u{1f314}\u{1f315}\u{1f316}\u{1f317}\u{1f318}\u{1f30d}\u{1f30f}\u{1f30e}\u{1f409}\u2600\u{1f4bb}\u{1f5a5}\u{1f4be}\u{1f4bf}\u{1f602}\u2764\u{1f60d}\u{1f923}\u{1f60a}\u{1f64f}\u{1f495}\u{1f62d}\u{1f618}\u{1f44d}\u{1f605}\u{1f44f}\u{1f601}\u{1f525}\u{1f970}\u{1f494}\u{1f496}\u{1f499}\u{1f622}\u{1f914}\u{1f606}\u{1f644}\u{1f4aa}\u{1f609}\u263a\u{1f44c}\u{1f917}\u{1f49c}\u{1f614}\u{1f60e}\u{1f607}\u{1f339}\u{1f926}\u{1f389}\u{1f49e}\u270c\u2728\u{1f937}\u{1f631}\u{1f60c}\u{1f338}\u{1f64c}\u{1f60b}\u{1f497}\u{1f49a}\u{1f60f}\u{1f49b}\u{1f642}\u{1f493}\u{1f929}\u{1f604}\u{1f600}\u{1f5a4}\u{1f603}\u{1f4af}\u{1f648}\u{1f447}\u{1f3b6}\u{1f612}\u{1f92d}\u2763\u{1f61c}\u{1f48b}\u{1f440}\u{1f62a}\u{1f611}\u{1f4a5}\u{1f64b}\u{1f61e}\u{1f629}\u{1f621}\u{1f92a}\u{1f44a}\u{1f973}\u{1f625}\u{1f924}\u{1f449}\u{1f483}\u{1f633}\u270b\u{1f61a}\u{1f61d}\u{1f634}\u{1f31f}\u{1f62c}\u{1f643}\u{1f340}\u{1f337}\u{1f63b}\u{1f613}\u2b50\u2705\u{1f97a}\u{1f308}\u{1f608}\u{1f918}\u{1f4a6}\u2714\u{1f623}\u{1f3c3}\u{1f490}\u2639\u{1f38a}\u{1f498}\u{1f620}\u261d\u{1f615}\u{1f33a}\u{1f382}\u{1f33b}\u{1f610}\u{1f595}\u{1f49d}\u{1f64a}\u{1f639}\u{1f5e3}\u{1f4ab}\u{1f480}\u{1f451}\u{1f3b5}\u{1f91e}\u{1f61b}\u{1f534}\u{1f624}\u{1f33c}\u{1f62b}\u26bd\u{1f919}\u2615\u{1f3c6}\u{1f92b}\u{1f448}\u{1f62e}\u{1f646}\u{1f37b}\u{1f343}\u{1f436}\u{1f481}\u{1f632}\u{1f33f}\u{1f9e1}\u{1f381}\u26a1\u{1f31e}\u{1f388}\u274c\u270a\u{1f44b}\u{1f630}\u{1f928}\u{1f636}\u{1f91d}\u{1f6b6}\u{1f4b0}\u{1f353}\u{1f4a2}\u{1f91f}\u{1f641}\u{1f6a8}\u{1f4a8}\u{1f92c}\u2708\u{1f380}\u{1f37a}\u{1f913}\u{1f619}\u{1f49f}\u{1f331}\u{1f616}\u{1f476}\u{1f974}\u25b6\u27a1\u2753\u{1f48e}\u{1f4b8}\u2b07\u{1f628}\u{1f31a}\u{1f98b}\u{1f637}\u{1f57a}\u26a0\u{1f645}\u{1f61f}\u{1f635}\u{1f44e}\u{1f932}\u{1f920}\u{1f927}\u{1f4cc}\u{1f535}\u{1f485}\u{1f9d0}\u{1f43e}\u{1f352}\u{1f617}\u{1f911}\u{1f30a}\u{1f92f}\u{1f437}\u260e\u{1f4a7}\u{1f62f}\u{1f486}\u{1f446}\u{1f3a4}\u{1f647}\u{1f351}\u2744\u{1f334}\u{1f4a3}\u{1f438}\u{1f48c}\u{1f4cd}\u{1f940}\u{1f922}\u{1f445}\u{1f4a1}\u{1f4a9}\u{1f450}\u{1f4f8}\u{1f47b}\u{1f910}\u{1f92e}\u{1f3bc}\u{1f975}\u{1f6a9}\u{1f34e}\u{1f34a}\u{1f47c}\u{1f48d}\u{1f4e3}\u{1f942}"),
                Pd = Jc.reduce((f, r, t) => (f[t] = r, f), []),
                Sd = Jc.reduce((f, r, t) => (f[r.codePointAt(0)] = t, f), []),
                Ad = Ts({
                    prefix: "\u{1f680}",
                    name: "base256emoji",
                    encode: function Od(f) {
                        return f.reduce((r, t) => r + Pd[t], "")
                    },
                    decode: function Rd(f) {
                        const r = [];
                        for (const t of f) {
                            const o = Sd[t.codePointAt(0)];
                            if (void 0 === o) throw new Error(`Non-base256emoji character: ${t}`);
                            r.push(o)
                        }
                        return new Uint8Array(r)
                    }
                });
            var Cd = Object.freeze({
                    __proto__: null,
                    base256emoji: Ad
                }),
                Qc = 128,
                Nd = -128,
                Ld = Math.pow(2, 31),
                Fd = 128,
                Xc = 127,
                Md = Math.pow(2, 7),
                Zd = Math.pow(2, 14),
                zd = Math.pow(2, 21),
                qd = Math.pow(2, 28),
                Ud = Math.pow(2, 35),
                $d = Math.pow(2, 42),
                Hd = Math.pow(2, 49),
                Bd = Math.pow(2, 56),
                Kd = Math.pow(2, 63),
                kd = {
                    encode: function Yc(f, r, t) {
                        r = r || [];
                        for (var o = t = t || 0; f >= Ld;) r[t++] = 255 & f | Qc, f /= 128;
                        for (; f & Nd;) r[t++] = 255 & f | Qc, f >>>= 7;
                        return r[t] = 0 | f, Yc.bytes = t - o + 1, r
                    },
                    decode: function ta(f, o) {
                        var h, t = 0,
                            a = 0,
                            u = o = o || 0,
                            b = f.length;
                        do {
                            if (u >= b) throw ta.bytes = 0, new RangeError("Could not decode varint");
                            h = f[u++], t += a < 28 ? (h & Xc) << a : (h & Xc) * Math.pow(2, a), a += 7
                        } while (h >= Fd);
                        return ta.bytes = u - o, t
                    },
                    encodingLength: function(f) {
                        return f < Md ? 1 : f < Zd ? 2 : f < zd ? 3 : f < qd ? 4 : f < Ud ? 5 : f < $d ? 6 : f < Hd ? 7 : f < Bd ? 8 : f < Kd ? 9 : 10
                    }
                },
                eu = kd;
            const tu = (f, r, t = 0) => (eu.encode(f, r, t), r),
                ru = f => eu.encodingLength(f),
                ra = (f, r) => {
                    const t = r.byteLength,
                        o = ru(f),
                        a = o + ru(t),
                        u = new Uint8Array(a + t);
                    return tu(f, u, 0), tu(t, u, o), u.set(r, a), new Gd(f, t, r, u)
                };
            class Gd {
                constructor(r, t, o, a) {
                    this.code = r, this.size = t, this.digest = o, this.bytes = a
                }
            }
            const nu = ({
                name: f,
                code: r,
                encode: t
            }) => new Wd(f, r, t);
            class Wd {
                constructor(r, t, o) {
                    this.name = r, this.code = t, this.encode = o
                }
                digest(r) {
                    if (r instanceof Uint8Array) {
                        const t = this.encode(r);
                        return t instanceof Uint8Array ? ra(this.code, t) : t.then(o => ra(this.code, o))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const iu = f => function() {
                    var r = (0, v.Z)(function*(t) {
                        return new Uint8Array(yield crypto.subtle.digest(f, t))
                    });
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                Jd = nu({
                    name: "sha2-256",
                    code: 18,
                    encode: iu("SHA-256")
                }),
                Qd = nu({
                    name: "sha2-512",
                    code: 19,
                    encode: iu("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: Jd,
                sha512: Qd
            });
            const ou = Gc;
            Object.freeze({
                __proto__: null,
                identity: {
                    code: 0,
                    name: "identity",
                    encode: ou,
                    digest: f => ra(0, ou(f))
                }
            }), new TextEncoder, new TextDecoder;
            const au = { ...Gh,
                ...Jh,
                ...Yh,
                ...ed,
                ...nd,
                ...dd,
                ...yd,
                ...md,
                ...Id,
                ...Cd
            };

            function cu(f) {
                return null != globalThis.Buffer ? new Uint8Array(f.buffer, f.byteOffset, f.byteLength) : f
            }

            function uu(f, r, t, o) {
                return {
                    name: f,
                    prefix: r,
                    encoder: {
                        name: f,
                        prefix: r,
                        encode: t
                    },
                    decoder: {
                        decode: o
                    }
                }
            }
            const lu = uu("utf8", "u", f => "u" + new TextDecoder("utf8").decode(f), f => (new TextEncoder).encode(f.substring(1))),
                na = uu("ascii", "a", f => {
                    let r = "a";
                    for (let t = 0; t < f.length; t++) r += String.fromCharCode(f[t]);
                    return r
                }, f => {
                    const r = function tp(f = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? cu(globalThis.Buffer.allocUnsafe(f)) : new Uint8Array(f)
                    }((f = f.substring(1)).length);
                    for (let t = 0; t < f.length; t++) r[t] = f.charCodeAt(t);
                    return r
                }),
                rp = {
                    utf8: lu,
                    "utf-8": lu,
                    hex: au.base16,
                    latin1: na,
                    ascii: na,
                    binary: na,
                    ...au
                },
                Mn = "wc@2:core:",
                op = {
                    database: ":memory:"
                },
                hu = "client_ed25519_seed",
                cp = Ae.ONE_DAY,
                dp = Ae.SIX_HOURS,
                pu = "wss://relay.walletconnect.com",
                gu = "wss://relay.walletconnect.org",
                _p = Ae.ONE_SECOND,
                nn_created = "subscription_created",
                nn_deleted = "subscription_deleted",
                Pp = 1e3 * Ae.FIVE_SECONDS,
                Ki = {
                    wc_pairingDelete: {
                        req: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: Ae.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: Ae.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                Vr_expired = "expirer_expired",
                sa = "verify-api",
                Ei = "https://verify.walletconnect.com",
                oa = "https://verify.walletconnect.org",
                Dp = [Ei, oa];
            class jp {
                constructor(r, t) {
                    var o = this;
                    this.core = r, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Mn, this.init = (0, v.Z)(function*() {
                        if (!o.initialized) {
                            const a = yield o.getKeyChain();
                            typeof a < "u" && (o.keychain = a), o.initialized = !0
                        }
                    }), this.has = a => (this.isInitialized(), this.keychain.has(a)), this.set = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            o.isInitialized(), o.keychain.set(u, h), yield o.persist()
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.get = a => {
                        this.isInitialized();
                        const u = this.keychain.get(a);
                        if (typeof u > "u") {
                            const {
                                message: h
                            } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${a}`);
                            throw new Error(h)
                        }
                        return u
                    }, this.del = function() {
                        var a = (0, v.Z)(function*(u) {
                            o.isInitialized(), o.keychain.delete(u), yield o.persist()
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.core = r, this.logger = (0, Te.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setKeyChain(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, (0, m.KC)(r))
                    })()
                }
                getKeyChain() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        const t = yield r.core.storage.getItem(r.storageKey);
                        return typeof t < "u" ? (0, m.IP)(t) : void 0
                    })()
                }
                persist() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        yield r.setKeyChain(r.keychain)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class Fp {
                constructor(r, t, o) {
                    var a = this;
                    this.core = r, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = (0, v.Z)(function*() {
                        a.initialized || (yield a.keychain.init(), a.initialized = !0)
                    }), this.hasKeys = u => (this.isInitialized(), this.keychain.has(u)), this.getClientId = (0, v.Z)(function*() {
                        return a.isInitialized(), Es(Ps(yield a.getClientSeed()).publicKey)
                    }), this.generateKeyPair = () => {
                        this.isInitialized();
                        const u = (0, m.Au)();
                        return this.setPrivateKey(u.publicKey, u.privateKey)
                    }, this.signJWT = function() {
                        var u = (0, v.Z)(function*(h) {
                            a.isInitialized();
                            const C = Ps(yield a.getClientSeed()),
                                O = (0, m.jd)();
                            return yield function Vo(f, r, t, o) {
                                return $i.apply(this, arguments)
                            }(O, h, cp, C)
                        });
                        return function(h) {
                            return u.apply(this, arguments)
                        }
                    }(), this.generateSharedKey = (u, h, b) => {
                        this.isInitialized();
                        const C = this.getPrivateKey(u),
                            O = (0, m.m$)(C, h);
                        return this.setSymKey(O, b)
                    }, this.setSymKey = function() {
                        var u = (0, v.Z)(function*(h, b) {
                            a.isInitialized();
                            const C = b || (0, m.Ym)(h);
                            return yield a.keychain.set(C, h), C
                        });
                        return function(h, b) {
                            return u.apply(this, arguments)
                        }
                    }(), this.deleteKeyPair = function() {
                        var u = (0, v.Z)(function*(h) {
                            a.isInitialized(), yield a.keychain.del(h)
                        });
                        return function(h) {
                            return u.apply(this, arguments)
                        }
                    }(), this.deleteSymKey = function() {
                        var u = (0, v.Z)(function*(h) {
                            a.isInitialized(), yield a.keychain.del(h)
                        });
                        return function(h) {
                            return u.apply(this, arguments)
                        }
                    }(), this.encode = function() {
                        var u = (0, v.Z)(function*(h, b, C) {
                            a.isInitialized();
                            const O = (0, m.EN)(C),
                                N = wt(b);
                            if ((0, m.Q8)(O)) {
                                const ue = O.senderPublicKey,
                                    Ne = O.receiverPublicKey;
                                h = yield a.generateSharedKey(ue, Ne)
                            }
                            const H = a.getSymKey(h),
                                {
                                    type: Q,
                                    senderPublicKey: ge
                                } = O;
                            return (0, m.HI)({
                                type: Q,
                                symKey: H,
                                message: N,
                                senderPublicKey: ge
                            })
                        });
                        return function(h, b, C) {
                            return u.apply(this, arguments)
                        }
                    }(), this.decode = function() {
                        var u = (0, v.Z)(function*(h, b, C) {
                            a.isInitialized();
                            const O = (0, m.Ll)(b, C);
                            if ((0, m.Q8)(O)) {
                                const N = O.receiverPublicKey,
                                    H = O.senderPublicKey;
                                h = yield a.generateSharedKey(N, H)
                            }
                            try {
                                const N = a.getSymKey(h);
                                return Tt((0, m.pe)({
                                    symKey: N,
                                    encoded: b
                                }))
                            } catch (N) {
                                a.logger.error(`Failed to decode message from topic: '${h}', clientId: '${yield a.getClientId()}'`), a.logger.error(N)
                            }
                        });
                        return function(h, b, C) {
                            return u.apply(this, arguments)
                        }
                    }(), this.getPayloadType = u => {
                        const h = (0, m.vB)(u);
                        return (0, m.WG)(h.type)
                    }, this.getPayloadSenderPublicKey = u => {
                        const h = (0, m.vB)(u);
                        return h.senderPublicKey ? (0, ko.BB)(h.senderPublicKey, m.AW) : void 0
                    }, this.core = r, this.logger = (0, Te.generateChildLogger)(t, this.name), this.keychain = o || new jp(this.core, this.logger)
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                setPrivateKey(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        return yield o.keychain.set(r, t), r
                    })()
                }
                getPrivateKey(r) {
                    return this.keychain.get(r)
                }
                getClientSeed() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        let t = "";
                        try {
                            t = r.keychain.get(hu)
                        } catch {
                            t = (0, m.jd)(), yield r.keychain.set(hu, t)
                        }
                        return function np(f, r = "utf8") {
                            const t = rp[r];
                            if (!t) throw new Error(`Unsupported encoding "${r}"`);
                            return "utf8" !== r && "utf-8" !== r || null == globalThis.Buffer || null == globalThis.Buffer.from ? t.decoder.decode(`${t.prefix}${f}`) : cu(globalThis.Buffer.from(f, "utf-8"))
                        }(t, "base16")
                    })()
                }
                getSymKey(r) {
                    return this.keychain.get(r)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class Mp extends fn {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.logger = r, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Mn, this.init = (0, v.Z)(function*() {
                        if (!o.initialized) {
                            o.logger.trace("Initialized");
                            try {
                                const a = yield o.getRelayerMessages();
                                typeof a < "u" && (o.messages = a), o.logger.debug(`Successfully Restored records for ${o.name}`), o.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: o.messages.size
                                })
                            } catch (a) {
                                o.logger.debug(`Failed to Restore records for ${o.name}`), o.logger.error(a)
                            } finally {
                                o.initialized = !0
                            }
                        }
                    }), this.set = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            o.isInitialized();
                            const b = (0, m.rj)(h);
                            let C = o.messages.get(u);
                            return typeof C > "u" && (C = {}), typeof C[b] < "u" || (C[b] = h, o.messages.set(u, C), yield o.persist()), b
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.get = a => {
                        this.isInitialized();
                        let u = this.messages.get(a);
                        return typeof u > "u" && (u = {}), u
                    }, this.has = (a, u) => (this.isInitialized(), typeof this.get(a)[(0, m.rj)(u)] < "u"), this.del = function() {
                        var a = (0, v.Z)(function*(u) {
                            o.isInitialized(), o.messages.delete(u), yield o.persist()
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.logger = (0, Te.generateChildLogger)(r, this.name), this.core = t
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setRelayerMessages(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, (0, m.KC)(r))
                    })()
                }
                getRelayerMessages() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        const t = yield r.core.storage.getItem(r.storageKey);
                        return typeof t < "u" ? (0, m.IP)(t) : void 0
                    })()
                }
                persist() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        yield r.setRelayerMessages(r.messages)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class Zp extends Nt {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.relayer = r, this.logger = t, this.events = new ye.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, Ae.toMiliseconds)(Ae.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = function() {
                        var a = (0, v.Z)(function*(u, h, b) {
                            var C;
                            o.logger.debug("Publishing Payload"), o.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: u,
                                    message: h,
                                    opts: b
                                }
                            });
                            try {
                                const O = b ? .ttl || dp,
                                    N = (0, m._H)(b),
                                    H = b ? .prompt || !1,
                                    Q = b ? .tag || 0,
                                    ge = b ? .id || Hi().toString(),
                                    ue = {
                                        topic: u,
                                        message: h,
                                        opts: {
                                            ttl: O,
                                            relay: N,
                                            prompt: H,
                                            tag: Q,
                                            id: ge
                                        }
                                    },
                                    Ne = setTimeout(() => o.queue.set(ge, ue), o.publishTimeout);
                                try {
                                    yield yield(0, m.hF)(o.rpcPublish(u, h, O, N, H, Q, ge), o.publishTimeout, "Failed to publish payload, please try again."), o.removeRequestFromQueue(ge), o.relayer.events.emit("relayer_publish", ue)
                                } catch (Be) {
                                    if (o.logger.debug("Publishing Payload stalled"), o.needsTransportRestart = !0, null != (C = b ? .internal) && C.throwOnFailedPublish) throw o.removeRequestFromQueue(ge), Be;
                                    return
                                } finally {
                                    clearTimeout(Ne)
                                }
                                o.logger.debug("Successfully Published Payload"), o.logger.trace({
                                    type: "method",
                                    method: "publish",
                                    params: {
                                        topic: u,
                                        message: h,
                                        opts: b
                                    }
                                })
                            } catch (O) {
                                throw o.logger.debug("Failed to Publish Payload"), o.logger.error(O), O
                            }
                        });
                        return function(u, h, b) {
                            return a.apply(this, arguments)
                        }
                    }(), this.on = (a, u) => {
                        this.events.on(a, u)
                    }, this.once = (a, u) => {
                        this.events.once(a, u)
                    }, this.off = (a, u) => {
                        this.events.off(a, u)
                    }, this.removeListener = (a, u) => {
                        this.events.removeListener(a, u)
                    }, this.relayer = r, this.logger = (0, Te.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                rpcPublish(r, t, o, a, u, h, b) {
                    var C, O, N, H;
                    const Q = {
                        method: (0, m.cO)(a.protocol).publish,
                        params: {
                            topic: r,
                            message: t,
                            ttl: o,
                            prompt: u,
                            tag: h
                        },
                        id: b
                    };
                    return (0, m.o8)(null == (C = Q.params) ? void 0 : C.prompt) && (null == (O = Q.params) || delete O.prompt), (0, m.o8)(null == (N = Q.params) ? void 0 : N.tag) && (null == (H = Q.params) || delete H.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: Q
                    }), this.relayer.request(Q)
                }
                removeRequestFromQueue(r) {
                    this.queue.delete(r)
                }
                checkQueue() {
                    var r = this;
                    this.queue.forEach(function() {
                        var t = (0, v.Z)(function*(o) {
                            const {
                                topic: a,
                                message: u,
                                opts: h
                            } = o;
                            yield r.publish(a, u, h)
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit("relayer_connection_stalled");
                        this.checkQueue()
                    }), this.relayer.on("relayer_message_ack", r => {
                        this.removeRequestFromQueue(r.id.toString())
                    })
                }
            }
            class zp {
                constructor() {
                    this.map = new Map, this.set = (r, t) => {
                        const o = this.get(r);
                        this.exists(r, t) || this.map.set(r, [...o, t])
                    }, this.get = r => this.map.get(r) || [], this.exists = (r, t) => this.get(r).includes(t), this.delete = (r, t) => {
                        if (typeof t > "u") return void this.map.delete(r);
                        if (!this.map.has(r)) return;
                        const o = this.get(r);
                        if (!this.exists(r, t)) return;
                        const a = o.filter(u => u !== t);
                        a.length ? this.map.set(r, a) : this.map.delete(r)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var qp = Object.defineProperty,
                Up = Object.defineProperties,
                $p = Object.getOwnPropertyDescriptors,
                yu = Object.getOwnPropertySymbols,
                Hp = Object.prototype.hasOwnProperty,
                Bp = Object.prototype.propertyIsEnumerable,
                vu = (f, r, t) => r in f ? qp(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                ki = (f, r) => {
                    for (var t in r || (r = {})) Hp.call(r, t) && vu(f, t, r[t]);
                    if (yu)
                        for (var t of yu(r)) Bp.call(r, t) && vu(f, t, r[t]);
                    return f
                },
                aa = (f, r) => Up(f, $p(r));
            class Kp extends Yt {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.relayer = r, this.logger = t, this.subscriptions = new Map, this.topicMap = new zp, this.events = new ye.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Mn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = (0, v.Z)(function*() {
                        o.initialized || (o.logger.trace("Initialized"), o.registerEventListeners(), o.clientId = yield o.relayer.core.crypto.getClientId())
                    }), this.subscribe = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            yield o.restartToComplete(), o.isInitialized(), o.logger.debug("Subscribing Topic"), o.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: u,
                                    opts: h
                                }
                            });
                            try {
                                const b = (0, m._H)(h),
                                    C = {
                                        topic: u,
                                        relay: b
                                    };
                                o.pending.set(u, C);
                                const O = yield o.rpcSubscribe(u, b);
                                return o.onSubscribe(O, C), o.logger.debug("Successfully Subscribed Topic"), o.logger.trace({
                                    type: "method",
                                    method: "subscribe",
                                    params: {
                                        topic: u,
                                        opts: h
                                    }
                                }), O
                            } catch (b) {
                                throw o.logger.debug("Failed to Subscribe Topic"), o.logger.error(b), b
                            }
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.unsubscribe = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            yield o.restartToComplete(), o.isInitialized(), typeof h ? .id < "u" ? yield o.unsubscribeById(u, h.id, h): yield o.unsubscribeByTopic(u, h)
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isSubscribed = function() {
                        var a = (0, v.Z)(function*(u) {
                            return !!o.topics.includes(u) || (yield new Promise((h, b) => {
                                const C = new Ae.Watch;
                                C.start(o.pendingSubscriptionWatchLabel);
                                const O = setInterval(() => {
                                    !o.pending.has(u) && o.topics.includes(u) && (clearInterval(O), C.stop(o.pendingSubscriptionWatchLabel), h(!0)), C.elapsed(o.pendingSubscriptionWatchLabel) >= Pp && (clearInterval(O), C.stop(o.pendingSubscriptionWatchLabel), b(new Error("Subscription resolution timeout")))
                                }, o.pollingInterval)
                            }).catch(() => !1))
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.on = (a, u) => {
                        this.events.on(a, u)
                    }, this.once = (a, u) => {
                        this.events.once(a, u)
                    }, this.off = (a, u) => {
                        this.events.off(a, u)
                    }, this.removeListener = (a, u) => {
                        this.events.removeListener(a, u)
                    }, this.restart = (0, v.Z)(function*() {
                        o.restartInProgress = !0, yield o.restore(), yield o.reset(), o.restartInProgress = !1
                    }), this.relayer = r, this.logger = (0, Te.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(r, t) {
                    let o = !1;
                    try {
                        o = this.getSubscription(r).topic === t
                    } catch {}
                    return o
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                unsubscribeByTopic(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        const a = o.topicMap.get(r);
                        yield Promise.all(a.map(function() {
                            var u = (0, v.Z)(function*(h) {
                                return yield o.unsubscribeById(r, h, t)
                            });
                            return function(h) {
                                return u.apply(this, arguments)
                            }
                        }()))
                    })()
                }
                unsubscribeById(r, t, o) {
                    var a = this;
                    return (0, v.Z)(function*() {
                        a.logger.debug("Unsubscribing Topic"), a.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: r,
                                id: t,
                                opts: o
                            }
                        });
                        try {
                            const u = (0, m._H)(o);
                            yield a.rpcUnsubscribe(r, t, u);
                            const h = (0, m.D6)("USER_DISCONNECTED", `${a.name}, ${r}`);
                            yield a.onUnsubscribe(r, t, h), a.logger.debug("Successfully Unsubscribed Topic"), a.logger.trace({
                                type: "method",
                                method: "unsubscribe",
                                params: {
                                    topic: r,
                                    id: t,
                                    opts: o
                                }
                            })
                        } catch (u) {
                            throw a.logger.debug("Failed to Unsubscribe Topic"), a.logger.error(u), u
                        }
                    })()
                }
                rpcSubscribe(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        const a = {
                            method: (0, m.cO)(t.protocol).subscribe,
                            params: {
                                topic: r
                            }
                        };
                        o.logger.debug("Outgoing Relay Payload"), o.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: a
                        });
                        try {
                            yield yield(0, m.hF)(o.relayer.request(a), o.subscribeTimeout)
                        } catch {
                            o.logger.debug("Outgoing Relay Subscribe Payload stalled"), o.relayer.events.emit("relayer_connection_stalled")
                        }
                        return (0, m.rj)(r + o.clientId)
                    })()
                }
                rpcBatchSubscribe(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (!r.length) return;
                        const a = {
                            method: (0, m.cO)(r[0].relay.protocol).batchSubscribe,
                            params: {
                                topics: r.map(u => u.topic)
                            }
                        };
                        t.logger.debug("Outgoing Relay Payload"), t.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: a
                        });
                        try {
                            return yield yield(0, m.hF)(t.relayer.request(a), t.subscribeTimeout)
                        } catch {
                            t.logger.debug("Outgoing Relay Payload stalled"), t.relayer.events.emit("relayer_connection_stalled")
                        }
                    })()
                }
                rpcUnsubscribe(r, t, o) {
                    const a = {
                        method: (0, m.cO)(o.protocol).unsubscribe,
                        params: {
                            topic: r,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: a
                    }), this.relayer.request(a)
                }
                onSubscribe(r, t) {
                    this.setSubscription(r, aa(ki({}, t), {
                        id: r
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(r) {
                    r.length && r.forEach(t => {
                        this.setSubscription(t.id, ki({}, t)), this.pending.delete(t.topic)
                    })
                }
                onUnsubscribe(r, t, o) {
                    var a = this;
                    return (0, v.Z)(function*() {
                        a.events.removeAllListeners(t), a.hasSubscription(t, r) && a.deleteSubscription(t, o), yield a.relayer.messages.del(r)
                    })()
                }
                setRelayerSubscriptions(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.relayer.core.storage.setItem(t.storageKey, r)
                    })()
                }
                getRelayerSubscriptions() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return yield r.relayer.core.storage.getItem(r.storageKey)
                    })()
                }
                setSubscription(r, t) {
                    this.subscriptions.has(r) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: r,
                        subscription: t
                    }), this.addSubscription(r, t))
                }
                addSubscription(r, t) {
                    this.subscriptions.set(r, ki({}, t)), this.topicMap.set(t.topic, r), this.events.emit(nn_created, t)
                }
                getSubscription(r) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: r
                    });
                    const t = this.subscriptions.get(r);
                    if (!t) {
                        const {
                            message: o
                        } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${r}`);
                        throw new Error(o)
                    }
                    return t
                }
                deleteSubscription(r, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: r,
                        reason: t
                    });
                    const o = this.getSubscription(r);
                    this.subscriptions.delete(r), this.topicMap.delete(o.topic, r), this.events.emit(nn_deleted, aa(ki({}, o), {
                        reason: t
                    }))
                }
                persist() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        yield r.setRelayerSubscriptions(r.values), r.events.emit("subscription_sync")
                    })()
                }
                reset() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        if (r.cached.length) {
                            const t = Math.ceil(r.cached.length / r.batchSubscribeTopicsLimit);
                            for (let o = 0; o < t; o++) {
                                const a = r.cached.splice(0, r.batchSubscribeTopicsLimit);
                                yield r.batchSubscribe(a)
                            }
                        }
                        r.events.emit("subscription_resubscribed")
                    })()
                }
                restore() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        try {
                            const t = yield r.getRelayerSubscriptions();
                            if (typeof t > "u" || !t.length) return;
                            if (r.subscriptions.size) {
                                const {
                                    message: o
                                } = (0, m.Z7)("RESTORE_WILL_OVERRIDE", r.name);
                                throw r.logger.error(o), r.logger.error(`${r.name}: ${JSON.stringify(r.values)}`), new Error(o)
                            }
                            r.cached = t, r.logger.debug(`Successfully Restored subscriptions for ${r.name}`), r.logger.trace({
                                type: "method",
                                method: "restore",
                                subscriptions: r.values
                            })
                        } catch (t) {
                            r.logger.debug(`Failed to Restore subscriptions for ${r.name}`), r.logger.error(t)
                        }
                    })()
                }
                batchSubscribe(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (!r.length) return;
                        const o = yield t.rpcBatchSubscribe(r);
                        (0, m.qt)(o) && t.onBatchSubscribe(o.map((a, u) => aa(ki({}, r[u]), {
                            id: a
                        })))
                    })()
                }
                onConnect() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.restartInProgress || (yield r.restart(), r.onEnable())
                    })()
                }
                onDisconnect() {
                    this.onDisable()
                }
                checkPending() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        if (!r.initialized || r.relayer.transportExplicitlyClosed) return;
                        const t = [];
                        r.pending.forEach(o => {
                            t.push(o)
                        }), yield r.batchSubscribe(t)
                    })()
                }
                registerEventListeners() {
                    var r = this;
                    this.relayer.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, (0, v.Z)(function*() {
                        yield r.checkPending()
                    })), this.relayer.on("relayer_connect", (0, v.Z)(function*() {
                        yield r.onConnect()
                    })), this.relayer.on("relayer_disconnect", () => {
                        this.onDisconnect()
                    }), this.events.on(nn_created, function() {
                        var t = (0, v.Z)(function*(o) {
                            const a = nn_created;
                            r.logger.info(`Emitting ${a}`), r.logger.debug({
                                type: "event",
                                event: a,
                                data: o
                            }), yield r.persist()
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }()), this.events.on(nn_deleted, function() {
                        var t = (0, v.Z)(function*(o) {
                            const a = nn_deleted;
                            r.logger.info(`Emitting ${a}`), r.logger.debug({
                                type: "event",
                                event: a,
                                data: o
                            }), yield r.persist()
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
                restartToComplete() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.restartInProgress && (yield new Promise(t => {
                            const o = setInterval(() => {
                                r.restartInProgress || (clearInterval(o), t())
                            }, r.pollingInterval)
                        }))
                    })()
                }
            }
            var Vp = Object.defineProperty,
                _u = Object.getOwnPropertySymbols,
                kp = Object.prototype.hasOwnProperty,
                Gp = Object.prototype.propertyIsEnumerable,
                mu = (f, r, t) => r in f ? Vp(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t;
            class Jp extends Lt {
                constructor(r) {
                    var t;
                    super(r), t = this, this.protocol = "wc", this.version = 2, this.events = new ye.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = function() {
                        var o = (0, v.Z)(function*(a) {
                            t.logger.debug("Publishing Request Payload");
                            try {
                                return yield t.toEstablishConnection(), yield t.provider.request(a)
                            } catch (u) {
                                throw t.logger.debug("Failed to Publish Request"), t.logger.error(u), u
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onPayloadHandler = o => {
                        this.onProviderPayload(o)
                    }, this.onConnectHandler = () => {
                        this.events.emit("relayer_connect")
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = o => {
                        this.logger.error(o), this.events.emit("relayer_error", o), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on("payload", this.onPayloadHandler), this.provider.on("connect", this.onConnectHandler), this.provider.on("disconnect", this.onDisconnectHandler), this.provider.on("error", this.onProviderErrorHandler)
                    }, this.core = r.core, this.logger = typeof r.logger < "u" && "string" != typeof r.logger ? (0, Te.generateChildLogger)(r.logger, this.name) : (0, Te.pino)((0, Te.getDefaultLoggerOptions)({
                        level: r.logger || "error"
                    })), this.messages = new Mp(this.logger, r.core), this.subscriber = new Kp(this, this.logger), this.publisher = new Zp(this, this.logger), this.relayUrl = r ? .relayUrl || pu, this.projectId = r.projectId, this.bundleId = (0, m.X_)(), this.provider = {}
                }
                init() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.logger.trace("Initialized"), r.registerEventListeners(), yield r.createProvider(), yield Promise.all([r.messages.init(), r.subscriber.init()]);
                        try {
                            yield r.transportOpen()
                        } catch {
                            r.logger.warn(`Connection via ${r.relayUrl} failed, attempting to connect via failover domain ${gu}...`), yield r.restartTransport(gu)
                        }
                        r.initialized = !0, setTimeout((0, v.Z)(function*() {
                            0 === r.subscriber.topics.length && (r.logger.info("No topics subscribed to after init, closing transport"), yield r.transportClose(), r.transportExplicitlyClosed = !1)
                        }), 1e4)
                    })()
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                publish(r, t, o) {
                    var a = this;
                    return (0, v.Z)(function*() {
                        a.isInitialized(), yield a.publisher.publish(r, t, o), yield a.recordMessageEvent({
                            topic: r,
                            message: t,
                            publishedAt: Date.now()
                        })
                    })()
                }
                subscribe(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        var a;
                        o.isInitialized();
                        let h, u = (null == (a = o.subscriber.topicMap.get(r)) ? void 0 : a[0]) || "";
                        if (u) return u;
                        const b = C => {
                            C.topic === r && (o.subscriber.off(nn_created, b), h())
                        };
                        return yield Promise.all([new Promise(C => {
                            h = C, o.subscriber.on(nn_created, b)
                        }), new Promise(function() {
                            var C = (0, v.Z)(function*(O) {
                                u = yield o.subscriber.subscribe(r, t), O()
                            });
                            return function(O) {
                                return C.apply(this, arguments)
                            }
                        }())]), u
                    })()
                }
                unsubscribe(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        o.isInitialized(), yield o.subscriber.unsubscribe(r, t)
                    })()
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                transportClose() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.transportExplicitlyClosed = !0, r.hasExperiencedNetworkDisruption && r.connected ? yield(0, m.hF)(r.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => r.onProviderDisconnect()): r.connected && (yield r.provider.disconnect())
                    })()
                }
                transportOpen(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (t.transportExplicitlyClosed = !1, yield t.confirmOnlineStateOrThrow(), !t.connectionAttemptInProgress) {
                            r && r !== t.relayUrl && (t.relayUrl = r, yield t.transportClose(), yield t.createProvider()), t.connectionAttemptInProgress = !0;
                            try {
                                yield Promise.all([new Promise(o => {
                                    if (!t.initialized) return o();
                                    t.subscriber.once("subscription_resubscribed", () => {
                                        o()
                                    })
                                }), new Promise(function() {
                                    var o = (0, v.Z)(function*(a, u) {
                                        try {
                                            yield(0, m.hF)(t.provider.connect(), 1e4, `Socket stalled when trying to connect to ${t.relayUrl}`)
                                        } catch (h) {
                                            return void u(h)
                                        }
                                        a()
                                    });
                                    return function(a, u) {
                                        return o.apply(this, arguments)
                                    }
                                }())])
                            } catch (o) {
                                if (t.logger.error(o), !t.isConnectionStalled(o.message)) throw o;
                                t.provider.events.emit("disconnect")
                            } finally {
                                t.connectionAttemptInProgress = !1, t.hasExperiencedNetworkDisruption = !1
                            }
                        }
                    })()
                }
                restartTransport(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.confirmOnlineStateOrThrow(), !t.connectionAttemptInProgress && (t.relayUrl = r || t.relayUrl, yield t.transportClose(), yield t.createProvider(), yield t.transportOpen())
                    })()
                }
                confirmOnlineStateOrThrow() {
                    return (0, v.Z)(function*() {
                        if (!(yield(0, m.Gg)())) throw new Error("No internet connection detected. Please restart your network and try again.")
                    })()
                }
                isConnectionStalled(r) {
                    return this.staleConnectionErrors.some(t => r.includes(t))
                }
                createProvider() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.provider.connection && r.unregisterProviderListeners();
                        const t = yield r.core.crypto.signJWT(r.relayUrl);
                        r.provider = new ur(new Th((0, m.$0)({
                            sdkVersion: "2.11.0",
                            protocol: r.protocol,
                            version: r.version,
                            relayUrl: r.relayUrl,
                            projectId: r.projectId,
                            auth: t,
                            useOnCloseEvent: !0,
                            bundleId: r.bundleId
                        }))), r.registerProviderListeners()
                    })()
                }
                recordMessageEvent(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        const {
                            topic: o,
                            message: a
                        } = r;
                        yield t.messages.set(o, a)
                    })()
                }
                shouldIgnoreMessageEvent(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        const {
                            topic: o,
                            message: a
                        } = r;
                        if (!a || 0 === a.length) return t.logger.debug(`Ignoring invalid/empty message: ${a}`), !0;
                        if (!(yield t.subscriber.isSubscribed(o))) return t.logger.debug(`Ignoring message for non-subscribed topic ${o}`), !0;
                        const u = t.messages.has(o, a);
                        return u && t.logger.debug(`Ignoring duplicate message: ${a}`), u
                    })()
                }
                onProviderPayload(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (t.logger.debug("Incoming Relay Payload"), t.logger.trace({
                                type: "payload",
                                direction: "incoming",
                                payload: r
                            }), Or(r)) {
                            if (!r.method.endsWith("_subscription")) return;
                            const o = r.params,
                                {
                                    topic: a,
                                    message: u,
                                    publishedAt: h
                                } = o.data,
                                b = {
                                    topic: a,
                                    message: u,
                                    publishedAt: h
                                };
                            t.logger.debug("Emitting Relayer Payload"), t.logger.trace(((f, r) => {
                                for (var t in r || (r = {})) kp.call(r, t) && mu(f, t, r[t]);
                                if (_u)
                                    for (var t of _u(r)) Gp.call(r, t) && mu(f, t, r[t]);
                                return f
                            })({
                                type: "event",
                                event: o.id
                            }, b)), t.events.emit(o.id, b), yield t.acknowledgePayload(r), yield t.onMessageEvent(b)
                        } else Bt(r) && t.events.emit("relayer_message_ack", r)
                    })()
                }
                onMessageEvent(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        (yield t.shouldIgnoreMessageEvent(r)) || (t.events.emit("relayer_message", r), yield t.recordMessageEvent(r))
                    })()
                }
                acknowledgePayload(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        const o = Xn(r.id, !0);
                        yield t.provider.connection.send(o)
                    })()
                }
                unregisterProviderListeners() {
                    this.provider.off("payload", this.onPayloadHandler), this.provider.off("connect", this.onConnectHandler), this.provider.off("disconnect", this.onDisconnectHandler), this.provider.off("error", this.onProviderErrorHandler)
                }
                registerEventListeners() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.events.on("relayer_connection_stalled", () => {
                            r.restartTransport().catch(o => r.logger.error(o))
                        });
                        let t = yield(0, m.Gg)();
                        (0, m.uw)(function() {
                            var o = (0, v.Z)(function*(a) {
                                r.initialized && t !== a && (t = a, a ? yield r.restartTransport().catch(u => r.logger.error(u)): (r.hasExperiencedNetworkDisruption = !0, yield r.transportClose().catch(u => r.logger.error(u))))
                            });
                            return function(a) {
                                return o.apply(this, arguments)
                            }
                        }())
                    })()
                }
                onProviderDisconnect() {
                    this.events.emit("relayer_disconnect"), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    var r = this;
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((0, v.Z)(function*() {
                        yield r.restartTransport().catch(t => r.logger.error(t))
                    }), (0, Ae.toMiliseconds)(_p)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
                toEstablishConnection() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        if (yield r.confirmOnlineStateOrThrow(), !r.connected) {
                            if (r.connectionAttemptInProgress) return yield new Promise(t => {
                                const o = setInterval(() => {
                                    r.connected && (clearInterval(o), t())
                                }, r.connectionStatusPollingInterval)
                            });
                            yield r.restartTransport()
                        }
                    })()
                }
            }
            var Qp = Object.defineProperty,
                bu = Object.getOwnPropertySymbols,
                Yp = Object.prototype.hasOwnProperty,
                Xp = Object.prototype.propertyIsEnumerable,
                wu = (f, r, t) => r in f ? Qp(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                xu = (f, r) => {
                    for (var t in r || (r = {})) Yp.call(r, t) && wu(f, t, r[t]);
                    if (bu)
                        for (var t of bu(r)) Xp.call(r, t) && wu(f, t, r[t]);
                    return f
                };
            class Ds extends jt {
                constructor(r, t, o, a = Mn, u = void 0) {
                    var h;
                    super(r, t, o, a), h = this, this.core = r, this.logger = t, this.name = o, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Mn, this.init = (0, v.Z)(function*() {
                        h.initialized || (h.logger.trace("Initialized"), yield h.restore(), h.cached.forEach(b => {
                            h.getKey && null !== b && !(0, m.o8)(b) ? h.map.set(h.getKey(b), b) : (0, m.xW)(b) ? h.map.set(b.id, b) : (0, m.h1)(b) && h.map.set(b.topic, b)
                        }), h.cached = [], h.initialized = !0)
                    }), this.set = function() {
                        var b = (0, v.Z)(function*(C, O) {
                            h.isInitialized(), h.map.has(C) ? yield h.update(C, O): (h.logger.debug("Setting value"), h.logger.trace({
                                type: "method",
                                method: "set",
                                key: C,
                                value: O
                            }), h.map.set(C, O), yield h.persist())
                        });
                        return function(C, O) {
                            return b.apply(this, arguments)
                        }
                    }(), this.get = b => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: b
                    }), this.getData(b)), this.getAll = b => (this.isInitialized(), b ? this.values.filter(C => Object.keys(b).every(O => Nh()(C[O], b[O]))) : this.values), this.update = function() {
                        var b = (0, v.Z)(function*(C, O) {
                            h.isInitialized(), h.logger.debug("Updating value"), h.logger.trace({
                                type: "method",
                                method: "update",
                                key: C,
                                update: O
                            });
                            const N = xu(xu({}, h.getData(C)), O);
                            h.map.set(C, N), yield h.persist()
                        });
                        return function(C, O) {
                            return b.apply(this, arguments)
                        }
                    }(), this.delete = function() {
                        var b = (0, v.Z)(function*(C, O) {
                            h.isInitialized(), h.map.has(C) && (h.logger.debug("Deleting value"), h.logger.trace({
                                type: "method",
                                method: "delete",
                                key: C,
                                reason: O
                            }), h.map.delete(C), yield h.persist())
                        });
                        return function(C, O) {
                            return b.apply(this, arguments)
                        }
                    }(), this.logger = (0, Te.generateChildLogger)(t, this.name), this.storagePrefix = a, this.getKey = u
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                setDataStore(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, r)
                    })()
                }
                getDataStore() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return yield r.core.storage.getItem(r.storageKey)
                    })()
                }
                getData(r) {
                    const t = this.map.get(r);
                    if (!t) {
                        const {
                            message: o
                        } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${r}`);
                        throw this.logger.error(o), new Error(o)
                    }
                    return t
                }
                persist() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        yield r.setDataStore(r.values)
                    })()
                }
                restore() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        try {
                            const t = yield r.getDataStore();
                            if (typeof t > "u" || !t.length) return;
                            if (r.map.size) {
                                const {
                                    message: o
                                } = (0, m.Z7)("RESTORE_WILL_OVERRIDE", r.name);
                                throw r.logger.error(o), new Error(o)
                            }
                            r.cached = t, r.logger.debug(`Successfully Restored value for ${r.name}`), r.logger.trace({
                                type: "method",
                                method: "restore",
                                value: r.values
                            })
                        } catch (t) {
                            r.logger.debug(`Failed to Restore value for ${r.name}`), r.logger.error(t)
                        }
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class eg {
                constructor(r, t) {
                    var o = this;
                    this.core = r, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(be()), this.initialized = !1, this.storagePrefix = Mn, this.ignoredPayloadTypes = [m.rV], this.registeredMethods = [], this.init = (0, v.Z)(function*() {
                        o.initialized || (yield o.pairings.init(), yield o.cleanup(), o.registerRelayerEvents(), o.registerExpirerEvents(), o.initialized = !0, o.logger.trace("Initialized"))
                    }), this.register = ({
                        methods: a
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...a])]
                    }, this.create = (0, v.Z)(function*() {
                        o.isInitialized();
                        const a = (0, m.jd)(),
                            u = yield o.core.crypto.setSymKey(a), h = (0, m.gn)(Ae.FIVE_MINUTES), b = {
                                protocol: "irn"
                            }, C = {
                                topic: u,
                                expiry: h,
                                relay: b,
                                active: !1
                            }, O = (0, m.Bv)({
                                protocol: o.core.protocol,
                                version: o.core.version,
                                topic: u,
                                symKey: a,
                                relay: b
                            });
                        return yield o.pairings.set(u, C), yield o.core.relayer.subscribe(u), o.core.expirer.set(u, h), {
                            topic: u,
                            uri: O
                        }
                    }), this.pair = function() {
                        var a = (0, v.Z)(function*(u) {
                            o.isInitialized(), o.isValidPair(u);
                            const {
                                topic: h,
                                symKey: b,
                                relay: C
                            } = (0, m.he)(u.uri);
                            let O;
                            if (o.pairings.keys.includes(h) && (O = o.pairings.get(h), O.active)) throw new Error(`Pairing already exists: ${h}. Please try again with a new connection URI.`);
                            const N = (0, m.gn)(Ae.FIVE_MINUTES),
                                H = {
                                    topic: h,
                                    relay: C,
                                    expiry: N,
                                    active: !1
                                };
                            return yield o.pairings.set(h, H), o.core.expirer.set(h, N), u.activatePairing && (yield o.activate({
                                topic: h
                            })), o.events.emit("pairing_create", H), o.core.crypto.keychain.has(h) || (yield o.core.crypto.setSymKey(b, h), yield o.core.relayer.subscribe(h, {
                                relay: C
                            })), H
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.activate = function() {
                        var a = (0, v.Z)(function*({
                            topic: u
                        }) {
                            o.isInitialized();
                            const h = (0, m.gn)(Ae.THIRTY_DAYS);
                            yield o.pairings.update(u, {
                                active: !0,
                                expiry: h
                            }), o.core.expirer.set(u, h)
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var a = (0, v.Z)(function*(u) {
                            o.isInitialized(), yield o.isValidPing(u);
                            const {
                                topic: h
                            } = u;
                            if (o.pairings.keys.includes(h)) {
                                const b = yield o.sendRequest(h, "wc_pairingPing", {}), {
                                    done: C,
                                    resolve: O,
                                    reject: N
                                } = (0, m.H1)();
                                o.events.once((0, m.E0)("pairing_ping", b), ({
                                    error: H
                                }) => {
                                    H ? N(H) : O()
                                }), yield C()
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.updateExpiry = function() {
                        var a = (0, v.Z)(function*({
                            topic: u,
                            expiry: h
                        }) {
                            o.isInitialized(), yield o.pairings.update(u, {
                                expiry: h
                            })
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.updateMetadata = function() {
                        var a = (0, v.Z)(function*({
                            topic: u,
                            metadata: h
                        }) {
                            o.isInitialized(), yield o.pairings.update(u, {
                                peerMetadata: h
                            })
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = function() {
                        var a = (0, v.Z)(function*(u) {
                            o.isInitialized(), yield o.isValidDisconnect(u);
                            const {
                                topic: h
                            } = u;
                            o.pairings.keys.includes(h) && (yield o.sendRequest(h, "wc_pairingDelete", (0, m.D6)("USER_DISCONNECTED")), yield o.deletePairing(h))
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var a = (0, v.Z)(function*(u, h, b) {
                            const C = Kr(h, b),
                                O = yield o.core.crypto.encode(u, C), N = Ki[h].req;
                            return o.core.history.set(u, C), o.core.relayer.publish(u, O, N), C.id
                        });
                        return function(u, h, b) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var a = (0, v.Z)(function*(u, h, b) {
                            const C = Xn(u, b),
                                O = yield o.core.crypto.encode(h, C), N = yield o.core.history.get(h, u), H = Ki[N.request.method].res;
                            yield o.core.relayer.publish(h, O, H), yield o.core.history.resolve(C)
                        });
                        return function(u, h, b) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var a = (0, v.Z)(function*(u, h, b) {
                            const C = bi(u, b),
                                O = yield o.core.crypto.encode(h, C), N = yield o.core.history.get(h, u), H = Ki[N.request.method] ? Ki[N.request.method].res : Ki.unregistered_method.res;
                            yield o.core.relayer.publish(h, O, H), yield o.core.history.resolve(C)
                        });
                        return function(u, h, b) {
                            return a.apply(this, arguments)
                        }
                    }(), this.deletePairing = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            yield o.core.relayer.unsubscribe(u), yield Promise.all([o.pairings.delete(u, (0, m.D6)("USER_DISCONNECTED")), o.core.crypto.deleteSymKey(u), h ? Promise.resolve() : o.core.expirer.del(u)])
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, v.Z)(function*() {
                        const a = o.pairings.getAll().filter(u => (0, m.Bw)(u.expiry));
                        yield Promise.all(a.map(u => o.deletePairing(u.topic)))
                    }), this.onRelayEventRequest = a => {
                        const {
                            topic: u,
                            payload: h
                        } = a;
                        switch (h.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(u, h);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(u, h);
                            default:
                                return this.onUnknownRpcMethodRequest(u, h)
                        }
                    }, this.onRelayEventResponse = function() {
                        var a = (0, v.Z)(function*(u) {
                            const {
                                topic: h,
                                payload: b
                            } = u, C = (yield o.core.history.get(h, b.id)).request.method;
                            return "wc_pairingPing" === C ? o.onPairingPingResponse(h, b) : o.onUnknownRpcMethodResponse(C)
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onPairingPingRequest = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            const {
                                id: b
                            } = h;
                            try {
                                o.isValidPing({
                                    topic: u
                                }), yield o.sendResult(b, u, !0), o.events.emit("pairing_ping", {
                                    id: b,
                                    topic: u
                                })
                            } catch (C) {
                                yield o.sendError(b, u, C), o.logger.error(C)
                            }
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onPairingPingResponse = (a, u) => {
                        const {
                            id: h
                        } = u;
                        setTimeout(() => {
                            Ft(u) ? this.events.emit((0, m.E0)("pairing_ping", h), {}) : Pt(u) && this.events.emit((0, m.E0)("pairing_ping", h), {
                                error: u.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            const {
                                id: b
                            } = h;
                            try {
                                o.isValidDisconnect({
                                    topic: u
                                }), yield o.deletePairing(u), o.events.emit("pairing_delete", {
                                    id: b,
                                    topic: u
                                })
                            } catch (C) {
                                yield o.sendError(b, u, C), o.logger.error(C)
                            }
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodRequest = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            const {
                                id: b,
                                method: C
                            } = h;
                            try {
                                if (o.registeredMethods.includes(C)) return;
                                const O = (0, m.D6)("WC_METHOD_UNSUPPORTED", C);
                                yield o.sendError(b, u, O), o.logger.error(O)
                            } catch (O) {
                                yield o.sendError(b, u, O), o.logger.error(O)
                            }
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodResponse = a => {
                        this.registeredMethods.includes(a) || this.logger.error((0, m.D6)("WC_METHOD_UNSUPPORTED", a))
                    }, this.isValidPair = a => {
                        var u;
                        if (!(0, m.EJ)(a)) {
                            const {
                                message: b
                            } = (0, m.Z7)("MISSING_OR_INVALID", `pair() params: ${a}`);
                            throw new Error(b)
                        }
                        if (!(0, m.jv)(a.uri)) {
                            const {
                                message: b
                            } = (0, m.Z7)("MISSING_OR_INVALID", `pair() uri: ${a.uri}`);
                            throw new Error(b)
                        }
                        const h = (0, m.he)(a.uri);
                        if (null == (u = h ? .relay) || !u.protocol) {
                            const {
                                message: b
                            } = (0, m.Z7)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw new Error(b)
                        }
                        if (null == h || !h.symKey) {
                            const {
                                message: b
                            } = (0, m.Z7)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw new Error(b)
                        }
                    }, this.isValidPing = function() {
                        var a = (0, v.Z)(function*(u) {
                            if (!(0, m.EJ)(u)) {
                                const {
                                    message: b
                                } = (0, m.Z7)("MISSING_OR_INVALID", `ping() params: ${u}`);
                                throw new Error(b)
                            }
                            const {
                                topic: h
                            } = u;
                            yield o.isValidPairingTopic(h)
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var a = (0, v.Z)(function*(u) {
                            if (!(0, m.EJ)(u)) {
                                const {
                                    message: b
                                } = (0, m.Z7)("MISSING_OR_INVALID", `disconnect() params: ${u}`);
                                throw new Error(b)
                            }
                            const {
                                topic: h
                            } = u;
                            yield o.isValidPairingTopic(h)
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidPairingTopic = function() {
                        var a = (0, v.Z)(function*(u) {
                            if (!(0, m.M_)(u, !1)) {
                                const {
                                    message: h
                                } = (0, m.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${u}`);
                                throw new Error(h)
                            }
                            if (!o.pairings.keys.includes(u)) {
                                const {
                                    message: h
                                } = (0, m.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${u}`);
                                throw new Error(h)
                            }
                            if ((0, m.Bw)(o.pairings.get(u).expiry)) {
                                yield o.deletePairing(u);
                                const {
                                    message: h
                                } = (0, m.Z7)("EXPIRED", `pairing topic: ${u}`);
                                throw new Error(h)
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.core = r, this.logger = (0, Te.generateChildLogger)(t, this.name), this.pairings = new Ds(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
                registerRelayerEvents() {
                    var r = this;
                    this.core.relayer.on("relayer_message", function() {
                        var t = (0, v.Z)(function*(o) {
                            const {
                                topic: a,
                                message: u
                            } = o;
                            if (!r.pairings.keys.includes(a) || r.ignoredPayloadTypes.includes(r.core.crypto.getPayloadType(u))) return;
                            const h = yield r.core.crypto.decode(a, u);
                            try {
                                Or(h) ? (r.core.history.set(a, h), r.onRelayEventRequest({
                                    topic: a,
                                    payload: h
                                })) : Bt(h) && (yield r.core.history.resolve(h), yield r.onRelayEventResponse({
                                    topic: a,
                                    payload: h
                                }), r.core.history.delete(a, h.id))
                            } catch (b) {
                                r.logger.error(b)
                            }
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var r = this;
                    this.core.expirer.on(Vr_expired, function() {
                        var t = (0, v.Z)(function*(o) {
                            const {
                                topic: a
                            } = (0, m.iP)(o.target);
                            a && r.pairings.keys.includes(a) && (yield r.deletePairing(a, !0), r.events.emit("pairing_expire", {
                                topic: a
                            }))
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }
            class tg extends mn {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.core = r, this.logger = t, this.records = new Map, this.events = new ye.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Mn, this.init = (0, v.Z)(function*() {
                        o.initialized || (o.logger.trace("Initialized"), yield o.restore(), o.cached.forEach(a => o.records.set(a.id, a)), o.cached = [], o.registerEventListeners(), o.initialized = !0)
                    }), this.set = (a, u, h) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: a,
                                request: u,
                                chainId: h
                            }), this.records.has(u.id)) return;
                        const b = {
                            id: u.id,
                            topic: a,
                            request: {
                                method: u.method,
                                params: u.params || null
                            },
                            chainId: h,
                            expiry: (0, m.gn)(Ae.THIRTY_DAYS)
                        };
                        this.records.set(b.id, b), this.events.emit("history_created", b)
                    }, this.resolve = function() {
                        var a = (0, v.Z)(function*(u) {
                            if (o.isInitialized(), o.logger.debug("Updating JSON-RPC response history record"), o.logger.trace({
                                    type: "method",
                                    method: "update",
                                    response: u
                                }), !o.records.has(u.id)) return;
                            const h = yield o.getRecord(u.id);
                            typeof h.response > "u" && (h.response = Pt(u) ? {
                                error: u.error
                            } : {
                                result: u.result
                            }, o.records.set(h.id, h), o.events.emit("history_updated", h))
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.get = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            return o.isInitialized(), o.logger.debug("Getting record"), o.logger.trace({
                                type: "method",
                                method: "get",
                                topic: u,
                                id: h
                            }), yield o.getRecord(h)
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.delete = (a, u) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: u
                        }), this.values.forEach(h => {
                            if (h.topic === a) {
                                if (typeof u < "u" && h.id !== u) return;
                                this.records.delete(h.id), this.events.emit("history_deleted", h)
                            }
                        })
                    }, this.exists = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            return o.isInitialized(), !!o.records.has(h) && (yield o.getRecord(h)).topic === u
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.on = (a, u) => {
                        this.events.on(a, u)
                    }, this.once = (a, u) => {
                        this.events.once(a, u)
                    }, this.off = (a, u) => {
                        this.events.off(a, u)
                    }, this.removeListener = (a, u) => {
                        this.events.removeListener(a, u)
                    }, this.logger = (0, Te.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const r = [];
                    return this.values.forEach(t => {
                        if (typeof t.response < "u") return;
                        const o = {
                            topic: t.topic,
                            request: Kr(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return r.push(o)
                    }), r
                }
                setJsonRpcRecords(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, r)
                    })()
                }
                getJsonRpcRecords() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return yield r.core.storage.getItem(r.storageKey)
                    })()
                }
                getRecord(r) {
                    this.isInitialized();
                    const t = this.records.get(r);
                    if (!t) {
                        const {
                            message: o
                        } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${r}`);
                        throw new Error(o)
                    }
                    return t
                }
                persist() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        yield r.setJsonRpcRecords(r.values), r.events.emit("history_sync")
                    })()
                }
                restore() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        try {
                            const t = yield r.getJsonRpcRecords();
                            if (typeof t > "u" || !t.length) return;
                            if (r.records.size) {
                                const {
                                    message: o
                                } = (0, m.Z7)("RESTORE_WILL_OVERRIDE", r.name);
                                throw r.logger.error(o), new Error(o)
                            }
                            r.cached = t, r.logger.debug(`Successfully Restored records for ${r.name}`), r.logger.trace({
                                type: "method",
                                method: "restore",
                                records: r.values
                            })
                        } catch (t) {
                            r.logger.debug(`Failed to Restore records for ${r.name}`), r.logger.error(t)
                        }
                    })()
                }
                registerEventListeners() {
                    this.events.on("history_created", r => {
                        const t = "history_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: r
                        }), this.persist()
                    }), this.events.on("history_updated", r => {
                        const t = "history_updated";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: r
                        }), this.persist()
                    }), this.events.on("history_deleted", r => {
                        const t = "history_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: r
                        }), this.persist()
                    }), this.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(r => {
                            (0, Ae.toMiliseconds)(r.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${r.id}`), this.delete(r.topic, r.id))
                        })
                    } catch (r) {
                        this.logger.warn(r)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class rg extends Xt {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.core = r, this.logger = t, this.expirations = new Map, this.events = new ye.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Mn, this.init = (0, v.Z)(function*() {
                        o.initialized || (o.logger.trace("Initialized"), yield o.restore(), o.cached.forEach(a => o.expirations.set(a.target, a)), o.cached = [], o.registerEventListeners(), o.initialized = !0)
                    }), this.has = a => {
                        try {
                            const u = this.formatTarget(a);
                            return typeof this.getExpiration(u) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (a, u) => {
                        this.isInitialized();
                        const h = this.formatTarget(a),
                            b = {
                                target: h,
                                expiry: u
                            };
                        this.expirations.set(h, b), this.checkExpiry(h, b), this.events.emit("expirer_created", {
                            target: h,
                            expiration: b
                        })
                    }, this.get = a => {
                        this.isInitialized();
                        const u = this.formatTarget(a);
                        return this.getExpiration(u)
                    }, this.del = a => {
                        if (this.isInitialized(), this.has(a)) {
                            const u = this.formatTarget(a),
                                h = this.getExpiration(u);
                            this.expirations.delete(u), this.events.emit("expirer_deleted", {
                                target: u,
                                expiration: h
                            })
                        }
                    }, this.on = (a, u) => {
                        this.events.on(a, u)
                    }, this.once = (a, u) => {
                        this.events.once(a, u)
                    }, this.off = (a, u) => {
                        this.events.off(a, u)
                    }, this.removeListener = (a, u) => {
                        this.events.removeListener(a, u)
                    }, this.logger = (0, Te.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(r) {
                    if ("string" == typeof r) return (0, m.Z4)(r);
                    if ("number" == typeof r) return (0, m.Gq)(r);
                    const {
                        message: t
                    } = (0, m.Z7)("UNKNOWN_TYPE", "Target type: " + typeof r);
                    throw new Error(t)
                }
                setExpirations(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, r)
                    })()
                }
                getExpirations() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return yield r.core.storage.getItem(r.storageKey)
                    })()
                }
                persist() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        yield r.setExpirations(r.values), r.events.emit("expirer_sync")
                    })()
                }
                restore() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        try {
                            const t = yield r.getExpirations();
                            if (typeof t > "u" || !t.length) return;
                            if (r.expirations.size) {
                                const {
                                    message: o
                                } = (0, m.Z7)("RESTORE_WILL_OVERRIDE", r.name);
                                throw r.logger.error(o), new Error(o)
                            }
                            r.cached = t, r.logger.debug(`Successfully Restored expirations for ${r.name}`), r.logger.trace({
                                type: "method",
                                method: "restore",
                                expirations: r.values
                            })
                        } catch (t) {
                            r.logger.debug(`Failed to Restore expirations for ${r.name}`), r.logger.error(t)
                        }
                    })()
                }
                getExpiration(r) {
                    const t = this.expirations.get(r);
                    if (!t) {
                        const {
                            message: o
                        } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${r}`);
                        throw this.logger.error(o), new Error(o)
                    }
                    return t
                }
                checkExpiry(r, t) {
                    const {
                        expiry: o
                    } = t;
                    (0, Ae.toMiliseconds)(o) - Date.now() <= 0 && this.expire(r, t)
                }
                expire(r, t) {
                    this.expirations.delete(r), this.events.emit(Vr_expired, {
                        target: r,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((r, t) => this.checkExpiry(t, r))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on("expirer_created", r => {
                        const t = "expirer_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: r
                        }), this.persist()
                    }), this.events.on(Vr_expired, r => {
                        const t = Vr_expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: r
                        }), this.persist()
                    }), this.events.on("expirer_deleted", r => {
                        const t = "expirer_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: r
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class ng extends er {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.projectId = r, this.logger = t, this.name = sa, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = function() {
                        var a = (0, v.Z)(function*(u) {
                            if (o.verifyDisabled || (0, m.b$)() || !(0, m.jU)()) return;
                            const h = o.getVerifyUrl(u ? .verifyUrl);
                            o.verifyUrl !== h && o.removeIframe(), o.verifyUrl = h;
                            try {
                                yield o.createIframe()
                            } catch (b) {
                                o.logger.info(`Verify iframe failed to load: ${o.verifyUrl}`), o.logger.info(b)
                            }
                            if (!o.initialized) {
                                o.removeIframe(), o.verifyUrl = oa;
                                try {
                                    yield o.createIframe()
                                } catch (b) {
                                    o.logger.info(`Verify iframe failed to load: ${o.verifyUrl}`), o.logger.info(b), o.verifyDisabled = !0
                                }
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.register = function() {
                        var a = (0, v.Z)(function*(u) {
                            o.initialized ? o.sendPost(u.attestationId) : (o.addToQueue(u.attestationId), yield o.init())
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.resolve = function() {
                        var a = (0, v.Z)(function*(u) {
                            if (o.isDevEnv) return "";
                            const h = o.getVerifyUrl(u ? .verifyUrl);
                            let b;
                            try {
                                b = yield o.fetchAttestation(u.attestationId, h)
                            } catch (C) {
                                o.logger.info(`failed to resolve attestation: ${u.attestationId} from url: ${h}`), o.logger.info(C), b = yield o.fetchAttestation(u.attestationId, oa)
                            }
                            return b
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.fetchAttestation = function() {
                        var a = (0, v.Z)(function*(u, h) {
                            o.logger.info(`resolving attestation: ${u} from url: ${h}`);
                            const b = o.startAbortTimer(2 * Ae.ONE_SECOND),
                                C = yield fetch(`${h}/attestation/${u}`, {
                                    signal: o.abortController.signal
                                });
                            return clearTimeout(b), 200 === C.status ? yield C.json(): void 0
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.addToQueue = a => {
                        this.queue.push(a)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(a => this.sendPost(a)), this.queue = [])
                    }, this.sendPost = a => {
                        var u;
                        try {
                            if (!this.iframe) return;
                            null == (u = this.iframe.contentWindow) || u.postMessage(a, "*"), this.logger.info(`postMessage sent: ${a} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = (0, v.Z)(function*() {
                        let a;
                        const u = h => {
                            "verify_ready" === h.data && (o.initialized = !0, o.processQueue(), window.removeEventListener("message", u), a())
                        };
                        yield Promise.race([new Promise(h => {
                            if (document.getElementById(sa)) return h();
                            window.addEventListener("message", u);
                            const b = document.createElement("iframe");
                            b.id = sa, b.src = `${o.verifyUrl}/${o.projectId}`, b.style.display = "none", document.body.append(b), o.iframe = b, a = h
                        }), new Promise((h, b) => setTimeout(() => {
                            window.removeEventListener("message", u), b("verify iframe load timeout")
                        }, (0, Ae.toMiliseconds)(Ae.FIVE_SECONDS)))])
                    }), this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = a => {
                        let u = a || Ei;
                        return Dp.includes(u) || (this.logger.info(`verify url: ${u}, not included in trusted list, assigning default: ${Ei}`), u = Ei), u
                    }, this.logger = (0, Te.generateChildLogger)(t, this.name), this.verifyUrl = Ei, this.abortController = new AbortController, this.isDevEnv = (0, m.UG)() && process.env.IS_VITEST
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                startAbortTimer(r) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, Ae.toMiliseconds)(r))
                }
            }
            class ig extends qt {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.projectId = r, this.logger = t, this.context = "echo", this.registerDeviceToken = function() {
                        var a = (0, v.Z)(function*(u) {
                            const {
                                clientId: h,
                                token: b,
                                notificationType: C,
                                enableEncrypted: O = !1
                            } = u, N = `https://echo.walletconnect.com/${o.projectId}/clients`;
                            yield jh()(N, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    client_id: h,
                                    type: C,
                                    token: b,
                                    always_raw: O
                                })
                            })
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.logger = (0, Te.generateChildLogger)(t, this.context)
                }
            }
            var sg = Object.defineProperty,
                Eu = Object.getOwnPropertySymbols,
                og = Object.prototype.hasOwnProperty,
                ag = Object.prototype.propertyIsEnumerable,
                Iu = (f, r, t) => r in f ? sg(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                Pu = (f, r) => {
                    for (var t in r || (r = {})) og.call(r, t) && Iu(f, t, r[t]);
                    if (Eu)
                        for (var t of Eu(r)) ag.call(r, t) && Iu(f, t, r[t]);
                    return f
                };
            class ca extends _n {
                constructor(r) {
                    super(r), this.protocol = "wc", this.version = 2, this.name = "core", this.events = new ye.EventEmitter, this.initialized = !1, this.on = (o, a) => this.events.on(o, a), this.once = (o, a) => this.events.once(o, a), this.off = (o, a) => this.events.off(o, a), this.removeListener = (o, a) => this.events.removeListener(o, a), this.projectId = r ? .projectId, this.relayUrl = r ? .relayUrl || pu, this.customStoragePrefix = null != r && r.customStoragePrefix ? `:${r.customStoragePrefix}` : "";
                    const t = typeof r ? .logger < "u" && "string" != typeof r ? .logger ? r.logger : (0, Te.pino)((0, Te.getDefaultLoggerOptions)({
                        level: r ? .logger || "error"
                    }));
                    this.logger = (0, Te.generateChildLogger)(t, this.name), this.heartbeat = new br.HeartBeat, this.crypto = new Fp(this, this.logger, r ? .keychain), this.history = new tg(this, this.logger), this.expirer = new rg(this, this.logger), this.storage = null != r && r.storage ? r.storage : new Tr(Pu(Pu({}, op), r ? .storageOptions)), this.relayer = new Jp({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new eg(this, this.logger), this.verify = new ng(this.projectId || "", this.logger), this.echoClient = new ig(this.projectId || "", this.logger)
                }
                static init(r) {
                    return (0, v.Z)(function*() {
                        const t = new ca(r);
                        yield t.initialize();
                        const o = yield t.crypto.getClientId();
                        return yield t.storage.setItem("WALLETCONNECT_CLIENT_ID", o), t
                    })()
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                start() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.initialized || (yield r.initialize())
                    })()
                }
                initialize() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.logger.trace("Initialized");
                        try {
                            yield r.crypto.init(), yield r.history.init(), yield r.expirer.init(), yield r.relayer.init(), yield r.heartbeat.init(), yield r.pairing.init(), r.initialized = !0, r.logger.info("Core Initialization Success")
                        } catch (t) {
                            throw r.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), r.logger.error(t.message), t
                        }
                    })()
                }
            }
            const cg = ca,
                ua = "wc@2:client:",
                Au = "WALLETCONNECT_DEEPLINK_CHOICE",
                Cu = "Proposal expired",
                Ns = Ae.SEVEN_DAYS,
                Gi = {
                    wc_sessionPropose: {
                        req: {
                            ttl: Ae.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: Ae.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: Ae.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: Ae.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: Ae.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: Ae.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: Ae.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: Ae.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: Ae.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: Ae.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: Ae.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                fa = {
                    min: Ae.FIVE_MINUTES,
                    max: Ae.SEVEN_DAYS
                },
                dg = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var pg = Object.defineProperty,
                gg = Object.defineProperties,
                yg = Object.getOwnPropertyDescriptors,
                Tu = Object.getOwnPropertySymbols,
                vg = Object.prototype.hasOwnProperty,
                _g = Object.prototype.propertyIsEnumerable,
                Du = (f, r, t) => r in f ? pg(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                Dr = (f, r) => {
                    for (var t in r || (r = {})) vg.call(r, t) && Du(f, t, r[t]);
                    if (Tu)
                        for (var t of Tu(r)) _g.call(r, t) && Du(f, t, r[t]);
                    return f
                },
                Wi = (f, r) => gg(f, yg(r));
            class mg extends tr {
                constructor(r) {
                    var t;
                    super(r), t = this, this.name = "engine", this.events = new(be()), this.initialized = !1, this.ignoredPayloadTypes = [m.rV], this.requestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.requestQueueDelay = Ae.ONE_SECOND, this.init = (0, v.Z)(function*() {
                        t.initialized || (yield t.cleanup(), t.registerRelayerEvents(), t.registerExpirerEvents(), t.registerPairingEvents(), t.client.core.pairing.register({
                            methods: Object.keys(Gi)
                        }), t.initialized = !0, setTimeout(() => {
                            t.sessionRequestQueue.queue = t.getPendingSessionRequests(), t.processSessionRequestQueue()
                        }, (0, Ae.toMiliseconds)(t.requestQueueDelay)))
                    }), this.connect = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized();
                            const u = Wi(Dr({}, a), {
                                requiredNamespaces: a.requiredNamespaces || {},
                                optionalNamespaces: a.optionalNamespaces || {}
                            });
                            yield t.isValidConnect(u);
                            const {
                                pairingTopic: h,
                                requiredNamespaces: b,
                                optionalNamespaces: C,
                                sessionProperties: O,
                                relays: N
                            } = u;
                            let Q, H = h,
                                ge = !1;
                            if (H && (ge = t.client.core.pairing.pairings.get(H).active), !H || !ge) {
                                const {
                                    topic: gt,
                                    uri: kt
                                } = yield t.client.core.pairing.create();
                                H = gt, Q = kt
                            }
                            const ue = yield t.client.core.crypto.generateKeyPair(), Ne = Dr({
                                requiredNamespaces: b,
                                optionalNamespaces: C,
                                relays: N ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: ue,
                                    metadata: t.client.metadata
                                }
                            }, O && {
                                sessionProperties: O
                            }), {
                                reject: Be,
                                resolve: tt,
                                done: Kt
                            } = (0, m.H1)(Ae.FIVE_MINUTES, Cu);
                            if (t.events.once((0, m.E0)("session_connect"), function() {
                                    var gt = (0, v.Z)(function*({
                                        error: kt,
                                        session: it
                                    }) {
                                        if (kt) Be(kt);
                                        else if (it) {
                                            it.self.publicKey = ue;
                                            const pr = Wi(Dr({}, it), {
                                                requiredNamespaces: it.requiredNamespaces,
                                                optionalNamespaces: it.optionalNamespaces
                                            });
                                            yield t.client.session.set(it.topic, pr), yield t.setExpiry(it.topic, it.expiry), H && (yield t.client.core.pairing.updateMetadata({
                                                topic: H,
                                                metadata: it.peer.metadata
                                            })), tt(pr)
                                        }
                                    });
                                    return function(kt) {
                                        return gt.apply(this, arguments)
                                    }
                                }()), !H) {
                                const {
                                    message: gt
                                } = (0, m.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${H}`);
                                throw new Error(gt)
                            }
                            const ct = yield t.sendRequest({
                                topic: H,
                                method: "wc_sessionPropose",
                                params: Ne
                            }), Vt = (0, m.gn)(Ae.FIVE_MINUTES);
                            return yield t.setProposal(ct, Dr({
                                id: ct,
                                expiry: Vt
                            }, Ne)), {
                                uri: Q,
                                approval: Kt
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var o = (0, v.Z)(function*(a) {
                            return yield t.isInitialized(), yield t.client.core.pairing.pair(a)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidApprove(a);
                            const {
                                id: u,
                                relayProtocol: h,
                                namespaces: b,
                                sessionProperties: C
                            } = a, O = t.client.proposal.get(u);
                            let {
                                pairingTopic: N,
                                proposer: H,
                                requiredNamespaces: Q,
                                optionalNamespaces: ge
                            } = O;
                            N = N || "", (0, m.L5)(Q) || (Q = (0, m.fc)(b, "approve()"));
                            const ue = yield t.client.core.crypto.generateKeyPair(), Ne = H.publicKey, Be = yield t.client.core.crypto.generateSharedKey(ue, Ne);
                            N && u && (yield t.client.core.pairing.updateMetadata({
                                topic: N,
                                metadata: H.metadata
                            }), yield t.sendResult({
                                id: u,
                                topic: N,
                                result: {
                                    relay: {
                                        protocol: h ? ? "irn"
                                    },
                                    responderPublicKey: ue
                                }
                            }), yield t.client.proposal.delete(u, (0, m.D6)("USER_DISCONNECTED")), yield t.client.core.pairing.activate({
                                topic: N
                            }));
                            const tt = Dr({
                                relay: {
                                    protocol: h ? ? "irn"
                                },
                                namespaces: b,
                                requiredNamespaces: Q,
                                optionalNamespaces: ge,
                                pairingTopic: N,
                                controller: {
                                    publicKey: ue,
                                    metadata: t.client.metadata
                                },
                                expiry: (0, m.gn)(Ns)
                            }, C && {
                                sessionProperties: C
                            });
                            yield t.client.core.relayer.subscribe(Be), yield t.sendRequest({
                                topic: Be,
                                method: "wc_sessionSettle",
                                params: tt,
                                throwOnFailedPublish: !0
                            });
                            const Kt = Wi(Dr({}, tt), {
                                topic: Be,
                                pairingTopic: N,
                                acknowledged: !1,
                                self: tt.controller,
                                peer: {
                                    publicKey: H.publicKey,
                                    metadata: H.metadata
                                },
                                controller: ue
                            });
                            return yield t.client.session.set(Be, Kt), yield t.setExpiry(Be, (0, m.gn)(Ns)), {
                                topic: Be,
                                acknowledged: () => new Promise(ct => setTimeout(() => ct(t.client.session.get(Be)), 500))
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidReject(a);
                            const {
                                id: u,
                                reason: h
                            } = a, {
                                pairingTopic: b
                            } = t.client.proposal.get(u);
                            b && (yield t.sendError(u, b, h), yield t.client.proposal.delete(u, (0, m.D6)("USER_DISCONNECTED")))
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidUpdate(a);
                            const {
                                topic: u,
                                namespaces: h
                            } = a, b = yield t.sendRequest({
                                topic: u,
                                method: "wc_sessionUpdate",
                                params: {
                                    namespaces: h
                                }
                            }), {
                                done: C,
                                resolve: O,
                                reject: N
                            } = (0, m.H1)();
                            return t.events.once((0, m.E0)("session_update", b), ({
                                error: H
                            }) => {
                                H ? N(H) : O()
                            }), yield t.client.session.update(u, {
                                namespaces: h
                            }), {
                                acknowledged: C
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidExtend(a);
                            const {
                                topic: u
                            } = a, h = yield t.sendRequest({
                                topic: u,
                                method: "wc_sessionExtend",
                                params: {}
                            }), {
                                done: b,
                                resolve: C,
                                reject: O
                            } = (0, m.H1)();
                            return t.events.once((0, m.E0)("session_extend", h), ({
                                error: N
                            }) => {
                                N ? O(N) : C()
                            }), yield t.setExpiry(u, (0, m.gn)(Ns)), {
                                acknowledged: b
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidRequest(a);
                            const {
                                chainId: u,
                                request: h,
                                topic: b,
                                expiry: C
                            } = a, O = mi(), {
                                done: N,
                                resolve: H,
                                reject: Q
                            } = (0, m.H1)(C, "Request expired. Please try again.");
                            return t.events.once((0, m.E0)("session_request", O), ({
                                error: ge,
                                result: ue
                            }) => {
                                ge ? Q(ge) : H(ue)
                            }), yield Promise.all([new Promise(function() {
                                var ge = (0, v.Z)(function*(ue) {
                                    yield t.sendRequest({
                                        clientRpcId: O,
                                        topic: b,
                                        method: "wc_sessionRequest",
                                        params: {
                                            request: h,
                                            chainId: u
                                        },
                                        expiry: C,
                                        throwOnFailedPublish: !0
                                    }).catch(Ne => Q(Ne)), t.client.events.emit("session_request_sent", {
                                        topic: b,
                                        request: h,
                                        chainId: u,
                                        id: O
                                    }), ue()
                                });
                                return function(ue) {
                                    return ge.apply(this, arguments)
                                }
                            }()), new Promise(function() {
                                var ge = (0, v.Z)(function*(ue) {
                                    const Ne = yield(0, m.bW)(t.client.core.storage, Au);
                                    (0, m.Hh)({
                                        id: O,
                                        topic: b,
                                        wcDeepLink: Ne
                                    }), ue()
                                });
                                return function(ue) {
                                    return ge.apply(this, arguments)
                                }
                            }()), N()]).then(ge => ge[2])
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidRespond(a);
                            const {
                                topic: u,
                                response: h
                            } = a, {
                                id: b
                            } = h;
                            Ft(h) ? yield t.sendResult({
                                id: b,
                                topic: u,
                                result: h.result,
                                throwOnFailedPublish: !0
                            }): Pt(h) && (yield t.sendError(b, u, h.error)), t.cleanupAfterResponse(a)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidPing(a);
                            const {
                                topic: u
                            } = a;
                            if (t.client.session.keys.includes(u)) {
                                const h = yield t.sendRequest({
                                    topic: u,
                                    method: "wc_sessionPing",
                                    params: {}
                                }), {
                                    done: b,
                                    resolve: C,
                                    reject: O
                                } = (0, m.H1)();
                                t.events.once((0, m.E0)("session_ping", h), ({
                                    error: N
                                }) => {
                                    N ? O(N) : C()
                                }), yield b()
                            } else t.client.core.pairing.pairings.keys.includes(u) && (yield t.client.core.pairing.ping({
                                topic: u
                            }))
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidEmit(a);
                            const {
                                topic: u,
                                event: h,
                                chainId: b
                            } = a;
                            yield t.sendRequest({
                                topic: u,
                                method: "wc_sessionEvent",
                                params: {
                                    event: h,
                                    chainId: b
                                }
                            })
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var o = (0, v.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidDisconnect(a);
                            const {
                                topic: u
                            } = a;
                            t.client.session.keys.includes(u) ? (yield t.sendRequest({
                                topic: u,
                                method: "wc_sessionDelete",
                                params: (0, m.D6)("USER_DISCONNECTED"),
                                throwOnFailedPublish: !0
                            }), yield t.deleteSession(u)) : yield t.client.core.pairing.disconnect({
                                topic: u
                            })
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.find = o => (this.isInitialized(), this.client.session.getAll().filter(a => (0, m.Ih)(a, o))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (a.pairingTopic) try {
                                const u = t.client.core.pairing.pairings.get(a.pairingTopic),
                                    h = t.client.core.pairing.pairings.getAll().filter(b => {
                                        var C, O;
                                        return (null == (C = b.peerMetadata) ? void 0 : C.url) && (null == (O = b.peerMetadata) ? void 0 : O.url) === a.peer.metadata.url && b.topic && b.topic !== u.topic
                                    });
                                if (0 === h.length) return;
                                t.client.logger.info(`Cleaning up ${h.length} duplicate pairing(s)`), yield Promise.all(h.map(b => t.client.core.pairing.disconnect({
                                    topic: b.topic
                                }))), t.client.logger.info("Duplicate pairings clean up finished")
                            } catch (u) {
                                t.client.logger.error(u)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.deleteSession = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                self: h
                            } = t.client.session.get(a);
                            yield t.client.core.relayer.unsubscribe(a), t.client.session.delete(a, (0, m.D6)("USER_DISCONNECTED")), t.client.core.crypto.keychain.has(h.publicKey) && (yield t.client.core.crypto.deleteKeyPair(h.publicKey)), t.client.core.crypto.keychain.has(a) && (yield t.client.core.crypto.deleteSymKey(a)), u || t.client.core.expirer.del(a), t.client.core.storage.removeItem(Au).catch(b => t.client.logger.warn(b)), t.getPendingSessionRequests().forEach(b => {
                                b.topic === a && t.deletePendingSessionRequest(b.id, (0, m.D6)("USER_DISCONNECTED"))
                            })
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.deleteProposal = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            yield Promise.all([t.client.proposal.delete(a, (0, m.D6)("USER_DISCONNECTED")), u ? Promise.resolve() : t.client.core.expirer.del(a)])
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.deletePendingSessionRequest = function() {
                        var o = (0, v.Z)(function*(a, u, h = !1) {
                            yield Promise.all([t.client.pendingRequest.delete(a, u), h ? Promise.resolve() : t.client.core.expirer.del(a)]), t.sessionRequestQueue.queue = t.sessionRequestQueue.queue.filter(b => b.id !== a), h && (t.sessionRequestQueue.state = "IDLE")
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.setExpiry = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            t.client.session.keys.includes(a) && (yield t.client.session.update(a, {
                                expiry: u
                            })), t.client.core.expirer.set(a, u)
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.setProposal = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            yield t.client.proposal.set(a, u), t.client.core.expirer.set(a, u.expiry)
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.setPendingSessionRequest = function() {
                        var o = (0, v.Z)(function*(a) {
                            const u = Gi.wc_sessionRequest.req.ttl,
                                {
                                    id: h,
                                    topic: b,
                                    params: C,
                                    verifyContext: O
                                } = a;
                            yield t.client.pendingRequest.set(h, {
                                id: h,
                                topic: b,
                                params: C,
                                verifyContext: O
                            }), u && t.client.core.expirer.set(h, (0, m.gn)(u))
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var o = (0, v.Z)(function*(a) {
                            const {
                                topic: u,
                                method: h,
                                params: b,
                                expiry: C,
                                relayRpcId: O,
                                clientRpcId: N,
                                throwOnFailedPublish: H
                            } = a, Q = Kr(h, b, N);
                            if ((0, m.jU)() && dg.includes(h)) {
                                const Ne = (0, m.rj)(JSON.stringify(Q));
                                t.client.core.verify.register({
                                    attestationId: Ne
                                })
                            }
                            const ge = yield t.client.core.crypto.encode(u, Q), ue = Gi[h].req;
                            return C && (ue.ttl = C), O && (ue.id = O), t.client.core.history.set(u, Q), H ? (ue.internal = Wi(Dr({}, ue.internal), {
                                throwOnFailedPublish: !0
                            }), yield t.client.core.relayer.publish(u, ge, ue)) : t.client.core.relayer.publish(u, ge, ue).catch(Ne => t.client.logger.error(Ne)), Q.id
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var o = (0, v.Z)(function*(a) {
                            const {
                                id: u,
                                topic: h,
                                result: b,
                                throwOnFailedPublish: C
                            } = a, O = Xn(u, b), N = yield t.client.core.crypto.encode(h, O), H = yield t.client.core.history.get(h, u), Q = Gi[H.request.method].res;
                            C ? (Q.internal = Wi(Dr({}, Q.internal), {
                                throwOnFailedPublish: !0
                            }), yield t.client.core.relayer.publish(h, N, Q)) : t.client.core.relayer.publish(h, N, Q).catch(ge => t.client.logger.error(ge)), yield t.client.core.history.resolve(O)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var o = (0, v.Z)(function*(a, u, h) {
                            const b = bi(a, h),
                                C = yield t.client.core.crypto.encode(u, b), O = yield t.client.core.history.get(u, a);
                            t.client.core.relayer.publish(u, C, Gi[O.request.method].res), yield t.client.core.history.resolve(b)
                        });
                        return function(a, u, h) {
                            return o.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, v.Z)(function*() {
                        const o = [],
                            a = [];
                        t.client.session.getAll().forEach(u => {
                            (0, m.Bw)(u.expiry) && o.push(u.topic)
                        }), t.client.proposal.getAll().forEach(u => {
                            (0, m.Bw)(u.expiry) && a.push(u.id)
                        }), yield Promise.all([...o.map(u => t.deleteSession(u)), ...a.map(u => t.deleteProposal(u))])
                    }), this.onRelayEventRequest = function() {
                        var o = (0, v.Z)(function*(a) {
                            t.requestQueue.queue.push(a), yield t.processRequestsQueue()
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.processRequestsQueue = (0, v.Z)(function*() {
                        if ("ACTIVE" !== t.requestQueue.state) {
                            for (t.client.logger.info(`Request queue starting with ${t.requestQueue.queue.length} requests`); t.requestQueue.queue.length > 0;) {
                                t.requestQueue.state = "ACTIVE";
                                const o = t.requestQueue.queue.shift();
                                if (o) try {
                                    t.processRequest(o), yield new Promise(a => setTimeout(a, 300))
                                } catch (a) {
                                    t.client.logger.warn(a)
                                }
                            }
                            t.requestQueue.state = "IDLE"
                        } else t.client.logger.info("Request queue already active, skipping...")
                    }), this.processRequest = o => {
                        const {
                            topic: a,
                            payload: u
                        } = o, h = u.method;
                        switch (h) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(a, u);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(a, u);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(a, u);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(a, u);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(a, u);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(a, u);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(a, u);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(a, u);
                            default:
                                return this.client.logger.info(`Unsupported request method ${h}`)
                        }
                    }, this.onRelayEventResponse = function() {
                        var o = (0, v.Z)(function*(a) {
                            const {
                                topic: u,
                                payload: h
                            } = a, b = (yield t.client.core.history.get(u, h.id)).request.method;
                            switch (b) {
                                case "wc_sessionPropose":
                                    return t.onSessionProposeResponse(u, h);
                                case "wc_sessionSettle":
                                    return t.onSessionSettleResponse(u, h);
                                case "wc_sessionUpdate":
                                    return t.onSessionUpdateResponse(u, h);
                                case "wc_sessionExtend":
                                    return t.onSessionExtendResponse(u, h);
                                case "wc_sessionPing":
                                    return t.onSessionPingResponse(u, h);
                                case "wc_sessionRequest":
                                    return t.onSessionRequestResponse(u, h);
                                default:
                                    return t.client.logger.info(`Unsupported response method ${b}`)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onRelayEventUnknownPayload = o => {
                        const {
                            topic: a
                        } = o, {
                            message: u
                        } = (0, m.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${a} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(u)
                    }, this.onSessionProposeRequest = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                params: h,
                                id: b
                            } = u;
                            try {
                                t.isValidConnect(Dr({}, u.params));
                                const C = (0, m.gn)(Ae.FIVE_MINUTES),
                                    O = Dr({
                                        id: b,
                                        pairingTopic: a,
                                        expiry: C
                                    }, h);
                                yield t.setProposal(b, O);
                                const N = (0, m.rj)(JSON.stringify(u)),
                                    H = yield t.getVerifyContext(N, O.proposer.metadata);
                                t.client.events.emit("session_proposal", {
                                    id: b,
                                    params: O,
                                    verifyContext: H
                                })
                            } catch (C) {
                                yield t.sendError(b, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionProposeResponse = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            if (Ft(u)) {
                                const {
                                    result: b
                                } = u;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    result: b
                                });
                                const C = t.client.proposal.get(h);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    proposal: C
                                });
                                const O = C.proposer.publicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    selfPublicKey: O
                                });
                                const N = b.responderPublicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    peerPublicKey: N
                                });
                                const H = yield t.client.core.crypto.generateSharedKey(O, N);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    sessionTopic: H
                                });
                                const Q = yield t.client.core.relayer.subscribe(H);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    subscriptionId: Q
                                }), yield t.client.core.pairing.activate({
                                    topic: a
                                })
                            } else Pt(u) && (yield t.client.proposal.delete(h, (0, m.D6)("USER_DISCONNECTED")), t.events.emit((0, m.E0)("session_connect"), {
                                error: u.error
                            }))
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionSettleRequest = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                id: h,
                                params: b
                            } = u;
                            try {
                                t.isValidSessionSettleRequest(b);
                                const {
                                    relay: C,
                                    controller: O,
                                    expiry: N,
                                    namespaces: H,
                                    requiredNamespaces: Q,
                                    optionalNamespaces: ge,
                                    sessionProperties: ue,
                                    pairingTopic: Ne
                                } = u.params, Be = Dr({
                                    topic: a,
                                    relay: C,
                                    expiry: N,
                                    namespaces: H,
                                    acknowledged: !0,
                                    pairingTopic: Ne,
                                    requiredNamespaces: Q,
                                    optionalNamespaces: ge,
                                    controller: O.publicKey,
                                    self: {
                                        publicKey: "",
                                        metadata: t.client.metadata
                                    },
                                    peer: {
                                        publicKey: O.publicKey,
                                        metadata: O.metadata
                                    }
                                }, ue && {
                                    sessionProperties: ue
                                });
                                yield t.sendResult({
                                    id: u.id,
                                    topic: a,
                                    result: !0
                                }), t.events.emit((0, m.E0)("session_connect"), {
                                    session: Be
                                }), t.cleanupDuplicatePairings(Be)
                            } catch (C) {
                                yield t.sendError(h, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionSettleResponse = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            Ft(u) ? (yield t.client.session.update(a, {
                                acknowledged: !0
                            }), t.events.emit((0, m.E0)("session_approve", h), {})) : Pt(u) && (yield t.client.session.delete(a, (0, m.D6)("USER_DISCONNECTED")), t.events.emit((0, m.E0)("session_approve", h), {
                                error: u.error
                            }))
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionUpdateRequest = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                params: h,
                                id: b
                            } = u;
                            try {
                                const C = `${a}_session_update`,
                                    O = m.O6.get(C);
                                if (O && t.isRequestOutOfSync(O, b)) return void t.client.logger.info(`Discarding out of sync request - ${b}`);
                                t.isValidUpdate(Dr({
                                    topic: a
                                }, h)), yield t.client.session.update(a, {
                                    namespaces: h.namespaces
                                }), yield t.sendResult({
                                    id: b,
                                    topic: a,
                                    result: !0
                                }), t.client.events.emit("session_update", {
                                    id: b,
                                    topic: a,
                                    params: h
                                }), m.O6.set(C, b)
                            } catch (C) {
                                yield t.sendError(b, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isRequestOutOfSync = (o, a) => parseInt(a.toString().slice(0, -3)) <= parseInt(o.toString().slice(0, -3)), this.onSessionUpdateResponse = (o, a) => {
                        const {
                            id: u
                        } = a;
                        Ft(a) ? this.events.emit((0, m.E0)("session_update", u), {}) : Pt(a) && this.events.emit((0, m.E0)("session_update", u), {
                            error: a.error
                        })
                    }, this.onSessionExtendRequest = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            try {
                                t.isValidExtend({
                                    topic: a
                                }), yield t.setExpiry(a, (0, m.gn)(Ns)), yield t.sendResult({
                                    id: h,
                                    topic: a,
                                    result: !0
                                }), t.client.events.emit("session_extend", {
                                    id: h,
                                    topic: a
                                })
                            } catch (b) {
                                yield t.sendError(h, a, b), t.client.logger.error(b)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionExtendResponse = (o, a) => {
                        const {
                            id: u
                        } = a;
                        Ft(a) ? this.events.emit((0, m.E0)("session_extend", u), {}) : Pt(a) && this.events.emit((0, m.E0)("session_extend", u), {
                            error: a.error
                        })
                    }, this.onSessionPingRequest = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            try {
                                t.isValidPing({
                                    topic: a
                                }), yield t.sendResult({
                                    id: h,
                                    topic: a,
                                    result: !0
                                }), t.client.events.emit("session_ping", {
                                    id: h,
                                    topic: a
                                })
                            } catch (b) {
                                yield t.sendError(h, a, b), t.client.logger.error(b)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionPingResponse = (o, a) => {
                        const {
                            id: u
                        } = a;
                        setTimeout(() => {
                            Ft(a) ? this.events.emit((0, m.E0)("session_ping", u), {}) : Pt(a) && this.events.emit((0, m.E0)("session_ping", u), {
                                error: a.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            try {
                                t.isValidDisconnect({
                                    topic: a,
                                    reason: u.params
                                }), yield Promise.all([new Promise(b => {
                                    t.client.core.relayer.once("relayer_publish", (0, v.Z)(function*() {
                                        b(yield t.deleteSession(a))
                                    }))
                                }), t.sendResult({
                                    id: h,
                                    topic: a,
                                    result: !0
                                })]), t.client.events.emit("session_delete", {
                                    id: h,
                                    topic: a
                                })
                            } catch (b) {
                                t.client.logger.error(b)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionRequest = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                id: h,
                                params: b
                            } = u;
                            try {
                                t.isValidRequest(Dr({
                                    topic: a
                                }, b));
                                const C = (0, m.rj)(JSON.stringify(Kr("wc_sessionRequest", b, h))),
                                    O = t.client.session.get(a),
                                    H = {
                                        id: h,
                                        topic: a,
                                        params: b,
                                        verifyContext: yield t.getVerifyContext(C, O.peer.metadata)
                                    };
                                yield t.setPendingSessionRequest(H), t.addSessionRequestToSessionRequestQueue(H), t.processSessionRequestQueue()
                            } catch (C) {
                                yield t.sendError(h, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionRequestResponse = (o, a) => {
                        const {
                            id: u
                        } = a;
                        Ft(a) ? this.events.emit((0, m.E0)("session_request", u), {
                            result: a.result
                        }) : Pt(a) && this.events.emit((0, m.E0)("session_request", u), {
                            error: a.error
                        })
                    }, this.onSessionEventRequest = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const {
                                id: h,
                                params: b
                            } = u;
                            try {
                                const C = `${a}_session_event_${b.event.name}`,
                                    O = m.O6.get(C);
                                if (O && t.isRequestOutOfSync(O, h)) return void t.client.logger.info(`Discarding out of sync request - ${h}`);
                                t.isValidEmit(Dr({
                                    topic: a
                                }, b)), t.client.events.emit("session_event", {
                                    id: h,
                                    topic: a,
                                    params: b
                                }), m.O6.set(C, h)
                            } catch (C) {
                                yield t.sendError(h, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.addSessionRequestToSessionRequestQueue = o => {
                        this.sessionRequestQueue.queue.push(o)
                    }, this.cleanupAfterResponse = o => {
                        this.deletePendingSessionRequest(o.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = "IDLE", this.processSessionRequestQueue()
                        }, (0, Ae.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if ("ACTIVE" === this.sessionRequestQueue.state) return void this.client.logger.info("session request queue is already active.");
                        const o = this.sessionRequestQueue.queue[0];
                        if (o) try {
                            this.sessionRequestQueue.state = "ACTIVE", this.client.events.emit("session_request", o)
                        } catch (a) {
                            this.client.logger.error(a)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.onPairingCreated = o => {
                        if (o.active) return;
                        const a = this.client.proposal.getAll().find(u => u.pairingTopic === o.topic);
                        a && this.onSessionProposeRequest(o.topic, Kr("wc_sessionPropose", {
                            requiredNamespaces: a.requiredNamespaces,
                            optionalNamespaces: a.optionalNamespaces,
                            relays: a.relays,
                            proposer: a.proposer,
                            sessionProperties: a.sessionProperties
                        }, a.id))
                    }, this.isValidConnect = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (!(0, m.EJ)(a)) {
                                const {
                                    message: N
                                } = (0, m.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(a)}`);
                                throw new Error(N)
                            }
                            const {
                                pairingTopic: u,
                                requiredNamespaces: h,
                                optionalNamespaces: b,
                                sessionProperties: C,
                                relays: O
                            } = a;
                            if ((0, m.o8)(u) || (yield t.isValidPairingTopic(u)), !(0, m.PM)(O, !0)) {
                                const {
                                    message: N
                                } = (0, m.Z7)("MISSING_OR_INVALID", `connect() relays: ${O}`);
                                throw new Error(N)
                            }!(0, m.o8)(h) && 0 !== (0, m.L5)(h) && t.validateNamespaces(h, "requiredNamespaces"), !(0, m.o8)(b) && 0 !== (0, m.L5)(b) && t.validateNamespaces(b, "optionalNamespaces"), (0, m.o8)(C) || t.validateSessionProps(C, "sessionProperties")
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.validateNamespaces = (o, a) => {
                        const u = (0, m.n)(o, "connect()", a);
                        if (u) throw new Error(u.message)
                    }, this.isValidApprove = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (!(0, m.EJ)(a)) throw new Error((0, m.Z7)("MISSING_OR_INVALID", `approve() params: ${a}`).message);
                            const {
                                id: u,
                                namespaces: h,
                                relayProtocol: b,
                                sessionProperties: C
                            } = a;
                            yield t.isValidProposalId(u);
                            const O = t.client.proposal.get(u),
                                N = (0, m.in)(h, "approve()");
                            if (N) throw new Error(N.message);
                            const H = (0, m.rF)(O.requiredNamespaces, h, "approve()");
                            if (H) throw new Error(H.message);
                            if (!(0, m.M_)(b, !0)) {
                                const {
                                    message: Q
                                } = (0, m.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${b}`);
                                throw new Error(Q)
                            }(0, m.o8)(C) || t.validateSessionProps(C, "sessionProperties")
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidReject = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (!(0, m.EJ)(a)) {
                                const {
                                    message: b
                                } = (0, m.Z7)("MISSING_OR_INVALID", `reject() params: ${a}`);
                                throw new Error(b)
                            }
                            const {
                                id: u,
                                reason: h
                            } = a;
                            if (yield t.isValidProposalId(u), !(0, m.$t)(h)) {
                                const {
                                    message: b
                                } = (0, m.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(h)}`);
                                throw new Error(b)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidSessionSettleRequest = o => {
                        if (!(0, m.EJ)(o)) {
                            const {
                                message: N
                            } = (0, m.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${o}`);
                            throw new Error(N)
                        }
                        const {
                            relay: a,
                            controller: u,
                            namespaces: h,
                            expiry: b
                        } = o;
                        if (!(0, m.Z2)(a)) {
                            const {
                                message: N
                            } = (0, m.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(N)
                        }
                        const C = (0, m.Dd)(u, "onSessionSettleRequest()");
                        if (C) throw new Error(C.message);
                        const O = (0, m.in)(h, "onSessionSettleRequest()");
                        if (O) throw new Error(O.message);
                        if ((0, m.Bw)(b)) {
                            const {
                                message: N
                            } = (0, m.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(N)
                        }
                    }, this.isValidUpdate = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (!(0, m.EJ)(a)) {
                                const {
                                    message: N
                                } = (0, m.Z7)("MISSING_OR_INVALID", `update() params: ${a}`);
                                throw new Error(N)
                            }
                            const {
                                topic: u,
                                namespaces: h
                            } = a;
                            yield t.isValidSessionTopic(u);
                            const b = t.client.session.get(u),
                                C = (0, m.in)(h, "update()");
                            if (C) throw new Error(C.message);
                            const O = (0, m.rF)(b.requiredNamespaces, h, "update()");
                            if (O) throw new Error(O.message)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidExtend = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (!(0, m.EJ)(a)) {
                                const {
                                    message: h
                                } = (0, m.Z7)("MISSING_OR_INVALID", `extend() params: ${a}`);
                                throw new Error(h)
                            }
                            const {
                                topic: u
                            } = a;
                            yield t.isValidSessionTopic(u)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidRequest = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (!(0, m.EJ)(a)) {
                                const {
                                    message: N
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() params: ${a}`);
                                throw new Error(N)
                            }
                            const {
                                topic: u,
                                request: h,
                                chainId: b,
                                expiry: C
                            } = a;
                            yield t.isValidSessionTopic(u);
                            const {
                                namespaces: O
                            } = t.client.session.get(u);
                            if (!(0, m.p8)(O, b)) {
                                const {
                                    message: N
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() chainId: ${b}`);
                                throw new Error(N)
                            }
                            if (!(0, m.hH)(h)) {
                                const {
                                    message: N
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(h)}`);
                                throw new Error(N)
                            }
                            if (!(0, m.al)(O, b, h.method)) {
                                const {
                                    message: N
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() method: ${h.method}`);
                                throw new Error(N)
                            }
                            if (C && !(0, m.ON)(C, fa)) {
                                const {
                                    message: N
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() expiry: ${C}. Expiry must be a number (in seconds) between ${fa.min} and ${fa.max}`);
                                throw new Error(N)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidRespond = function() {
                        var o = (0, v.Z)(function*(a) {
                            var u;
                            if (!(0, m.EJ)(a)) {
                                const {
                                    message: C
                                } = (0, m.Z7)("MISSING_OR_INVALID", `respond() params: ${a}`);
                                throw new Error(C)
                            }
                            const {
                                topic: h,
                                response: b
                            } = a;
                            try {
                                yield t.isValidSessionTopic(h)
                            } catch (C) {
                                throw null != (u = a ? .response) && u.id && t.cleanupAfterResponse(a), C
                            }
                            if (!(0, m.JT)(b)) {
                                const {
                                    message: C
                                } = (0, m.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(b)}`);
                                throw new Error(C)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidPing = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (!(0, m.EJ)(a)) {
                                const {
                                    message: h
                                } = (0, m.Z7)("MISSING_OR_INVALID", `ping() params: ${a}`);
                                throw new Error(h)
                            }
                            const {
                                topic: u
                            } = a;
                            yield t.isValidSessionOrPairingTopic(u)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidEmit = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (!(0, m.EJ)(a)) {
                                const {
                                    message: O
                                } = (0, m.Z7)("MISSING_OR_INVALID", `emit() params: ${a}`);
                                throw new Error(O)
                            }
                            const {
                                topic: u,
                                event: h,
                                chainId: b
                            } = a;
                            yield t.isValidSessionTopic(u);
                            const {
                                namespaces: C
                            } = t.client.session.get(u);
                            if (!(0, m.p8)(C, b)) {
                                const {
                                    message: O
                                } = (0, m.Z7)("MISSING_OR_INVALID", `emit() chainId: ${b}`);
                                throw new Error(O)
                            }
                            if (!(0, m.nf)(h)) {
                                const {
                                    message: O
                                } = (0, m.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(h)}`);
                                throw new Error(O)
                            }
                            if (!(0, m.sI)(C, b, h.name)) {
                                const {
                                    message: O
                                } = (0, m.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(h)}`);
                                throw new Error(O)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var o = (0, v.Z)(function*(a) {
                            if (!(0, m.EJ)(a)) {
                                const {
                                    message: h
                                } = (0, m.Z7)("MISSING_OR_INVALID", `disconnect() params: ${a}`);
                                throw new Error(h)
                            }
                            const {
                                topic: u
                            } = a;
                            yield t.isValidSessionOrPairingTopic(u)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.getVerifyContext = function() {
                        var o = (0, v.Z)(function*(a, u) {
                            const h = {
                                verified: {
                                    verifyUrl: u.verifyUrl || Ei,
                                    validation: "UNKNOWN",
                                    origin: u.url || ""
                                }
                            };
                            try {
                                const b = yield t.client.core.verify.resolve({
                                    attestationId: a,
                                    verifyUrl: u.verifyUrl
                                });
                                b && (h.verified.origin = b.origin, h.verified.isScam = b.isScam, h.verified.validation = b.origin === new URL(u.url).origin ? "VALID" : "INVALID")
                            } catch (b) {
                                t.client.logger.info(b)
                            }
                            return t.client.logger.info(`Verify context: ${JSON.stringify(h)}`), h
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.validateSessionProps = (o, a) => {
                        Object.values(o).forEach(u => {
                            if (!(0, m.M_)(u, !1)) {
                                const {
                                    message: h
                                } = (0, m.Z7)("MISSING_OR_INVALID", `${a} must be in Record<string, string> format. Received: ${JSON.stringify(u)}`);
                                throw new Error(h)
                            }
                        })
                    }
                }
                isInitialized() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        if (!r.initialized) {
                            const {
                                message: t
                            } = (0, m.Z7)("NOT_INITIALIZED", r.name);
                            throw new Error(t)
                        }
                        yield r.client.core.relayer.confirmOnlineStateOrThrow()
                    })()
                }
                registerRelayerEvents() {
                    var r = this;
                    this.client.core.relayer.on("relayer_message", function() {
                        var t = (0, v.Z)(function*(o) {
                            const {
                                topic: a,
                                message: u
                            } = o;
                            if (r.ignoredPayloadTypes.includes(r.client.core.crypto.getPayloadType(u))) return;
                            const h = yield r.client.core.crypto.decode(a, u);
                            try {
                                Or(h) ? (r.client.core.history.set(a, h), r.onRelayEventRequest({
                                    topic: a,
                                    payload: h
                                })) : Bt(h) ? (yield r.client.core.history.resolve(h), yield r.onRelayEventResponse({
                                    topic: a,
                                    payload: h
                                }), r.client.core.history.delete(a, h.id)) : r.onRelayEventUnknownPayload({
                                    topic: a,
                                    payload: h
                                })
                            } catch (b) {
                                r.client.logger.error(b)
                            }
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var r = this;
                    this.client.core.expirer.on(Vr_expired, function() {
                        var t = (0, v.Z)(function*(o) {
                            const {
                                topic: a,
                                id: u
                            } = (0, m.iP)(o.target);
                            if (u && r.client.pendingRequest.keys.includes(u)) return yield r.deletePendingSessionRequest(u, (0, m.Z7)("EXPIRED"), !0);
                            a ? r.client.session.keys.includes(a) && (yield r.deleteSession(a, !0), r.client.events.emit("session_expire", {
                                topic: a
                            })) : u && (yield r.deleteProposal(u, !0), r.client.events.emit("proposal_expire", {
                                id: u
                            }))
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on("pairing_create", r => this.onPairingCreated(r))
                }
                isValidPairingTopic(r) {
                    if (!(0, m.M_)(r, !1)) {
                        const {
                            message: t
                        } = (0, m.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
                        throw new Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(r)) {
                        const {
                            message: t
                        } = (0, m.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
                        throw new Error(t)
                    }
                    if ((0, m.Bw)(this.client.core.pairing.pairings.get(r).expiry)) {
                        const {
                            message: t
                        } = (0, m.Z7)("EXPIRED", `pairing topic: ${r}`);
                        throw new Error(t)
                    }
                }
                isValidSessionTopic(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (!(0, m.M_)(r, !1)) {
                            const {
                                message: o
                            } = (0, m.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${r}`);
                            throw new Error(o)
                        }
                        if (!t.client.session.keys.includes(r)) {
                            const {
                                message: o
                            } = (0, m.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${r}`);
                            throw new Error(o)
                        }
                        if ((0, m.Bw)(t.client.session.get(r).expiry)) {
                            yield t.deleteSession(r);
                            const {
                                message: o
                            } = (0, m.Z7)("EXPIRED", `session topic: ${r}`);
                            throw new Error(o)
                        }
                    })()
                }
                isValidSessionOrPairingTopic(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (t.client.session.keys.includes(r)) yield t.isValidSessionTopic(r);
                        else {
                            if (!t.client.core.pairing.pairings.keys.includes(r)) {
                                if ((0, m.M_)(r, !1)) {
                                    const {
                                        message: o
                                    } = (0, m.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r}`);
                                    throw new Error(o)
                                } {
                                    const {
                                        message: o
                                    } = (0, m.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r}`);
                                    throw new Error(o)
                                }
                            }
                            t.isValidPairingTopic(r)
                        }
                    })()
                }
                isValidProposalId(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (!(0, m.Q0)(r)) {
                            const {
                                message: o
                            } = (0, m.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${r}`);
                            throw new Error(o)
                        }
                        if (!t.client.proposal.keys.includes(r)) {
                            const {
                                message: o
                            } = (0, m.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${r}`);
                            throw new Error(o)
                        }
                        if ((0, m.Bw)(t.client.proposal.get(r).expiry)) {
                            yield t.deleteProposal(r);
                            const {
                                message: o
                            } = (0, m.Z7)("EXPIRED", `proposal id: ${r}`);
                            throw new Error(o)
                        }
                    })()
                }
            }
            class bg extends Ds {
                constructor(r, t) {
                    super(r, t, "proposal", ua), this.core = r, this.logger = t
                }
            }
            class wg extends Ds {
                constructor(r, t) {
                    super(r, t, "session", ua), this.core = r, this.logger = t
                }
            }
            class xg extends Ds {
                constructor(r, t) {
                    super(r, t, "request", ua, o => o.id), this.core = r, this.logger = t
                }
            }
            class ha extends _t {
                constructor(r) {
                    var t;
                    super(r), t = this, this.protocol = "wc", this.version = 2, this.name = "client", this.events = new ye.EventEmitter, this.on = (a, u) => this.events.on(a, u), this.once = (a, u) => this.events.once(a, u), this.off = (a, u) => this.events.off(a, u), this.removeListener = (a, u) => this.events.removeListener(a, u), this.removeAllListeners = a => this.events.removeAllListeners(a), this.connect = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.connect(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.pair(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.approve(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.reject(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.update(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.extend(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.request(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.respond(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.ping(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.emit(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var a = (0, v.Z)(function*(u) {
                            try {
                                return yield t.engine.disconnect(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.find = a => {
                        try {
                            return this.engine.find(a)
                        } catch (u) {
                            throw this.logger.error(u.message), u
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (a) {
                            throw this.logger.error(a.message), a
                        }
                    }, this.name = r ? .name || "client", this.metadata = r ? .metadata || (0, m.D)();
                    const o = typeof r ? .logger < "u" && "string" != typeof r ? .logger ? r.logger : (0, Te.pino)((0, Te.getDefaultLoggerOptions)({
                        level: r ? .logger || "error"
                    }));
                    this.core = r ? .core || new cg(r), this.logger = (0, Te.generateChildLogger)(o, this.name), this.session = new wg(this.core, this.logger), this.proposal = new bg(this.core, this.logger), this.pendingRequest = new xg(this.core, this.logger), this.engine = new mg(this)
                }
                static init(r) {
                    return (0, v.Z)(function*() {
                        const t = new ha(r);
                        return yield t.initialize(), t
                    })()
                }
                get context() {
                    return (0, Te.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                initialize() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.logger.trace("Initialized");
                        try {
                            yield r.core.start(), yield r.session.init(), yield r.proposal.init(), yield r.pendingRequest.init(), yield r.engine.init(), r.core.verify.init({
                                verifyUrl: r.metadata.verifyUrl
                            }), r.logger.info("SignClient Initialization Success")
                        } catch (t) {
                            throw r.logger.info("SignClient Initialization Failure"), r.logger.error(t.message), t
                        }
                    })()
                }
            }
            var Eg = ie(2055),
                Nu = ie.n(Eg);
            const Lu = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class Fu {
                constructor(r, t = !1) {
                    if (this.url = r, this.disableProviderPing = t, this.events = new ye.EventEmitter, this.isAvailable = !1, this.registering = !1, !Ht(r)) throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);
                    this.url = r, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                open(r = this.url) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        yield t.register(r)
                    })()
                }
                close() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        if (!r.isAvailable) throw new Error("Connection already closed");
                        r.onClose()
                    })()
                }
                send(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        o.isAvailable || (yield o.register());
                        try {
                            const a = wt(r),
                                h = yield(yield Nu()(o.url, Object.assign(Object.assign({}, Lu), {
                                    body: a
                                }))).json();
                            o.onPayload({
                                data: h
                            })
                        } catch (a) {
                            o.onError(r.id, a)
                        }
                    })()
                }
                register(r = this.url) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (!Ht(r)) throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);
                        if (t.registering) {
                            const o = t.events.getMaxListeners();
                            return (t.events.listenerCount("register_error") >= o || t.events.listenerCount("open") >= o) && t.events.setMaxListeners(o + 1), new Promise((a, u) => {
                                t.events.once("register_error", h => {
                                    t.resetMaxListeners(), u(h)
                                }), t.events.once("open", () => {
                                    if (t.resetMaxListeners(), typeof t.isAvailable > "u") return u(new Error("HTTP connection is missing or invalid"));
                                    a()
                                })
                            })
                        }
                        t.url = r, t.registering = !0;
                        try {
                            if (!t.disableProviderPing) {
                                const o = wt({
                                    id: 1,
                                    jsonrpc: "2.0",
                                    method: "test",
                                    params: []
                                });
                                yield Nu()(r, Object.assign(Object.assign({}, Lu), {
                                    body: o
                                }))
                            }
                            t.onOpen()
                        } catch (o) {
                            const a = t.parseError(o);
                            throw t.events.emit("register_error", a), t.onClose(), a
                        }
                    })()
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(r) {
                    if (typeof r.data > "u") return;
                    const t = "string" == typeof r.data ? Tt(r.data) : r.data;
                    this.events.emit("payload", t)
                }
                onError(r, t) {
                    const o = this.parseError(t),
                        u = bi(r, o.message || o.toString());
                    this.events.emit("payload", u)
                }
                parseError(r, t = this.url) {
                    return _i(r, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            const ei = Fu,
                Zu = "wc@2:universal_provider:";
            var f, r, Ji = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                da = {
                    exports: {}
                };
            f = da, r = da.exports,
                function() {
                    var t, h = "Expected a function",
                        C = "__lodash_hash_undefined__",
                        N = "__lodash_placeholder__",
                        ri = 1 / 0,
                        qn = 9007199254740991,
                        pn = 4294967295,
                        _y = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        Ii = "[object Arguments]",
                        Us = "[object Array]",
                        Yi = "[object Boolean]",
                        Xi = "[object Date]",
                        $s = "[object Error]",
                        Hs = "[object Function]",
                        Yu = "[object GeneratorFunction]",
                        sn = "[object Map]",
                        es = "[object Number]",
                        Pn = "[object Object]",
                        Xu = "[object Promise]",
                        ts = "[object RegExp]",
                        on = "[object Set]",
                        rs = "[object String]",
                        Bs = "[object Symbol]",
                        ns = "[object WeakMap]",
                        is = "[object ArrayBuffer]",
                        Pi = "[object DataView]",
                        ma = "[object Float32Array]",
                        ba = "[object Float64Array]",
                        wa = "[object Int8Array]",
                        xa = "[object Int16Array]",
                        Ea = "[object Int32Array]",
                        Ia = "[object Uint8Array]",
                        Pa = "[object Uint8ClampedArray]",
                        Sa = "[object Uint16Array]",
                        Oa = "[object Uint32Array]",
                        Py = /\b__p \+= '';/g,
                        Sy = /\b(__p \+=) '' \+/g,
                        Oy = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        el = /&(?:amp|lt|gt|quot|#39);/g,
                        tl = /[&<>"']/g,
                        Ry = RegExp(el.source),
                        Ay = RegExp(tl.source),
                        Cy = /<%-([\s\S]+?)%>/g,
                        Ty = /<%([\s\S]+?)%>/g,
                        rl = /<%=([\s\S]+?)%>/g,
                        Dy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        Ny = /^\w*$/,
                        Ly = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        Ra = /[\\^$.*+?()[\]{}|]/g,
                        jy = RegExp(Ra.source),
                        Aa = /^\s+/,
                        Fy = /\s/,
                        My = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        Zy = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        zy = /,? & /,
                        qy = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        Uy = /[()=,{}\[\]\/\s]/,
                        $y = /\\(\\)?/g,
                        Hy = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        nl = /\w*$/,
                        By = /^[-+]0x[0-9a-f]+$/i,
                        Ky = /^0b[01]+$/i,
                        Vy = /^\[object .+?Constructor\]$/,
                        ky = /^0o[0-7]+$/i,
                        Gy = /^(?:0|[1-9]\d*)$/,
                        Wy = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        Ks = /($^)/,
                        Jy = /['\n\r\u2028\u2029\\]/g,
                        Vs = "\\ud800-\\udfff",
                        il = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        sl = "\\u2700-\\u27bf",
                        ol = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        al = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        cl = "\\ufe0e\\ufe0f",
                        ul = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        iv = "[" + Vs + "]",
                        ll = "[" + ul + "]",
                        ks = "[" + il + "]",
                        fl = "\\d+",
                        sv = "[" + sl + "]",
                        hl = "[" + ol + "]",
                        dl = "[^" + Vs + ul + fl + sl + ol + al + "]",
                        Ta = "\\ud83c[\\udffb-\\udfff]",
                        pl = "[^" + Vs + "]",
                        Da = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        Na = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        Si = "[" + al + "]",
                        yl = "(?:" + hl + "|" + dl + ")",
                        av = "(?:" + Si + "|" + dl + ")",
                        vl = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        _l = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        ml = "(?:" + ks + "|" + Ta + ")?",
                        bl = "[" + cl + "]?",
                        wl = bl + ml + "(?:\\u200d(?:" + [pl, Da, Na].join("|") + ")" + bl + ml + ")*",
                        fv = "(?:" + [sv, Da, Na].join("|") + ")" + wl,
                        hv = "(?:" + [pl + ks + "?", ks, Da, Na, iv].join("|") + ")",
                        dv = RegExp("['\u2019]", "g"),
                        pv = RegExp(ks, "g"),
                        La = RegExp(Ta + "(?=" + Ta + ")|" + hv + wl, "g"),
                        gv = RegExp([Si + "?" + hl + "+" + vl + "(?=" + [ll, Si, "$"].join("|") + ")", av + "+" + _l + "(?=" + [ll, Si + yl, "$"].join("|") + ")", Si + "?" + yl + "+" + vl, Si + "+" + _l, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", fl, fv].join("|"), "g"),
                        yv = RegExp("[\\u200d" + Vs + il + cl + "]"),
                        vv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        _v = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        mv = -1,
                        It = {};
                    It[ma] = It[ba] = It[wa] = It[xa] = It[Ea] = It[Ia] = It[Pa] = It[Sa] = It[Oa] = !0, It[Ii] = It[Us] = It[is] = It[Yi] = It[Pi] = It[Xi] = It[$s] = It[Hs] = It[sn] = It[es] = It[Pn] = It[ts] = It[on] = It[rs] = It[ns] = !1;
                    var mt = {};
                    mt[Ii] = mt[Us] = mt[is] = mt[Pi] = mt[Yi] = mt[Xi] = mt[ma] = mt[ba] = mt[wa] = mt[xa] = mt[Ea] = mt[sn] = mt[es] = mt[Pn] = mt[ts] = mt[on] = mt[rs] = mt[Bs] = mt[Ia] = mt[Pa] = mt[Sa] = mt[Oa] = !0, mt[$s] = mt[Hs] = mt[ns] = !1;
                    var Ev = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        Iv = parseFloat,
                        Pv = parseInt,
                        xl = "object" == typeof Ji && Ji && Ji.Object === Object && Ji,
                        Sv = "object" == typeof self && self && self.Object === Object && self,
                        _r = xl || Sv || Function("return this")(),
                        ja = r && !r.nodeType && r,
                        ni = ja && f && !f.nodeType && f,
                        El = ni && ni.exports === ja,
                        Fa = El && xl.process,
                        kr = function() {
                            try {
                                return ni && ni.require && ni.require("util").types || Fa && Fa.binding && Fa.binding("util")
                            } catch {}
                        }(),
                        Il = kr && kr.isArrayBuffer,
                        Pl = kr && kr.isDate,
                        Sl = kr && kr.isMap,
                        Ol = kr && kr.isRegExp,
                        Rl = kr && kr.isSet,
                        Al = kr && kr.isTypedArray;

                    function Mr(F, k, q) {
                        switch (q.length) {
                            case 0:
                                return F.call(k);
                            case 1:
                                return F.call(k, q[0]);
                            case 2:
                                return F.call(k, q[0], q[1]);
                            case 3:
                                return F.call(k, q[0], q[1], q[2])
                        }
                        return F.apply(k, q)
                    }

                    function Ov(F, k, q, Ie) {
                        for (var Ze = -1, st = null == F ? 0 : F.length; ++Ze < st;) {
                            var lr = F[Ze];
                            k(Ie, lr, q(lr), F)
                        }
                        return Ie
                    }

                    function Gr(F, k) {
                        for (var q = -1, Ie = null == F ? 0 : F.length; ++q < Ie && !1 !== k(F[q], q, F););
                        return F
                    }

                    function Rv(F, k) {
                        for (var q = null == F ? 0 : F.length; q-- && !1 !== k(F[q], q, F););
                        return F
                    }

                    function Cl(F, k) {
                        for (var q = -1, Ie = null == F ? 0 : F.length; ++q < Ie;)
                            if (!k(F[q], q, F)) return !1;
                        return !0
                    }

                    function Un(F, k) {
                        for (var q = -1, Ie = null == F ? 0 : F.length, Ze = 0, st = []; ++q < Ie;) {
                            var lr = F[q];
                            k(lr, q, F) && (st[Ze++] = lr)
                        }
                        return st
                    }

                    function Gs(F, k) {
                        return !(null == F || !F.length) && Oi(F, k, 0) > -1
                    }

                    function Ma(F, k, q) {
                        for (var Ie = -1, Ze = null == F ? 0 : F.length; ++Ie < Ze;)
                            if (q(k, F[Ie])) return !0;
                        return !1
                    }

                    function Ot(F, k) {
                        for (var q = -1, Ie = null == F ? 0 : F.length, Ze = Array(Ie); ++q < Ie;) Ze[q] = k(F[q], q, F);
                        return Ze
                    }

                    function $n(F, k) {
                        for (var q = -1, Ie = k.length, Ze = F.length; ++q < Ie;) F[Ze + q] = k[q];
                        return F
                    }

                    function Za(F, k, q, Ie) {
                        var Ze = -1,
                            st = null == F ? 0 : F.length;
                        for (Ie && st && (q = F[++Ze]); ++Ze < st;) q = k(q, F[Ze], Ze, F);
                        return q
                    }

                    function Av(F, k, q, Ie) {
                        var Ze = null == F ? 0 : F.length;
                        for (Ie && Ze && (q = F[--Ze]); Ze--;) q = k(q, F[Ze], Ze, F);
                        return q
                    }

                    function za(F, k) {
                        for (var q = -1, Ie = null == F ? 0 : F.length; ++q < Ie;)
                            if (k(F[q], q, F)) return !0;
                        return !1
                    }
                    var Cv = qa("length");

                    function Tl(F, k, q) {
                        var Ie;
                        return q(F, function(Ze, st, lr) {
                            if (k(Ze, st, lr)) return Ie = st, !1
                        }), Ie
                    }

                    function Ws(F, k, q, Ie) {
                        for (var Ze = F.length, st = q + (Ie ? 1 : -1); Ie ? st-- : ++st < Ze;)
                            if (k(F[st], st, F)) return st;
                        return -1
                    }

                    function Oi(F, k, q) {
                        return k == k ? function Bv(F, k, q) {
                            for (var Ie = q - 1, Ze = F.length; ++Ie < Ze;)
                                if (F[Ie] === k) return Ie;
                            return -1
                        }(F, k, q) : Ws(F, Dl, q)
                    }

                    function Nv(F, k, q, Ie) {
                        for (var Ze = q - 1, st = F.length; ++Ze < st;)
                            if (Ie(F[Ze], k)) return Ze;
                        return -1
                    }

                    function Dl(F) {
                        return F != F
                    }

                    function Nl(F, k) {
                        var q = null == F ? 0 : F.length;
                        return q ? $a(F, k) / q : NaN
                    }

                    function qa(F) {
                        return function(k) {
                            return null == k ? t : k[F]
                        }
                    }

                    function Ua(F) {
                        return function(k) {
                            return null == F ? t : F[k]
                        }
                    }

                    function Ll(F, k, q, Ie, Ze) {
                        return Ze(F, function(st, lr, yt) {
                            q = Ie ? (Ie = !1, st) : k(q, st, lr, yt)
                        }), q
                    }

                    function $a(F, k) {
                        for (var q, Ie = -1, Ze = F.length; ++Ie < Ze;) {
                            var st = k(F[Ie]);
                            st !== t && (q = q === t ? st : q + st)
                        }
                        return q
                    }

                    function Ha(F, k) {
                        for (var q = -1, Ie = Array(F); ++q < F;) Ie[q] = k(q);
                        return Ie
                    }

                    function jl(F) {
                        return F && F.slice(0, zl(F) + 1).replace(Aa, "")
                    }

                    function Zr(F) {
                        return function(k) {
                            return F(k)
                        }
                    }

                    function Ba(F, k) {
                        return Ot(k, function(q) {
                            return F[q]
                        })
                    }

                    function ss(F, k) {
                        return F.has(k)
                    }

                    function Fl(F, k) {
                        for (var q = -1, Ie = F.length; ++q < Ie && Oi(k, F[q], 0) > -1;);
                        return q
                    }

                    function Ml(F, k) {
                        for (var q = F.length; q-- && Oi(k, F[q], 0) > -1;);
                        return q
                    }
                    var Mv = Ua({\
                            u00c0: "A",
                            \u00c1: "A",
                            \u00c2: "A",
                            \u00c3: "A",
                            \u00c4: "A",
                            \u00c5: "A",
                            \u00e0: "a",
                            \u00e1: "a",
                            \u00e2: "a",
                            \u00e3: "a",
                            \u00e4: "a",
                            \u00e5: "a",
                            \u00c7: "C",
                            \u00e7: "c",
                            \u00d0: "D",
                            \u00f0: "d",
                            \u00c8: "E",
                            \u00c9: "E",
                            \u00ca: "E",
                            \u00cb: "E",
                            \u00e8: "e",
                            \u00e9: "e",
                            \u00ea: "e",
                            \u00eb: "e",
                            \u00cc: "I",
                            \u00cd: "I",
                            \u00ce: "I",
                            \u00cf: "I",
                            \u00ec: "i",
                            \u00ed: "i",
                            \u00ee: "i",
                            \u00ef: "i",
                            \u00d1: "N",
                            \u00f1: "n",
                            \u00d2: "O",
                            \u00d3: "O",
                            \u00d4: "O",
                            \u00d5: "O",
                            \u00d6: "O",
                            \u00d8: "O",
                            \u00f2: "o",
                            \u00f3: "o",
                            \u00f4: "o",
                            \u00f5: "o",
                            \u00f6: "o",
                            \u00f8: "o",
                            \u00d9: "U",
                            \u00da: "U",
                            \u00db: "U",
                            \u00dc: "U",
                            \u00f9: "u",
                            \u00fa: "u",
                            \u00fb: "u",
                            \u00fc: "u",
                            \u00dd: "Y",
                            \u00fd: "y",
                            \u00ff: "y",
                            \u00c6: "Ae",
                            \u00e6: "ae",
                            \u00de: "Th",
                            \u00fe: "th",
                            \u00df: "ss",
                            \u0100: "A",
                            \u0102: "A",
                            \u0104: "A",
                            \u0101: "a",
                            \u0103: "a",
                            \u0105: "a",
                            \u0106: "C",
                            \u0108: "C",
                            \u010a: "C",
                            \u010c: "C",
                            \u0107: "c",
                            \u0109: "c",
                            \u010b: "c",
                            \u010d: "c",
                            \u010e: "D",
                            \u0110: "D",
                            \u010f: "d",
                            \u0111: "d",
                            \u0112: "E",
                            \u0114: "E",
                            \u0116: "E",
                            \u0118: "E",
                            \u011a: "E",
                            \u0113: "e",
                            \u0115: "e",
                            \u0117: "e",
                            \u0119: "e",
                            \u011b: "e",
                            \u011c: "G",
                            \u011e: "G",
                            \u0120: "G",
                            \u0122: "G",
                            \u011d: "g",
                            \u011f: "g",
                            \u0121: "g",
                            \u0123: "g",
                            \u0124: "H",
                            \u0126: "H",
                            \u0125: "h",
                            \u0127: "h",
                            \u0128: "I",
                            \u012a: "I",
                            \u012c: "I",
                            \u012e: "I",
                            \u0130: "I",
                            \u0129: "i",
                            \u012b: "i",
                            \u012d: "i",
                            \u012f: "i",
                            \u0131: "i",
                            \u0134: "J",
                            \u0135: "j",
                            \u0136: "K",
                            \u0137: "k",
                            \u0138: "k",
                            \u0139: "L",
                            \u013b: "L",
                            \u013d: "L",
                            \u013f: "L",
                            \u0141: "L",
                            \u013a: "l",
                            \u013c: "l",
                            \u013e: "l",
                            \u0140: "l",
                            \u0142: "l",
                            \u0143: "N",
                            \u0145: "N",
                            \u0147: "N",
                            \u014a: "N",
                            \u0144: "n",
                            \u0146: "n",
                            \u0148: "n",
                            \u014b: "n",
                            \u014c: "O",
                            \u014e: "O",
                            \u0150: "O",
                            \u014d: "o",
                            \u014f: "o",
                            \u0151: "o",
                            \u0154: "R",
                            \u0156: "R",
                            \u0158: "R",
                            \u0155: "r",
                            \u0157: "r",
                            \u0159: "r",
                            \u015a: "S",
                            \u015c: "S",
                            \u015e: "S",
                            \u0160: "S",
                            \u015b: "s",
                            \u015d: "s",
                            \u015f: "s",
                            \u0161: "s",
                            \u0162: "T",
                            \u0164: "T",
                            \u0166: "T",
                            \u0163: "t",
                            \u0165: "t",
                            \u0167: "t",
                            \u0168: "U",
                            \u016a: "U",
                            \u016c: "U",
                            \u016e: "U",
                            \u0170: "U",
                            \u0172: "U",
                            \u0169: "u",
                            \u016b: "u",
                            \u016d: "u",
                            \u016f: "u",
                            \u0171: "u",
                            \u0173: "u",
                            \u0174: "W",
                            \u0175: "w",
                            \u0176: "Y",
                            \u0177: "y",
                            \u0178: "Y",
                            \u0179: "Z",
                            \u017b: "Z",
                            \u017d: "Z",
                            \u017a: "z",
                            \u017c: "z",
                            \u017e: "z",
                            \u0132: "IJ",
                            \u0133: "ij",
                            \u0152: "Oe",
                            \u0153: "oe",
                            \u0149: "'n",
                            \u017f: "s"
                        }),
                        Zv = Ua({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function zv(F) {
                        return "\\" + Ev[F]
                    }

                    function Ri(F) {
                        return yv.test(F)
                    }

                    function Ka(F) {
                        var k = -1,
                            q = Array(F.size);
                        return F.forEach(function(Ie, Ze) {
                            q[++k] = [Ze, Ie]
                        }), q
                    }

                    function Zl(F, k) {
                        return function(q) {
                            return F(k(q))
                        }
                    }

                    function Hn(F, k) {
                        for (var q = -1, Ie = F.length, Ze = 0, st = []; ++q < Ie;) {
                            var lr = F[q];
                            (lr === k || lr === N) && (F[q] = N, st[Ze++] = q)
                        }
                        return st
                    }

                    function Js(F) {
                        var k = -1,
                            q = Array(F.size);
                        return F.forEach(function(Ie) {
                            q[++k] = Ie
                        }), q
                    }

                    function Ai(F) {
                        return Ri(F) ? function kv(F) {
                            for (var k = La.lastIndex = 0; La.test(F);) ++k;
                            return k
                        }(F) : Cv(F)
                    }

                    function an(F) {
                        return Ri(F) ? function Gv(F) {
                            return F.match(La) || []
                        }(F) : function Tv(F) {
                            return F.split("")
                        }(F)
                    }

                    function zl(F) {
                        for (var k = F.length; k-- && Fy.test(F.charAt(k)););
                        return k
                    }
                    var Vv = Ua({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        Ci = function F(k) {
                            var e, q = (k = null == k ? _r : Ci.defaults(_r.Object(), k, Ci.pick(_r, _v))).Array,
                                Ie = k.Date,
                                Ze = k.Error,
                                st = k.Function,
                                lr = k.Math,
                                yt = k.Object,
                                Va = k.RegExp,
                                Qv = k.String,
                                Wr = k.TypeError,
                                Qs = q.prototype,
                                Ti = yt.prototype,
                                Ys = k["__core-js_shared__"],
                                Xs = st.prototype.toString,
                                ut = Ti.hasOwnProperty,
                                Xv = 0,
                                ql = (e = /[^.]+$/.exec(Ys && Ys.keys && Ys.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "",
                                eo = Ti.toString,
                                e0 = Xs.call(yt),
                                t0 = _r._,
                                r0 = Va("^" + Xs.call(ut).replace(Ra, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                to = El ? k.Buffer : t,
                                Bn = k.Symbol,
                                ro = k.Uint8Array,
                                Ul = to ? to.allocUnsafe : t,
                                no = Zl(yt.getPrototypeOf, yt),
                                $l = yt.create,
                                Hl = Ti.propertyIsEnumerable,
                                io = Qs.splice,
                                Bl = Bn ? Bn.isConcatSpreadable : t,
                                os = Bn ? Bn.iterator : t,
                                ii = Bn ? Bn.toStringTag : t,
                                so = function() {
                                    try {
                                        var e = ui(yt, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                n0 = k.clearTimeout !== _r.clearTimeout && k.clearTimeout,
                                i0 = Ie && Ie.now !== _r.Date.now && Ie.now,
                                s0 = k.setTimeout !== _r.setTimeout && k.setTimeout,
                                oo = lr.ceil,
                                ao = lr.floor,
                                ka = yt.getOwnPropertySymbols,
                                o0 = to ? to.isBuffer : t,
                                Kl = k.isFinite,
                                a0 = Qs.join,
                                c0 = Zl(yt.keys, yt),
                                fr = lr.max,
                                Ir = lr.min,
                                u0 = Ie.now,
                                l0 = k.parseInt,
                                Vl = lr.random,
                                f0 = Qs.reverse,
                                Ga = ui(k, "DataView"),
                                as = ui(k, "Map"),
                                Wa = ui(k, "Promise"),
                                Di = ui(k, "Set"),
                                cs = ui(k, "WeakMap"),
                                us = ui(yt, "create"),
                                co = cs && new cs,
                                Ni = {},
                                h0 = li(Ga),
                                d0 = li(as),
                                p0 = li(Wa),
                                g0 = li(Di),
                                y0 = li(cs),
                                uo = Bn ? Bn.prototype : t,
                                ls = uo ? uo.valueOf : t,
                                kl = uo ? uo.toString : t;

                            function _(e) {
                                if (Mt(e) && !qe(e) && !(e instanceof Qe)) {
                                    if (e instanceof Jr) return e;
                                    if (ut.call(e, "__wrapped__")) return Wf(e)
                                }
                                return new Jr(e)
                            }
                            var Li = function() {
                                function e() {}
                                return function(n) {
                                    if (!Ct(n)) return {};
                                    if ($l) return $l(n);
                                    e.prototype = n;
                                    var s = new e;
                                    return e.prototype = t, s
                                }
                            }();

                            function lo() {}

                            function Jr(e, n) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = t
                            }

                            function Qe(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = pn, this.__views__ = []
                            }

                            function si(e) {
                                var n = -1,
                                    s = null == e ? 0 : e.length;
                                for (this.clear(); ++n < s;) {
                                    var l = e[n];
                                    this.set(l[0], l[1])
                                }
                            }

                            function Sn(e) {
                                var n = -1,
                                    s = null == e ? 0 : e.length;
                                for (this.clear(); ++n < s;) {
                                    var l = e[n];
                                    this.set(l[0], l[1])
                                }
                            }

                            function On(e) {
                                var n = -1,
                                    s = null == e ? 0 : e.length;
                                for (this.clear(); ++n < s;) {
                                    var l = e[n];
                                    this.set(l[0], l[1])
                                }
                            }

                            function oi(e) {
                                var n = -1,
                                    s = null == e ? 0 : e.length;
                                for (this.__data__ = new On; ++n < s;) this.add(e[n])
                            }

                            function cn(e) {
                                var n = this.__data__ = new Sn(e);
                                this.size = n.size
                            }

                            function Gl(e, n) {
                                var s = qe(e),
                                    l = !s && fi(e),
                                    p = !s && !l && Wn(e),
                                    x = !s && !l && !p && Zi(e),
                                    R = s || l || p || x,
                                    T = R ? Ha(e.length, Qv) : [],
                                    M = T.length;
                                for (var Y in e)(n || ut.call(e, Y)) && (!R || !("length" == Y || p && ("offset" == Y || "parent" == Y) || x && ("buffer" == Y || "byteLength" == Y || "byteOffset" == Y) || Tn(Y, M))) && T.push(Y);
                                return T
                            }

                            function Wl(e) {
                                var n = e.length;
                                return n ? e[oc(0, n - 1)] : t
                            }

                            function $0(e, n) {
                                return Po(Nr(e), ai(n, 0, e.length))
                            }

                            function H0(e) {
                                return Po(Nr(e))
                            }

                            function Ja(e, n, s) {
                                (s !== t && !un(e[n], s) || s === t && !(n in e)) && Rn(e, n, s)
                            }

                            function fs(e, n, s) {
                                var l = e[n];
                                (!ut.call(e, n) || !un(l, s) || s === t && !(n in e)) && Rn(e, n, s)
                            }

                            function fo(e, n) {
                                for (var s = e.length; s--;)
                                    if (un(e[s][0], n)) return s;
                                return -1
                            }

                            function B0(e, n, s, l) {
                                return Kn(e, function(p, x, R) {
                                    n(l, p, s(p), R)
                                }), l
                            }

                            function Jl(e, n) {
                                return e && yn(n, gr(n), e)
                            }

                            function Rn(e, n, s) {
                                "__proto__" == n && so ? so(e, n, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: s,
                                    writable: !0
                                }) : e[n] = s
                            }

                            function Qa(e, n) {
                                for (var s = -1, l = n.length, p = q(l), x = null == e; ++s < l;) p[s] = x ? t : Tc(e, n[s]);
                                return p
                            }

                            function ai(e, n, s) {
                                return e == e && (s !== t && (e = e <= s ? e : s), n !== t && (e = e >= n ? e : n)), e
                            }

                            function Qr(e, n, s, l, p, x) {
                                var R, T = 1 & n,
                                    M = 2 & n,
                                    Y = 4 & n;
                                if (s && (R = p ? s(e, l, p, x) : s(e)), R !== t) return R;
                                if (!Ct(e)) return e;
                                var ee = qe(e);
                                if (ee) {
                                    if (R = function N_(e) {
                                            var n = e.length,
                                                s = new e.constructor(n);
                                            return n && "string" == typeof e[0] && ut.call(e, "index") && (s.index = e.index, s.input = e.input), s
                                        }(e), !T) return Nr(e, R)
                                } else {
                                    var oe = Pr(e),
                                        me = oe == Hs || oe == Yu;
                                    if (Wn(e)) return wf(e, T);
                                    if (oe == Pn || oe == Ii || me && !p) {
                                        if (R = M || me ? {} : qf(e), !T) return M ? function x_(e, n) {
                                            return yn(e, Zf(e), n)
                                        }(e, function K0(e, n) {
                                            return e && yn(n, jr(n), e)
                                        }(R, e)) : function w_(e, n) {
                                            return yn(e, bc(e), n)
                                        }(e, Jl(R, e))
                                    } else {
                                        if (!mt[oe]) return p ? e : {};
                                        R = function L_(e, n, s) {
                                            var l = e.constructor;
                                            switch (n) {
                                                case is:
                                                    return dc(e);
                                                case Yi:
                                                case Xi:
                                                    return new l(+e);
                                                case Pi:
                                                    return function v_(e, n) {
                                                        var s = n ? dc(e.buffer) : e.buffer;
                                                        return new e.constructor(s, e.byteOffset, e.byteLength)
                                                    }(e, s);
                                                case ma:
                                                case ba:
                                                case wa:
                                                case xa:
                                                case Ea:
                                                case Ia:
                                                case Pa:
                                                case Sa:
                                                case Oa:
                                                    return xf(e, s);
                                                case sn:
                                                    return new l;
                                                case es:
                                                case rs:
                                                    return new l(e);
                                                case ts:
                                                    return function __(e) {
                                                        var n = new e.constructor(e.source, nl.exec(e));
                                                        return n.lastIndex = e.lastIndex, n
                                                    }(e);
                                                case on:
                                                    return new l;
                                                case Bs:
                                                    return function m_(e) {
                                                        return ls ? yt(ls.call(e)) : {}
                                                    }(e)
                                            }
                                        }(e, oe, T)
                                    }
                                }
                                x || (x = new cn);
                                var Se = x.get(e);
                                if (Se) return Se;
                                x.set(e, R), gh(e) ? e.forEach(function(je) {
                                    R.add(Qr(je, n, s, je, e, x))
                                }) : dh(e) && e.forEach(function(je, Ge) {
                                    R.set(Ge, Qr(je, n, s, Ge, e, x))
                                });
                                var Ke = ee ? t : (Y ? M ? vc : yc : M ? jr : gr)(e);
                                return Gr(Ke || e, function(je, Ge) {
                                    Ke && (je = e[Ge = je]), fs(R, Ge, Qr(je, n, s, Ge, e, x))
                                }), R
                            }

                            function Ql(e, n, s) {
                                var l = s.length;
                                if (null == e) return !l;
                                for (e = yt(e); l--;) {
                                    var p = s[l],
                                        R = e[p];
                                    if (R === t && !(p in e) || !(0, n[p])(R)) return !1
                                }
                                return !0
                            }

                            function Yl(e, n, s) {
                                if ("function" != typeof e) throw new Wr(h);
                                return _s(function() {
                                    e.apply(t, s)
                                }, n)
                            }

                            function hs(e, n, s, l) {
                                var p = -1,
                                    x = Gs,
                                    R = !0,
                                    T = e.length,
                                    M = [],
                                    Y = n.length;
                                if (!T) return M;
                                s && (n = Ot(n, Zr(s))), l ? (x = Ma, R = !1) : n.length >= 200 && (x = ss, R = !1, n = new oi(n));
                                e: for (; ++p < T;) {
                                    var ee = e[p],
                                        oe = null == s ? ee : s(ee);
                                    if (ee = l || 0 !== ee ? ee : 0, R && oe == oe) {
                                        for (var me = Y; me--;)
                                            if (n[me] === oe) continue e;
                                        M.push(ee)
                                    } else x(n, oe, l) || M.push(ee)
                                }
                                return M
                            }
                            _.templateSettings = {
                                escape: Cy,
                                evaluate: Ty,
                                interpolate: rl,
                                variable: "",
                                imports: {
                                    _
                                }
                            }, (_.prototype = lo.prototype).constructor = _, (Jr.prototype = Li(lo.prototype)).constructor = Jr, (Qe.prototype = Li(lo.prototype)).constructor = Qe, si.prototype.clear = function b0() {
                                this.__data__ = us ? us(null) : {}, this.size = 0
                            }, si.prototype.delete = function w0(e) {
                                var n = this.has(e) && delete this.__data__[e];
                                return this.size -= n ? 1 : 0, n
                            }, si.prototype.get = function x0(e) {
                                var n = this.__data__;
                                if (us) {
                                    var s = n[e];
                                    return s === C ? t : s
                                }
                                return ut.call(n, e) ? n[e] : t
                            }, si.prototype.has = function E0(e) {
                                var n = this.__data__;
                                return us ? n[e] !== t : ut.call(n, e)
                            }, si.prototype.set = function I0(e, n) {
                                var s = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, s[e] = us && n === t ? C : n, this
                            }, Sn.prototype.clear = function P0() {
                                this.__data__ = [], this.size = 0
                            }, Sn.prototype.delete = function S0(e) {
                                var n = this.__data__,
                                    s = fo(n, e);
                                return !(s < 0 || (s == n.length - 1 ? n.pop() : io.call(n, s, 1), --this.size, 0))
                            }, Sn.prototype.get = function O0(e) {
                                var n = this.__data__,
                                    s = fo(n, e);
                                return s < 0 ? t : n[s][1]
                            }, Sn.prototype.has = function R0(e) {
                                return fo(this.__data__, e) > -1
                            }, Sn.prototype.set = function A0(e, n) {
                                var s = this.__data__,
                                    l = fo(s, e);
                                return l < 0 ? (++this.size, s.push([e, n])) : s[l][1] = n, this
                            }, On.prototype.clear = function C0() {
                                this.size = 0, this.__data__ = {
                                    hash: new si,
                                    map: new(as || Sn),
                                    string: new si
                                }
                            }, On.prototype.delete = function T0(e) {
                                var n = Io(this, e).delete(e);
                                return this.size -= n ? 1 : 0, n
                            }, On.prototype.get = function D0(e) {
                                return Io(this, e).get(e)
                            }, On.prototype.has = function N0(e) {
                                return Io(this, e).has(e)
                            }, On.prototype.set = function L0(e, n) {
                                var s = Io(this, e),
                                    l = s.size;
                                return s.set(e, n), this.size += s.size == l ? 0 : 1, this
                            }, oi.prototype.add = oi.prototype.push = function j0(e) {
                                return this.__data__.set(e, C), this
                            }, oi.prototype.has = function F0(e) {
                                return this.__data__.has(e)
                            }, cn.prototype.clear = function M0() {
                                this.__data__ = new Sn, this.size = 0
                            }, cn.prototype.delete = function Z0(e) {
                                var n = this.__data__,
                                    s = n.delete(e);
                                return this.size = n.size, s
                            }, cn.prototype.get = function z0(e) {
                                return this.__data__.get(e)
                            }, cn.prototype.has = function q0(e) {
                                return this.__data__.has(e)
                            }, cn.prototype.set = function U0(e, n) {
                                var s = this.__data__;
                                if (s instanceof Sn) {
                                    var l = s.__data__;
                                    if (!as || l.length < 199) return l.push([e, n]), this.size = ++s.size, this;
                                    s = this.__data__ = new On(l)
                                }
                                return s.set(e, n), this.size = s.size, this
                            };
                            var Kn = Sf(gn),
                                Xl = Sf(Xa, !0);

                            function k0(e, n) {
                                var s = !0;
                                return Kn(e, function(l, p, x) {
                                    return s = !!n(l, p, x)
                                }), s
                            }

                            function ho(e, n, s) {
                                for (var l = -1, p = e.length; ++l < p;) {
                                    var x = e[l],
                                        R = n(x);
                                    if (null != R && (T === t ? R == R && !qr(R) : s(R, T))) var T = R,
                                        M = x
                                }
                                return M
                            }

                            function ef(e, n) {
                                var s = [];
                                return Kn(e, function(l, p, x) {
                                    n(l, p, x) && s.push(l)
                                }), s
                            }

                            function mr(e, n, s, l, p) {
                                var x = -1,
                                    R = e.length;
                                for (s || (s = F_), p || (p = []); ++x < R;) {
                                    var T = e[x];
                                    n > 0 && s(T) ? n > 1 ? mr(T, n - 1, s, l, p) : $n(p, T) : l || (p[p.length] = T)
                                }
                                return p
                            }
                            var Ya = Of(),
                                tf = Of(!0);

                            function gn(e, n) {
                                return e && Ya(e, n, gr)
                            }

                            function Xa(e, n) {
                                return e && tf(e, n, gr)
                            }

                            function po(e, n) {
                                return Un(n, function(s) {
                                    return Dn(e[s])
                                })
                            }

                            function ci(e, n) {
                                for (var s = 0, l = (n = kn(n, e)).length; null != e && s < l;) e = e[vn(n[s++])];
                                return s && s == l ? e : t
                            }

                            function rf(e, n, s) {
                                var l = n(e);
                                return qe(e) ? l : $n(l, s(e))
                            }

                            function Rr(e) {
                                return null == e ? e === t ? "[object Undefined]" : "[object Null]" : ii && ii in yt(e) ? function C_(e) {
                                    var n = ut.call(e, ii),
                                        s = e[ii];
                                    try {
                                        e[ii] = t;
                                        var l = !0
                                    } catch {}
                                    var p = eo.call(e);
                                    return l && (n ? e[ii] = s : delete e[ii]), p
                                }(e) : function H_(e) {
                                    return eo.call(e)
                                }(e)
                            }

                            function ec(e, n) {
                                return e > n
                            }

                            function W0(e, n) {
                                return null != e && ut.call(e, n)
                            }

                            function J0(e, n) {
                                return null != e && n in yt(e)
                            }

                            function tc(e, n, s) {
                                for (var l = s ? Ma : Gs, p = e[0].length, x = e.length, R = x, T = q(x), M = 1 / 0, Y = []; R--;) {
                                    var ee = e[R];
                                    R && n && (ee = Ot(ee, Zr(n))), M = Ir(ee.length, M), T[R] = !s && (n || p >= 120 && ee.length >= 120) ? new oi(R && ee) : t
                                }
                                ee = e[0];
                                var oe = -1,
                                    me = T[0];
                                e: for (; ++oe < p && Y.length < M;) {
                                    var Se = ee[oe],
                                        Le = n ? n(Se) : Se;
                                    if (Se = s || 0 !== Se ? Se : 0, !(me ? ss(me, Le) : l(Y, Le, s))) {
                                        for (R = x; --R;) {
                                            var Ke = T[R];
                                            if (!(Ke ? ss(Ke, Le) : l(e[R], Le, s))) continue e
                                        }
                                        me && me.push(Le), Y.push(Se)
                                    }
                                }
                                return Y
                            }

                            function ds(e, n, s) {
                                var l = null == (e = Bf(e, n = kn(n, e))) ? e : e[vn(Xr(n))];
                                return null == l ? t : Mr(l, e, s)
                            }

                            function nf(e) {
                                return Mt(e) && Rr(e) == Ii
                            }

                            function ps(e, n, s, l, p) {
                                return e === n || (null == e || null == n || !Mt(e) && !Mt(n) ? e != e && n != n : function t_(e, n, s, l, p, x) {
                                    var R = qe(e),
                                        T = qe(n),
                                        M = R ? Us : Pr(e),
                                        Y = T ? Us : Pr(n),
                                        ee = (M = M == Ii ? Pn : M) == Pn,
                                        oe = (Y = Y == Ii ? Pn : Y) == Pn,
                                        me = M == Y;
                                    if (me && Wn(e)) {
                                        if (!Wn(n)) return !1;
                                        R = !0, ee = !1
                                    }
                                    if (me && !ee) return x || (x = new cn), R || Zi(e) ? Mf(e, n, s, l, p, x) : function R_(e, n, s, l, p, x, R) {
                                        switch (s) {
                                            case Pi:
                                                if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return !1;
                                                e = e.buffer, n = n.buffer;
                                            case is:
                                                return !(e.byteLength != n.byteLength || !x(new ro(e), new ro(n)));
                                            case Yi:
                                            case Xi:
                                            case es:
                                                return un(+e, +n);
                                            case $s:
                                                return e.name == n.name && e.message == n.message;
                                            case ts:
                                            case rs:
                                                return e == n + "";
                                            case sn:
                                                var T = Ka;
                                            case on:
                                                if (T || (T = Js), e.size != n.size && !(1 & l)) return !1;
                                                var Y = R.get(e);
                                                if (Y) return Y == n;
                                                l |= 2, R.set(e, n);
                                                var ee = Mf(T(e), T(n), l, p, x, R);
                                                return R.delete(e), ee;
                                            case Bs:
                                                if (ls) return ls.call(e) == ls.call(n)
                                        }
                                        return !1
                                    }(e, n, M, s, l, p, x);
                                    if (!(1 & s)) {
                                        var Se = ee && ut.call(e, "__wrapped__"),
                                            Le = oe && ut.call(n, "__wrapped__");
                                        if (Se || Le) {
                                            var Ke = Se ? e.value() : e,
                                                je = Le ? n.value() : n;
                                            return x || (x = new cn), p(Ke, je, s, l, x)
                                        }
                                    }
                                    return !!me && (x || (x = new cn), function A_(e, n, s, l, p, x) {
                                        var R = 1 & s,
                                            T = yc(e),
                                            M = T.length;
                                        if (M != yc(n).length && !R) return !1;
                                        for (var oe = M; oe--;) {
                                            var me = T[oe];
                                            if (!(R ? me in n : ut.call(n, me))) return !1
                                        }
                                        var Se = x.get(e),
                                            Le = x.get(n);
                                        if (Se && Le) return Se == n && Le == e;
                                        var Ke = !0;
                                        x.set(e, n), x.set(n, e);
                                        for (var je = R; ++oe < M;) {
                                            var Ge = e[me = T[oe]],
                                                Ye = n[me];
                                            if (l) var Ur = R ? l(Ye, Ge, me, n, e, x) : l(Ge, Ye, me, e, n, x);
                                            if (!(Ur === t ? Ge === Ye || p(Ge, Ye, s, l, x) : Ur)) {
                                                Ke = !1;
                                                break
                                            }
                                            je || (je = "constructor" == me)
                                        }
                                        if (Ke && !je) {
                                            var Cr = e.constructor,
                                                $r = n.constructor;
                                            Cr != $r && "constructor" in e && "constructor" in n && !("function" == typeof Cr && Cr instanceof Cr && "function" == typeof $r && $r instanceof $r) && (Ke = !1)
                                        }
                                        return x.delete(e), x.delete(n), Ke
                                    }(e, n, s, l, p, x))
                                }(e, n, s, l, ps, p))
                            }

                            function rc(e, n, s, l) {
                                var p = s.length,
                                    x = p,
                                    R = !l;
                                if (null == e) return !x;
                                for (e = yt(e); p--;) {
                                    var T = s[p];
                                    if (R && T[2] ? T[1] !== e[T[0]] : !(T[0] in e)) return !1
                                }
                                for (; ++p < x;) {
                                    var M = (T = s[p])[0],
                                        Y = e[M],
                                        ee = T[1];
                                    if (R && T[2]) {
                                        if (Y === t && !(M in e)) return !1
                                    } else {
                                        var oe = new cn;
                                        if (l) var me = l(Y, ee, M, e, n, oe);
                                        if (!(me === t ? ps(ee, Y, 3, l, oe) : me)) return !1
                                    }
                                }
                                return !0
                            }

                            function sf(e) {
                                return !(!Ct(e) || function Z_(e) {
                                    return !!ql && ql in e
                                }(e)) && (Dn(e) ? r0 : Vy).test(li(e))
                            }

                            function of (e) {
                                return "function" == typeof e ? e : null == e ? Fr : "object" == typeof e ? qe(e) ? uf(e[0], e[1]) : cf(e) : Rh(e)
                            }

                            function nc(e) {
                                if (!vs(e)) return c0(e);
                                var n = [];
                                for (var s in yt(e)) ut.call(e, s) && "constructor" != s && n.push(s);
                                return n
                            }

                            function ic(e, n) {
                                return e < n
                            }

                            function af(e, n) {
                                var s = -1,
                                    l = Lr(e) ? q(e.length) : [];
                                return Kn(e, function(p, x, R) {
                                    l[++s] = n(p, x, R)
                                }), l
                            }

                            function cf(e) {
                                var n = mc(e);
                                return 1 == n.length && n[0][2] ? $f(n[0][0], n[0][1]) : function(s) {
                                    return s === e || rc(s, e, n)
                                }
                            }

                            function uf(e, n) {
                                return wc(e) && Uf(n) ? $f(vn(e), n) : function(s) {
                                    var l = Tc(s, e);
                                    return l === t && l === n ? Dc(s, e) : ps(n, l, 3)
                                }
                            }

                            function go(e, n, s, l, p) {
                                e !== n && Ya(n, function(x, R) {
                                    if (p || (p = new cn), Ct(x)) ! function a_(e, n, s, l, p, x, R) {
                                        var T = Ec(e, s),
                                            M = Ec(n, s),
                                            Y = R.get(M);
                                        if (Y) Ja(e, s, Y);
                                        else {
                                            var ee = x ? x(T, M, s + "", e, n, R) : t,
                                                oe = ee === t;
                                            if (oe) {
                                                var me = qe(M),
                                                    Se = !me && Wn(M),
                                                    Le = !me && !Se && Zi(M);
                                                ee = M, me || Se || Le ? qe(T) ? ee = T : Gt(T) ? ee = Nr(T) : Se ? (oe = !1, ee = wf(M, !0)) : Le ? (oe = !1, ee = xf(M, !0)) : ee = [] : ms(M) || fi(M) ? (ee = T, fi(T) ? ee = _h(T) : (!Ct(T) || Dn(T)) && (ee = qf(M))) : oe = !1
                                            }
                                            oe && (R.set(M, ee), p(ee, M, l, x, R), R.delete(M)), Ja(e, s, ee)
                                        }
                                    }(e, n, R, s, go, l, p);
                                    else {
                                        var T = l ? l(Ec(e, R), x, R + "", e, n, p) : t;
                                        T === t && (T = x), Ja(e, R, T)
                                    }
                                }, jr)
                            }

                            function lf(e, n) {
                                var s = e.length;
                                if (s) return Tn(n += n < 0 ? s : 0, s) ? e[n] : t
                            }

                            function ff(e, n, s) {
                                n = n.length ? Ot(n, function(x) {
                                    return qe(x) ? function(R) {
                                        return ci(R, 1 === x.length ? x[0] : x)
                                    } : x
                                }) : [Fr];
                                var l = -1;
                                return n = Ot(n, Zr(De())),
                                    function Lv(F, k) {
                                        var q = F.length;
                                        for (F.sort(k); q--;) F[q] = F[q].value;
                                        return F
                                    }(af(e, function(x, R, T) {
                                        return {
                                            criteria: Ot(n, function(Y) {
                                                return Y(x)
                                            }),
                                            index: ++l,
                                            value: x
                                        }
                                    }), function(x, R) {
                                        return function b_(e, n, s) {
                                            for (var l = -1, p = e.criteria, x = n.criteria, R = p.length, T = s.length; ++l < R;) {
                                                var M = Ef(p[l], x[l]);
                                                if (M) return l >= T ? M : M * ("desc" == s[l] ? -1 : 1)
                                            }
                                            return e.index - n.index
                                        }(x, R, s)
                                    })
                            }

                            function hf(e, n, s) {
                                for (var l = -1, p = n.length, x = {}; ++l < p;) {
                                    var R = n[l],
                                        T = ci(e, R);
                                    s(T, R) && gs(x, kn(R, e), T)
                                }
                                return x
                            }

                            function sc(e, n, s, l) {
                                var p = l ? Nv : Oi,
                                    x = -1,
                                    R = n.length,
                                    T = e;
                                for (e === n && (n = Nr(n)), s && (T = Ot(e, Zr(s))); ++x < R;)
                                    for (var M = 0, Y = n[x], ee = s ? s(Y) : Y;
                                        (M = p(T, ee, M, l)) > -1;) T !== e && io.call(T, M, 1), io.call(e, M, 1);
                                return e
                            }

                            function df(e, n) {
                                for (var s = e ? n.length : 0, l = s - 1; s--;) {
                                    var p = n[s];
                                    if (s == l || p !== x) {
                                        var x = p;
                                        Tn(p) ? io.call(e, p, 1) : uc(e, p)
                                    }
                                }
                                return e
                            }

                            function oc(e, n) {
                                return e + ao(Vl() * (n - e + 1))
                            }

                            function ac(e, n) {
                                var s = "";
                                if (!e || n < 1 || n > qn) return s;
                                do {
                                    n % 2 && (s += e), (n = ao(n / 2)) && (e += e)
                                } while (n);
                                return s
                            }

                            function Ve(e, n) {
                                return Ic(Hf(e, n, Fr), e + "")
                            }

                            function f_(e) {
                                return Wl(zi(e))
                            }

                            function h_(e, n) {
                                var s = zi(e);
                                return Po(s, ai(n, 0, s.length))
                            }

                            function gs(e, n, s, l) {
                                if (!Ct(e)) return e;
                                for (var p = -1, x = (n = kn(n, e)).length, R = x - 1, T = e; null != T && ++p < x;) {
                                    var M = vn(n[p]),
                                        Y = s;
                                    if ("__proto__" === M || "constructor" === M || "prototype" === M) return e;
                                    if (p != R) {
                                        var ee = T[M];
                                        (Y = l ? l(ee, M, T) : t) === t && (Y = Ct(ee) ? ee : Tn(n[p + 1]) ? [] : {})
                                    }
                                    fs(T, M, Y), T = T[M]
                                }
                                return e
                            }
                            var pf = co ? function(e, n) {
                                    return co.set(e, n), e
                                } : Fr,
                                d_ = so ? function(e, n) {
                                    return so(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: Lc(n),
                                        writable: !0
                                    })
                                } : Fr;

                            function p_(e) {
                                return Po(zi(e))
                            }

                            function Yr(e, n, s) {
                                var l = -1,
                                    p = e.length;
                                n < 0 && (n = -n > p ? 0 : p + n), (s = s > p ? p : s) < 0 && (s += p), p = n > s ? 0 : s - n >>> 0, n >>>= 0;
                                for (var x = q(p); ++l < p;) x[l] = e[l + n];
                                return x
                            }

                            function g_(e, n) {
                                var s;
                                return Kn(e, function(l, p, x) {
                                    return !(s = n(l, p, x))
                                }), !!s
                            }

                            function yo(e, n, s) {
                                var l = 0,
                                    p = null == e ? l : e.length;
                                if ("number" == typeof n && n == n && p <= 2147483647) {
                                    for (; l < p;) {
                                        var x = l + p >>> 1,
                                            R = e[x];
                                        null !== R && !qr(R) && (s ? R <= n : R < n) ? l = x + 1 : p = x
                                    }
                                    return p
                                }
                                return cc(e, n, Fr, s)
                            }

                            function cc(e, n, s, l) {
                                var p = 0,
                                    x = null == e ? 0 : e.length;
                                if (0 === x) return 0;
                                for (var R = (n = s(n)) != n, T = null === n, M = qr(n), Y = n === t; p < x;) {
                                    var ee = ao((p + x) / 2),
                                        oe = s(e[ee]),
                                        me = oe !== t,
                                        Se = null === oe,
                                        Le = oe == oe,
                                        Ke = qr(oe);
                                    if (R) var je = l || Le;
                                    else je = Y ? Le && (l || me) : T ? Le && me && (l || !Se) : M ? Le && me && !Se && (l || !Ke) : !Se && !Ke && (l ? oe <= n : oe < n);
                                    je ? p = ee + 1 : x = ee
                                }
                                return Ir(x, 4294967294)
                            }

                            function gf(e, n) {
                                for (var s = -1, l = e.length, p = 0, x = []; ++s < l;) {
                                    var R = e[s],
                                        T = n ? n(R) : R;
                                    if (!s || !un(T, M)) {
                                        var M = T;
                                        x[p++] = 0 === R ? 0 : R
                                    }
                                }
                                return x
                            }

                            function yf(e) {
                                return "number" == typeof e ? e : qr(e) ? NaN : +e
                            }

                            function zr(e) {
                                if ("string" == typeof e) return e;
                                if (qe(e)) return Ot(e, zr) + "";
                                if (qr(e)) return kl ? kl.call(e) : "";
                                var n = e + "";
                                return "0" == n && 1 / e == -ri ? "-0" : n
                            }

                            function Vn(e, n, s) {
                                var l = -1,
                                    p = Gs,
                                    x = e.length,
                                    R = !0,
                                    T = [],
                                    M = T;
                                if (s) R = !1, p = Ma;
                                else if (x >= 200) {
                                    var Y = n ? null : S_(e);
                                    if (Y) return Js(Y);
                                    R = !1, p = ss, M = new oi
                                } else M = n ? [] : T;
                                e: for (; ++l < x;) {
                                    var ee = e[l],
                                        oe = n ? n(ee) : ee;
                                    if (ee = s || 0 !== ee ? ee : 0, R && oe == oe) {
                                        for (var me = M.length; me--;)
                                            if (M[me] === oe) continue e;
                                        n && M.push(oe), T.push(ee)
                                    } else p(M, oe, s) || (M !== T && M.push(oe), T.push(ee))
                                }
                                return T
                            }

                            function uc(e, n) {
                                return null == (e = Bf(e, n = kn(n, e))) || delete e[vn(Xr(n))]
                            }

                            function vf(e, n, s, l) {
                                return gs(e, n, s(ci(e, n)), l)
                            }

                            function vo(e, n, s, l) {
                                for (var p = e.length, x = l ? p : -1;
                                    (l ? x-- : ++x < p) && n(e[x], x, e););
                                return s ? Yr(e, l ? 0 : x, l ? x + 1 : p) : Yr(e, l ? x + 1 : 0, l ? p : x)
                            }

                            function _f(e, n) {
                                var s = e;
                                return s instanceof Qe && (s = s.value()), Za(n, function(l, p) {
                                    return p.func.apply(p.thisArg, $n([l], p.args))
                                }, s)
                            }

                            function lc(e, n, s) {
                                var l = e.length;
                                if (l < 2) return l ? Vn(e[0]) : [];
                                for (var p = -1, x = q(l); ++p < l;)
                                    for (var R = e[p], T = -1; ++T < l;) T != p && (x[p] = hs(x[p] || R, e[T], n, s));
                                return Vn(mr(x, 1), n, s)
                            }

                            function mf(e, n, s) {
                                for (var l = -1, p = e.length, x = n.length, R = {}; ++l < p;) s(R, e[l], l < x ? n[l] : t);
                                return R
                            }

                            function fc(e) {
                                return Gt(e) ? e : []
                            }

                            function hc(e) {
                                return "function" == typeof e ? e : Fr
                            }

                            function kn(e, n) {
                                return qe(e) ? e : wc(e, n) ? [e] : Gf(at(e))
                            }
                            var y_ = Ve;

                            function Gn(e, n, s) {
                                var l = e.length;
                                return s = s === t ? l : s, !n && s >= l ? e : Yr(e, n, s)
                            }
                            var bf = n0 || function(e) {
                                return _r.clearTimeout(e)
                            };

                            function wf(e, n) {
                                if (n) return e.slice();
                                var s = e.length,
                                    l = Ul ? Ul(s) : new e.constructor(s);
                                return e.copy(l), l
                            }

                            function dc(e) {
                                var n = new e.constructor(e.byteLength);
                                return new ro(n).set(new ro(e)), n
                            }

                            function xf(e, n) {
                                var s = n ? dc(e.buffer) : e.buffer;
                                return new e.constructor(s, e.byteOffset, e.length)
                            }

                            function Ef(e, n) {
                                if (e !== n) {
                                    var s = e !== t,
                                        l = null === e,
                                        p = e == e,
                                        x = qr(e),
                                        R = n !== t,
                                        T = null === n,
                                        M = n == n,
                                        Y = qr(n);
                                    if (!T && !Y && !x && e > n || x && R && M && !T && !Y || l && R && M || !s && M || !p) return 1;
                                    if (!l && !x && !Y && e < n || Y && s && p && !l && !x || T && s && p || !R && p || !M) return -1
                                }
                                return 0
                            }

                            function If(e, n, s, l) {
                                for (var p = -1, x = e.length, R = s.length, T = -1, M = n.length, Y = fr(x - R, 0), ee = q(M + Y), oe = !l; ++T < M;) ee[T] = n[T];
                                for (; ++p < R;)(oe || p < x) && (ee[s[p]] = e[p]);
                                for (; Y--;) ee[T++] = e[p++];
                                return ee
                            }

                            function Pf(e, n, s, l) {
                                for (var p = -1, x = e.length, R = -1, T = s.length, M = -1, Y = n.length, ee = fr(x - T, 0), oe = q(ee + Y), me = !l; ++p < ee;) oe[p] = e[p];
                                for (var Se = p; ++M < Y;) oe[Se + M] = n[M];
                                for (; ++R < T;)(me || p < x) && (oe[Se + s[R]] = e[p++]);
                                return oe
                            }

                            function Nr(e, n) {
                                var s = -1,
                                    l = e.length;
                                for (n || (n = q(l)); ++s < l;) n[s] = e[s];
                                return n
                            }

                            function yn(e, n, s, l) {
                                var p = !s;
                                s || (s = {});
                                for (var x = -1, R = n.length; ++x < R;) {
                                    var T = n[x],
                                        M = l ? l(s[T], e[T], T, s, e) : t;
                                    M === t && (M = e[T]), p ? Rn(s, T, M) : fs(s, T, M)
                                }
                                return s
                            }

                            function _o(e, n) {
                                return function(s, l) {
                                    var p = qe(s) ? Ov : B0,
                                        x = n ? n() : {};
                                    return p(s, e, De(l, 2), x)
                                }
                            }

                            function ji(e) {
                                return Ve(function(n, s) {
                                    var l = -1,
                                        p = s.length,
                                        x = p > 1 ? s[p - 1] : t,
                                        R = p > 2 ? s[2] : t;
                                    for (x = e.length > 3 && "function" == typeof x ? (p--, x) : t, R && Ar(s[0], s[1], R) && (x = p < 3 ? t : x, p = 1), n = yt(n); ++l < p;) {
                                        var T = s[l];
                                        T && e(n, T, l, x)
                                    }
                                    return n
                                })
                            }

                            function Sf(e, n) {
                                return function(s, l) {
                                    if (null == s) return s;
                                    if (!Lr(s)) return e(s, l);
                                    for (var p = s.length, x = n ? p : -1, R = yt(s);
                                        (n ? x-- : ++x < p) && !1 !== l(R[x], x, R););
                                    return s
                                }
                            }

                            function Of(e) {
                                return function(n, s, l) {
                                    for (var p = -1, x = yt(n), R = l(n), T = R.length; T--;) {
                                        var M = R[e ? T : ++p];
                                        if (!1 === s(x[M], M, x)) break
                                    }
                                    return n
                                }
                            }

                            function Rf(e) {
                                return function(n) {
                                    var s = Ri(n = at(n)) ? an(n) : t,
                                        l = s ? s[0] : n.charAt(0),
                                        p = s ? Gn(s, 1).join("") : n.slice(1);
                                    return l[e]() + p
                                }
                            }

                            function Fi(e) {
                                return function(n) {
                                    return Za(Sh(Ph(n).replace(dv, "")), e, "")
                                }
                            }

                            function ys(e) {
                                return function() {
                                    var n = arguments;
                                    switch (n.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(n[0]);
                                        case 2:
                                            return new e(n[0], n[1]);
                                        case 3:
                                            return new e(n[0], n[1], n[2]);
                                        case 4:
                                            return new e(n[0], n[1], n[2], n[3]);
                                        case 5:
                                            return new e(n[0], n[1], n[2], n[3], n[4]);
                                        case 6:
                                            return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
                                        case 7:
                                            return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                                    }
                                    var s = Li(e.prototype),
                                        l = e.apply(s, n);
                                    return Ct(l) ? l : s
                                }
                            }

                            function Af(e) {
                                return function(n, s, l) {
                                    var p = yt(n);
                                    if (!Lr(n)) {
                                        var x = De(s, 3);
                                        n = gr(n), s = function(T) {
                                            return x(p[T], T, p)
                                        }
                                    }
                                    var R = e(n, s, l);
                                    return R > -1 ? p[x ? n[R] : R] : t
                                }
                            }

                            function Cf(e) {
                                return Cn(function(n) {
                                    var s = n.length,
                                        l = s,
                                        p = Jr.prototype.thru;
                                    for (e && n.reverse(); l--;) {
                                        var x = n[l];
                                        if ("function" != typeof x) throw new Wr(h);
                                        if (p && !R && "wrapper" == Eo(x)) var R = new Jr([], !0)
                                    }
                                    for (l = R ? l : s; ++l < s;) {
                                        var T = Eo(x = n[l]),
                                            M = "wrapper" == T ? _c(x) : t;
                                        R = M && xc(M[0]) && 424 == M[1] && !M[4].length && 1 == M[9] ? R[Eo(M[0])].apply(R, M[3]) : 1 == x.length && xc(x) ? R[T]() : R.thru(x)
                                    }
                                    return function() {
                                        var Y = arguments,
                                            ee = Y[0];
                                        if (R && 1 == Y.length && qe(ee)) return R.plant(ee).value();
                                        for (var oe = 0, me = s ? n[oe].apply(this, Y) : ee; ++oe < s;) me = n[oe].call(this, me);
                                        return me
                                    }
                                })
                            }

                            function mo(e, n, s, l, p, x, R, T, M, Y) {
                                var ee = 128 & n,
                                    oe = 1 & n,
                                    me = 2 & n,
                                    Se = 24 & n,
                                    Le = 512 & n,
                                    Ke = me ? t : ys(e);
                                return function je() {
                                    for (var Ge = arguments.length, Ye = q(Ge), Ur = Ge; Ur--;) Ye[Ur] = arguments[Ur];
                                    if (Se) var Cr = Mi(je),
                                        $r = function Fv(F, k) {
                                            for (var q = F.length, Ie = 0; q--;) F[q] === k && ++Ie;
                                            return Ie
                                        }(Ye, Cr);
                                    if (l && (Ye = If(Ye, l, p, Se)), x && (Ye = Pf(Ye, x, R, Se)), Ge -= $r, Se && Ge < Y) {
                                        var Wt = Hn(Ye, Cr);
                                        return Nf(e, n, mo, je.placeholder, s, Ye, Wt, T, M, Y - Ge)
                                    }
                                    var ln = oe ? s : this,
                                        Ln = me ? ln[e] : e;
                                    return Ge = Ye.length, T ? Ye = function B_(e, n) {
                                        for (var s = e.length, l = Ir(n.length, s), p = Nr(e); l--;) {
                                            var x = n[l];
                                            e[l] = Tn(x, s) ? p[x] : t
                                        }
                                        return e
                                    }(Ye, T) : Le && Ge > 1 && Ye.reverse(), ee && M < Ge && (Ye.length = M), this && this !== _r && this instanceof je && (Ln = Ke || ys(Ln)), Ln.apply(ln, Ye)
                                }
                            }

                            function Tf(e, n) {
                                return function(s, l) {
                                    return function Y0(e, n, s, l) {
                                        return gn(e, function(p, x, R) {
                                            n(l, s(p), x, R)
                                        }), l
                                    }(s, e, n(l), {})
                                }
                            }

                            function bo(e, n) {
                                return function(s, l) {
                                    var p;
                                    if (s === t && l === t) return n;
                                    if (s !== t && (p = s), l !== t) {
                                        if (p === t) return l;
                                        "string" == typeof s || "string" == typeof l ? (s = zr(s), l = zr(l)) : (s = yf(s), l = yf(l)), p = e(s, l)
                                    }
                                    return p
                                }
                            }

                            function pc(e) {
                                return Cn(function(n) {
                                    return n = Ot(n, Zr(De())), Ve(function(s) {
                                        var l = this;
                                        return e(n, function(p) {
                                            return Mr(p, l, s)
                                        })
                                    })
                                })
                            }

                            function wo(e, n) {
                                var s = (n = n === t ? " " : zr(n)).length;
                                if (s < 2) return s ? ac(n, e) : n;
                                var l = ac(n, oo(e / Ai(n)));
                                return Ri(n) ? Gn(an(l), 0, e).join("") : l.slice(0, e)
                            }

                            function Df(e) {
                                return function(n, s, l) {
                                    return l && "number" != typeof l && Ar(n, s, l) && (s = l = t), n = Nn(n), s === t ? (s = n, n = 0) : s = Nn(s),
                                        function l_(e, n, s, l) {
                                            for (var p = -1, x = fr(oo((n - e) / (s || 1)), 0), R = q(x); x--;) R[l ? x : ++p] = e, e += s;
                                            return R
                                        }(n, s, l = l === t ? n < s ? 1 : -1 : Nn(l), e)
                                }
                            }

                            function xo(e) {
                                return function(n, s) {
                                    return "string" == typeof n && "string" == typeof s || (n = en(n), s = en(s)), e(n, s)
                                }
                            }

                            function Nf(e, n, s, l, p, x, R, T, M, Y) {
                                var ee = 8 & n;
                                n |= ee ? 32 : 64, 4 & (n &= ~(ee ? 64 : 32)) || (n &= -4);
                                var Ke = [e, n, p, ee ? x : t, ee ? R : t, ee ? t : x, ee ? t : R, T, M, Y],
                                    je = s.apply(t, Ke);
                                return xc(e) && Kf(je, Ke), je.placeholder = l, Vf(je, e, n)
                            }

                            function gc(e) {
                                var n = lr[e];
                                return function(s, l) {
                                    if (s = en(s), (l = null == l ? 0 : Ir($e(l), 292)) && Kl(s)) {
                                        var p = (at(s) + "e").split("e");
                                        return +((p = (at(n(p[0] + "e" + (+p[1] + l))) + "e").split("e"))[0] + "e" + (+p[1] - l))
                                    }
                                    return n(s)
                                }
                            }
                            var S_ = Di && 1 / Js(new Di([, -0]))[1] == ri ? function(e) {
                                return new Di(e)
                            } : Mc;

                            function Lf(e) {
                                return function(n) {
                                    var s = Pr(n);
                                    return s == sn ? Ka(n) : s == on ? function Hv(F) {
                                        var k = -1,
                                            q = Array(F.size);
                                        return F.forEach(function(Ie) {
                                            q[++k] = [Ie, Ie]
                                        }), q
                                    }(n) : function jv(F, k) {
                                        return Ot(k, function(q) {
                                            return [q, F[q]]
                                        })
                                    }(n, e(n))
                                }
                            }

                            function An(e, n, s, l, p, x, R, T) {
                                var M = 2 & n;
                                if (!M && "function" != typeof e) throw new Wr(h);
                                var Y = l ? l.length : 0;
                                if (Y || (n &= -97, l = p = t), R = R === t ? R : fr($e(R), 0), T = T === t ? T : $e(T), Y -= p ? p.length : 0, 64 & n) {
                                    var ee = l,
                                        oe = p;
                                    l = p = t
                                }
                                var me = M ? t : _c(e),
                                    Se = [e, n, s, l, p, ee, oe, x, R, T];
                                if (me && function U_(e, n) {
                                        var s = e[1],
                                            l = n[1],
                                            p = s | l;
                                        if (!(p < 131) && !(128 == l && 8 == s || 128 == l && 256 == s && e[7].length <= n[8] || 384 == l && n[7].length <= n[8] && 8 == s)) return e;
                                        1 & l && (e[2] = n[2], p |= 1 & s ? 0 : 4);
                                        var T = n[3];
                                        if (T) {
                                            var M = e[3];
                                            e[3] = M ? If(M, T, n[4]) : T, e[4] = M ? Hn(e[3], N) : n[4]
                                        }(T = n[5]) && (e[5] = (M = e[5]) ? Pf(M, T, n[6]) : T, e[6] = M ? Hn(e[5], N) : n[6]), (T = n[7]) && (e[7] = T), 128 & l && (e[8] = null == e[8] ? n[8] : Ir(e[8], n[8])), null == e[9] && (e[9] = n[9]), e[0] = n[0], e[1] = p
                                    }(Se, me), e = Se[0], n = Se[1], s = Se[2], l = Se[3], p = Se[4], !(T = Se[9] = Se[9] === t ? M ? 0 : e.length : fr(Se[9] - Y, 0)) && 24 & n && (n &= -25), n && 1 != n) Le = 8 == n || 16 == n ? function I_(e, n, s) {
                                    var l = ys(e);
                                    return function p() {
                                        for (var x = arguments.length, R = q(x), T = x, M = Mi(p); T--;) R[T] = arguments[T];
                                        var Y = x < 3 && R[0] !== M && R[x - 1] !== M ? [] : Hn(R, M);
                                        return (x -= Y.length) < s ? Nf(e, n, mo, p.placeholder, t, R, Y, t, t, s - x) : Mr(this && this !== _r && this instanceof p ? l : e, this, R)
                                    }
                                }(e, n, T) : 32 != n && 33 != n || p.length ? mo.apply(t, Se) : function P_(e, n, s, l) {
                                    var p = 1 & n,
                                        x = ys(e);
                                    return function R() {
                                        for (var T = -1, M = arguments.length, Y = -1, ee = l.length, oe = q(ee + M), me = this && this !== _r && this instanceof R ? x : e; ++Y < ee;) oe[Y] = l[Y];
                                        for (; M--;) oe[Y++] = arguments[++T];
                                        return Mr(me, p ? s : this, oe)
                                    }
                                }(e, n, s, l);
                                else var Le = function E_(e, n, s) {
                                    var l = 1 & n,
                                        p = ys(e);
                                    return function x() {
                                        return (this && this !== _r && this instanceof x ? p : e).apply(l ? s : this, arguments)
                                    }
                                }(e, n, s);
                                return Vf((me ? pf : Kf)(Le, Se), e, n)
                            }

                            function jf(e, n, s, l) {
                                return e === t || un(e, Ti[s]) && !ut.call(l, s) ? n : e
                            }

                            function Ff(e, n, s, l, p, x) {
                                return Ct(e) && Ct(n) && (x.set(n, e), go(e, n, t, Ff, x), x.delete(n)), e
                            }

                            function O_(e) {
                                return ms(e) ? t : e
                            }

                            function Mf(e, n, s, l, p, x) {
                                var R = 1 & s,
                                    T = e.length,
                                    M = n.length;
                                if (T != M && !(R && M > T)) return !1;
                                var Y = x.get(e),
                                    ee = x.get(n);
                                if (Y && ee) return Y == n && ee == e;
                                var oe = -1,
                                    me = !0,
                                    Se = 2 & s ? new oi : t;
                                for (x.set(e, n), x.set(n, e); ++oe < T;) {
                                    var Le = e[oe],
                                        Ke = n[oe];
                                    if (l) var je = R ? l(Ke, Le, oe, n, e, x) : l(Le, Ke, oe, e, n, x);
                                    if (je !== t) {
                                        if (je) continue;
                                        me = !1;
                                        break
                                    }
                                    if (Se) {
                                        if (!za(n, function(Ge, Ye) {
                                                if (!ss(Se, Ye) && (Le === Ge || p(Le, Ge, s, l, x))) return Se.push(Ye)
                                            })) {
                                            me = !1;
                                            break
                                        }
                                    } else if (Le !== Ke && !p(Le, Ke, s, l, x)) {
                                        me = !1;
                                        break
                                    }
                                }
                                return x.delete(e), x.delete(n), me
                            }

                            function Cn(e) {
                                return Ic(Hf(e, t, Yf), e + "")
                            }

                            function yc(e) {
                                return rf(e, gr, bc)
                            }

                            function vc(e) {
                                return rf(e, jr, Zf)
                            }
                            var _c = co ? function(e) {
                                return co.get(e)
                            } : Mc;

                            function Eo(e) {
                                for (var n = e.name + "", s = Ni[n], l = ut.call(Ni, n) ? s.length : 0; l--;) {
                                    var p = s[l],
                                        x = p.func;
                                    if (null == x || x == e) return p.name
                                }
                                return n
                            }

                            function Mi(e) {
                                return (ut.call(_, "placeholder") ? _ : e).placeholder
                            }

                            function De() {
                                var e = _.iteratee || jc;
                                return e = e === jc ? of : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function Io(e, n) {
                                var s = e.__data__;
                                return function M_(e) {
                                    var n = typeof e;
                                    return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e
                                }(n) ? s["string" == typeof n ? "string" : "hash"] : s.map
                            }

                            function mc(e) {
                                for (var n = gr(e), s = n.length; s--;) {
                                    var l = n[s],
                                        p = e[l];
                                    n[s] = [l, p, Uf(p)]
                                }
                                return n
                            }

                            function ui(e, n) {
                                var s = function qv(F, k) {
                                    return null == F ? t : F[k]
                                }(e, n);
                                return sf(s) ? s : t
                            }
                            var bc = ka ? function(e) {
                                    return null == e ? [] : (e = yt(e), Un(ka(e), function(n) {
                                        return Hl.call(e, n)
                                    }))
                                } : Zc,
                                Zf = ka ? function(e) {
                                    for (var n = []; e;) $n(n, bc(e)), e = no(e);
                                    return n
                                } : Zc,
                                Pr = Rr;

                            function zf(e, n, s) {
                                for (var l = -1, p = (n = kn(n, e)).length, x = !1; ++l < p;) {
                                    var R = vn(n[l]);
                                    if (!(x = null != e && s(e, R))) break;
                                    e = e[R]
                                }
                                return x || ++l != p ? x : !!(p = null == e ? 0 : e.length) && To(p) && Tn(R, p) && (qe(e) || fi(e))
                            }

                            function qf(e) {
                                return "function" != typeof e.constructor || vs(e) ? {} : Li(no(e))
                            }

                            function F_(e) {
                                return qe(e) || fi(e) || !!(Bl && e && e[Bl])
                            }

                            function Tn(e, n) {
                                var s = typeof e;
                                return !!(n = n ? ? qn) && ("number" == s || "symbol" != s && Gy.test(e)) && e > -1 && e % 1 == 0 && e < n
                            }

                            function Ar(e, n, s) {
                                if (!Ct(s)) return !1;
                                var l = typeof n;
                                return !!("number" == l ? Lr(s) && Tn(n, s.length) : "string" == l && n in s) && un(s[n], e)
                            }

                            function wc(e, n) {
                                if (qe(e)) return !1;
                                var s = typeof e;
                                return !("number" != s && "symbol" != s && "boolean" != s && null != e && !qr(e)) || Ny.test(e) || !Dy.test(e) || null != n && e in yt(n)
                            }

                            function xc(e) {
                                var n = Eo(e),
                                    s = _[n];
                                if ("function" != typeof s || !(n in Qe.prototype)) return !1;
                                if (e === s) return !0;
                                var l = _c(s);
                                return !!l && e === l[0]
                            }(Ga && Pr(new Ga(new ArrayBuffer(1))) != Pi || as && Pr(new as) != sn || Wa && Pr(Wa.resolve()) != Xu || Di && Pr(new Di) != on || cs && Pr(new cs) != ns) && (Pr = function(e) {
                                var n = Rr(e),
                                    s = n == Pn ? e.constructor : t,
                                    l = s ? li(s) : "";
                                if (l) switch (l) {
                                    case h0:
                                        return Pi;
                                    case d0:
                                        return sn;
                                    case p0:
                                        return Xu;
                                    case g0:
                                        return on;
                                    case y0:
                                        return ns
                                }
                                return n
                            });
                            var z_ = Ys ? Dn : zc;

                            function vs(e) {
                                var n = e && e.constructor;
                                return e === ("function" == typeof n && n.prototype || Ti)
                            }

                            function Uf(e) {
                                return e == e && !Ct(e)
                            }

                            function $f(e, n) {
                                return function(s) {
                                    return null != s && s[e] === n && (n !== t || e in yt(s))
                                }
                            }

                            function Hf(e, n, s) {
                                return n = fr(n === t ? e.length - 1 : n, 0),
                                    function() {
                                        for (var l = arguments, p = -1, x = fr(l.length - n, 0), R = q(x); ++p < x;) R[p] = l[n + p];
                                        p = -1;
                                        for (var T = q(n + 1); ++p < n;) T[p] = l[p];
                                        return T[n] = s(R), Mr(e, this, T)
                                    }
                            }

                            function Bf(e, n) {
                                return n.length < 2 ? e : ci(e, Yr(n, 0, -1))
                            }

                            function Ec(e, n) {
                                if (("constructor" !== n || "function" != typeof e[n]) && "__proto__" != n) return e[n]
                            }
                            var Kf = kf(pf),
                                _s = s0 || function(e, n) {
                                    return _r.setTimeout(e, n)
                                },
                                Ic = kf(d_);

                            function Vf(e, n, s) {
                                var l = n + "";
                                return Ic(e, function j_(e, n) {
                                    var s = n.length;
                                    if (!s) return e;
                                    var l = s - 1;
                                    return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), e.replace(My, "{\n/* [wrapped with " + n + "] */\n")
                                }(l, function K_(e, n) {
                                    return Gr(_y, function(s) {
                                        var l = "_." + s[0];
                                        n & s[1] && !Gs(e, l) && e.push(l)
                                    }), e.sort()
                                }(function D_(e) {
                                    var n = e.match(Zy);
                                    return n ? n[1].split(zy) : []
                                }(l), s)))
                            }

                            function kf(e) {
                                var n = 0,
                                    s = 0;
                                return function() {
                                    var l = u0(),
                                        p = 16 - (l - s);
                                    if (s = l, p > 0) {
                                        if (++n >= 800) return arguments[0]
                                    } else n = 0;
                                    return e.apply(t, arguments)
                                }
                            }

                            function Po(e, n) {
                                var s = -1,
                                    l = e.length,
                                    p = l - 1;
                                for (n = n === t ? l : n; ++s < n;) {
                                    var x = oc(s, p),
                                        R = e[x];
                                    e[x] = e[s], e[s] = R
                                }
                                return e.length = n, e
                            }
                            var Gf = function q_(e) {
                                var n = Ao(e, function(l) {
                                        return 500 === s.size && s.clear(), l
                                    }),
                                    s = n.cache;
                                return n
                            }(function(e) {
                                var n = [];
                                return 46 === e.charCodeAt(0) && n.push(""), e.replace(Ly, function(s, l, p, x) {
                                    n.push(p ? x.replace($y, "$1") : l || s)
                                }), n
                            });

                            function vn(e) {
                                if ("string" == typeof e || qr(e)) return e;
                                var n = e + "";
                                return "0" == n && 1 / e == -ri ? "-0" : n
                            }

                            function li(e) {
                                if (null != e) {
                                    try {
                                        return Xs.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function Wf(e) {
                                if (e instanceof Qe) return e.clone();
                                var n = new Jr(e.__wrapped__, e.__chain__);
                                return n.__actions__ = Nr(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n
                            }
                            var W_ = Ve(function(e, n) {
                                    return Gt(e) ? hs(e, mr(n, 1, Gt, !0)) : []
                                }),
                                J_ = Ve(function(e, n) {
                                    var s = Xr(n);
                                    return Gt(s) && (s = t), Gt(e) ? hs(e, mr(n, 1, Gt, !0), De(s, 2)) : []
                                }),
                                Q_ = Ve(function(e, n) {
                                    var s = Xr(n);
                                    return Gt(s) && (s = t), Gt(e) ? hs(e, mr(n, 1, Gt, !0), t, s) : []
                                });

                            function Jf(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                if (!l) return -1;
                                var p = null == s ? 0 : $e(s);
                                return p < 0 && (p = fr(l + p, 0)), Ws(e, De(n, 3), p)
                            }

                            function Qf(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                if (!l) return -1;
                                var p = l - 1;
                                return s !== t && (p = $e(s), p = s < 0 ? fr(l + p, 0) : Ir(p, l - 1)), Ws(e, De(n, 3), p, !0)
                            }

                            function Yf(e) {
                                return null != e && e.length ? mr(e, 1) : []
                            }

                            function Xf(e) {
                                return e && e.length ? e[0] : t
                            }
                            var cm = Ve(function(e) {
                                    var n = Ot(e, fc);
                                    return n.length && n[0] === e[0] ? tc(n) : []
                                }),
                                um = Ve(function(e) {
                                    var n = Xr(e),
                                        s = Ot(e, fc);
                                    return n === Xr(s) ? n = t : s.pop(), s.length && s[0] === e[0] ? tc(s, De(n, 2)) : []
                                }),
                                lm = Ve(function(e) {
                                    var n = Xr(e),
                                        s = Ot(e, fc);
                                    return (n = "function" == typeof n ? n : t) && s.pop(), s.length && s[0] === e[0] ? tc(s, t, n) : []
                                });

                            function Xr(e) {
                                var n = null == e ? 0 : e.length;
                                return n ? e[n - 1] : t
                            }
                            var pm = Ve(eh);

                            function eh(e, n) {
                                return e && e.length && n && n.length ? sc(e, n) : e
                            }
                            var vm = Cn(function(e, n) {
                                var s = null == e ? 0 : e.length,
                                    l = Qa(e, n);
                                return df(e, Ot(n, function(p) {
                                    return Tn(p, s) ? +p : p
                                }).sort(Ef)), l
                            });

                            function Pc(e) {
                                return null == e ? e : f0.call(e)
                            }
                            var Nm = Ve(function(e) {
                                    return Vn(mr(e, 1, Gt, !0))
                                }),
                                Lm = Ve(function(e) {
                                    var n = Xr(e);
                                    return Gt(n) && (n = t), Vn(mr(e, 1, Gt, !0), De(n, 2))
                                }),
                                jm = Ve(function(e) {
                                    var n = Xr(e);
                                    return n = "function" == typeof n ? n : t, Vn(mr(e, 1, Gt, !0), t, n)
                                });

                            function Sc(e) {
                                if (!e || !e.length) return [];
                                var n = 0;
                                return e = Un(e, function(s) {
                                    if (Gt(s)) return n = fr(s.length, n), !0
                                }), Ha(n, function(s) {
                                    return Ot(e, qa(s))
                                })
                            }

                            function th(e, n) {
                                if (!e || !e.length) return [];
                                var s = Sc(e);
                                return null == n ? s : Ot(s, function(l) {
                                    return Mr(n, t, l)
                                })
                            }
                            var zm = Ve(function(e, n) {
                                    return Gt(e) ? hs(e, n) : []
                                }),
                                qm = Ve(function(e) {
                                    return lc(Un(e, Gt))
                                }),
                                Um = Ve(function(e) {
                                    var n = Xr(e);
                                    return Gt(n) && (n = t), lc(Un(e, Gt), De(n, 2))
                                }),
                                $m = Ve(function(e) {
                                    var n = Xr(e);
                                    return n = "function" == typeof n ? n : t, lc(Un(e, Gt), t, n)
                                }),
                                Hm = Ve(Sc),
                                Vm = Ve(function(e) {
                                    var n = e.length,
                                        s = n > 1 ? e[n - 1] : t;
                                    return s = "function" == typeof s ? (e.pop(), s) : t, th(e, s)
                                });

                            function rh(e) {
                                var n = _(e);
                                return n.__chain__ = !0, n
                            }

                            function So(e, n) {
                                return n(e)
                            }
                            var Gm = Cn(function(e) {
                                    var n = e.length,
                                        s = n ? e[0] : 0,
                                        l = this.__wrapped__,
                                        p = function(x) {
                                            return Qa(x, e)
                                        };
                                    return !(n > 1 || this.__actions__.length) && l instanceof Qe && Tn(s) ? ((l = l.slice(s, +s + (n ? 1 : 0))).__actions__.push({
                                        func: So,
                                        args: [p],
                                        thisArg: t
                                    }), new Jr(l, this.__chain__).thru(function(x) {
                                        return n && !x.length && x.push(t), x
                                    })) : this.thru(p)
                                }),
                                r1 = _o(function(e, n, s) {
                                    ut.call(e, s) ? ++e[s] : Rn(e, s, 1)
                                }),
                                s1 = Af(Jf),
                                o1 = Af(Qf);

                            function nh(e, n) {
                                return (qe(e) ? Gr : Kn)(e, De(n, 3))
                            }

                            function ih(e, n) {
                                return (qe(e) ? Rv : Xl)(e, De(n, 3))
                            }
                            var l1 = _o(function(e, n, s) {
                                    ut.call(e, s) ? e[s].push(n) : Rn(e, s, [n])
                                }),
                                h1 = Ve(function(e, n, s) {
                                    var l = -1,
                                        p = "function" == typeof n,
                                        x = Lr(e) ? q(e.length) : [];
                                    return Kn(e, function(R) {
                                        x[++l] = p ? Mr(n, R, s) : ds(R, n, s)
                                    }), x
                                }),
                                d1 = _o(function(e, n, s) {
                                    Rn(e, s, n)
                                });

                            function Oo(e, n) {
                                return (qe(e) ? Ot : af)(e, De(n, 3))
                            }
                            var g1 = _o(function(e, n, s) {
                                    e[s ? 0 : 1].push(n)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                I1 = Ve(function(e, n) {
                                    if (null == e) return [];
                                    var s = n.length;
                                    return s > 1 && Ar(e, n[0], n[1]) ? n = [] : s > 2 && Ar(n[0], n[1], n[2]) && (n = [n[0]]), ff(e, mr(n, 1), [])
                                }),
                                Ro = i0 || function() {
                                    return _r.Date.now()
                                };

                            function sh(e, n, s) {
                                return n = s ? t : n, An(e, 128, t, t, t, t, n = e && null == n ? e.length : n)
                            }

                            function oh(e, n) {
                                var s;
                                if ("function" != typeof n) throw new Wr(h);
                                return e = $e(e),
                                    function() {
                                        return --e > 0 && (s = n.apply(this, arguments)), e <= 1 && (n = t), s
                                    }
                            }
                            var Oc = Ve(function(e, n, s) {
                                    var l = 1;
                                    if (s.length) {
                                        var p = Hn(s, Mi(Oc));
                                        l |= 32
                                    }
                                    return An(e, l, n, s, p)
                                }),
                                ah = Ve(function(e, n, s) {
                                    var l = 3;
                                    if (s.length) {
                                        var p = Hn(s, Mi(ah));
                                        l |= 32
                                    }
                                    return An(n, l, e, s, p)
                                });

                            function lh(e, n, s) {
                                var l, p, x, R, T, M, Y = 0,
                                    ee = !1,
                                    oe = !1,
                                    me = !0;
                                if ("function" != typeof e) throw new Wr(h);

                                function Se(Wt) {
                                    var ln = l,
                                        Ln = p;
                                    return l = p = t, Y = Wt, R = e.apply(Ln, ln)
                                }

                                function je(Wt) {
                                    var ln = Wt - M;
                                    return M === t || ln >= n || ln < 0 || oe && Wt - Y >= x
                                }

                                function Ge() {
                                    var Wt = Ro();
                                    if (je(Wt)) return Ye(Wt);
                                    T = _s(Ge, function Ke(Wt) {
                                        var Ah = n - (Wt - M);
                                        return oe ? Ir(Ah, x - (Wt - Y)) : Ah
                                    }(Wt))
                                }

                                function Ye(Wt) {
                                    return T = t, me && l ? Se(Wt) : (l = p = t, R)
                                }

                                function $r() {
                                    var Wt = Ro(),
                                        ln = je(Wt);
                                    if (l = arguments, p = this, M = Wt, ln) {
                                        if (T === t) return function Le(Wt) {
                                            return Y = Wt, T = _s(Ge, n), ee ? Se(Wt) : R
                                        }(M);
                                        if (oe) return bf(T), T = _s(Ge, n), Se(M)
                                    }
                                    return T === t && (T = _s(Ge, n)), R
                                }
                                return n = en(n) || 0, Ct(s) && (ee = !!s.leading, x = (oe = "maxWait" in s) ? fr(en(s.maxWait) || 0, n) : x, me = "trailing" in s ? !!s.trailing : me), $r.cancel = function Ur() {
                                    T !== t && bf(T), Y = 0, l = M = p = T = t
                                }, $r.flush = function Cr() {
                                    return T === t ? R : Ye(Ro())
                                }, $r
                            }
                            var S1 = Ve(function(e, n) {
                                    return Yl(e, 1, n)
                                }),
                                O1 = Ve(function(e, n, s) {
                                    return Yl(e, en(n) || 0, s)
                                });

                            function Ao(e, n) {
                                if ("function" != typeof e || null != n && "function" != typeof n) throw new Wr(h);
                                var s = function() {
                                    var l = arguments,
                                        p = n ? n.apply(this, l) : l[0],
                                        x = s.cache;
                                    if (x.has(p)) return x.get(p);
                                    var R = e.apply(this, l);
                                    return s.cache = x.set(p, R) || x, R
                                };
                                return s.cache = new(Ao.Cache || On), s
                            }

                            function Co(e) {
                                if ("function" != typeof e) throw new Wr(h);
                                return function() {
                                    var n = arguments;
                                    switch (n.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, n[0]);
                                        case 2:
                                            return !e.call(this, n[0], n[1]);
                                        case 3:
                                            return !e.call(this, n[0], n[1], n[2])
                                    }
                                    return !e.apply(this, n)
                                }
                            }
                            Ao.Cache = On;
                            var C1 = y_(function(e, n) {
                                    var s = (n = 1 == n.length && qe(n[0]) ? Ot(n[0], Zr(De())) : Ot(mr(n, 1), Zr(De()))).length;
                                    return Ve(function(l) {
                                        for (var p = -1, x = Ir(l.length, s); ++p < x;) l[p] = n[p].call(this, l[p]);
                                        return Mr(e, this, l)
                                    })
                                }),
                                Rc = Ve(function(e, n) {
                                    var s = Hn(n, Mi(Rc));
                                    return An(e, 32, t, n, s)
                                }),
                                fh = Ve(function(e, n) {
                                    var s = Hn(n, Mi(fh));
                                    return An(e, 64, t, n, s)
                                }),
                                T1 = Cn(function(e, n) {
                                    return An(e, 256, t, t, t, n)
                                });

                            function un(e, n) {
                                return e === n || e != e && n != n
                            }
                            var H1 = xo(ec),
                                B1 = xo(function(e, n) {
                                    return e >= n
                                }),
                                fi = nf(function() {
                                    return arguments
                                }()) ? nf : function(e) {
                                    return Mt(e) && ut.call(e, "callee") && !Hl.call(e, "callee")
                                },
                                qe = q.isArray,
                                K1 = Il ? Zr(Il) : function X0(e) {
                                    return Mt(e) && Rr(e) == is
                                };

                            function Lr(e) {
                                return null != e && To(e.length) && !Dn(e)
                            }

                            function Gt(e) {
                                return Mt(e) && Lr(e)
                            }
                            var Wn = o0 || zc,
                                k1 = Pl ? Zr(Pl) : function e_(e) {
                                    return Mt(e) && Rr(e) == Xi
                                };

                            function Ac(e) {
                                if (!Mt(e)) return !1;
                                var n = Rr(e);
                                return n == $s || "[object DOMException]" == n || "string" == typeof e.message && "string" == typeof e.name && !ms(e)
                            }

                            function Dn(e) {
                                if (!Ct(e)) return !1;
                                var n = Rr(e);
                                return n == Hs || n == Yu || "[object AsyncFunction]" == n || "[object Proxy]" == n
                            }

                            function hh(e) {
                                return "number" == typeof e && e == $e(e)
                            }

                            function To(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= qn
                            }

                            function Ct(e) {
                                var n = typeof e;
                                return null != e && ("object" == n || "function" == n)
                            }

                            function Mt(e) {
                                return null != e && "object" == typeof e
                            }
                            var dh = Sl ? Zr(Sl) : function r_(e) {
                                return Mt(e) && Pr(e) == sn
                            };

                            function ph(e) {
                                return "number" == typeof e || Mt(e) && Rr(e) == es
                            }

                            function ms(e) {
                                if (!Mt(e) || Rr(e) != Pn) return !1;
                                var n = no(e);
                                if (null === n) return !0;
                                var s = ut.call(n, "constructor") && n.constructor;
                                return "function" == typeof s && s instanceof s && Xs.call(s) == e0
                            }
                            var Cc = Ol ? Zr(Ol) : function n_(e) {
                                    return Mt(e) && Rr(e) == ts
                                },
                                gh = Rl ? Zr(Rl) : function i_(e) {
                                    return Mt(e) && Pr(e) == on
                                };

                            function Do(e) {
                                return "string" == typeof e || !qe(e) && Mt(e) && Rr(e) == rs
                            }

                            function qr(e) {
                                return "symbol" == typeof e || Mt(e) && Rr(e) == Bs
                            }
                            var Zi = Al ? Zr(Al) : function s_(e) {
                                    return Mt(e) && To(e.length) && !!It[Rr(e)]
                                },
                                ub = xo(ic),
                                lb = xo(function(e, n) {
                                    return e <= n
                                });

                            function yh(e) {
                                if (!e) return [];
                                if (Lr(e)) return Do(e) ? an(e) : Nr(e);
                                if (os && e[os]) return function $v(F) {
                                    for (var k, q = []; !(k = F.next()).done;) q.push(k.value);
                                    return q
                                }(e[os]());
                                var n = Pr(e);
                                return (n == sn ? Ka : n == on ? Js : zi)(e)
                            }

                            function Nn(e) {
                                return e ? (e = en(e)) === ri || e === -ri ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function $e(e) {
                                var n = Nn(e),
                                    s = n % 1;
                                return n == n ? s ? n - s : n : 0
                            }

                            function vh(e) {
                                return e ? ai($e(e), 0, pn) : 0
                            }

                            function en(e) {
                                if ("number" == typeof e) return e;
                                if (qr(e)) return NaN;
                                if (Ct(e)) {
                                    var n = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = Ct(n) ? n + "" : n
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = jl(e);
                                var s = Ky.test(e);
                                return s || ky.test(e) ? Pv(e.slice(2), s ? 2 : 8) : By.test(e) ? NaN : +e
                            }

                            function _h(e) {
                                return yn(e, jr(e))
                            }

                            function at(e) {
                                return null == e ? "" : zr(e)
                            }
                            var hb = ji(function(e, n) {
                                    if (vs(n) || Lr(n)) yn(n, gr(n), e);
                                    else
                                        for (var s in n) ut.call(n, s) && fs(e, s, n[s])
                                }),
                                mh = ji(function(e, n) {
                                    yn(n, jr(n), e)
                                }),
                                No = ji(function(e, n, s, l) {
                                    yn(n, jr(n), e, l)
                                }),
                                db = ji(function(e, n, s, l) {
                                    yn(n, gr(n), e, l)
                                }),
                                pb = Cn(Qa),
                                yb = Ve(function(e, n) {
                                    e = yt(e);
                                    var s = -1,
                                        l = n.length,
                                        p = l > 2 ? n[2] : t;
                                    for (p && Ar(n[0], n[1], p) && (l = 1); ++s < l;)
                                        for (var x = n[s], R = jr(x), T = -1, M = R.length; ++T < M;) {
                                            var Y = R[T],
                                                ee = e[Y];
                                            (ee === t || un(ee, Ti[Y]) && !ut.call(e, Y)) && (e[Y] = x[Y])
                                        }
                                    return e
                                }),
                                vb = Ve(function(e) {
                                    return e.push(t, Ff), Mr(bh, t, e)
                                });

                            function Tc(e, n, s) {
                                var l = null == e ? t : ci(e, n);
                                return l === t ? s : l
                            }

                            function Dc(e, n) {
                                return null != e && zf(e, n, J0)
                            }
                            var Ob = Tf(function(e, n, s) {
                                    null != n && "function" != typeof n.toString && (n = eo.call(n)), e[n] = s
                                }, Lc(Fr)),
                                Rb = Tf(function(e, n, s) {
                                    null != n && "function" != typeof n.toString && (n = eo.call(n)), ut.call(e, n) ? e[n].push(s) : e[n] = [s]
                                }, De),
                                Ab = Ve(ds);

                            function gr(e) {
                                return Lr(e) ? Gl(e) : nc(e)
                            }

                            function jr(e) {
                                return Lr(e) ? Gl(e, !0) : function o_(e) {
                                    if (!Ct(e)) return function $_(e) {
                                        var n = [];
                                        if (null != e)
                                            for (var s in yt(e)) n.push(s);
                                        return n
                                    }(e);
                                    var n = vs(e),
                                        s = [];
                                    for (var l in e) "constructor" == l && (n || !ut.call(e, l)) || s.push(l);
                                    return s
                                }(e)
                            }
                            var Db = ji(function(e, n, s) {
                                    go(e, n, s)
                                }),
                                bh = ji(function(e, n, s, l) {
                                    go(e, n, s, l)
                                }),
                                Nb = Cn(function(e, n) {
                                    var s = {};
                                    if (null == e) return s;
                                    var l = !1;
                                    n = Ot(n, function(x) {
                                        return x = kn(x, e), l || (l = x.length > 1), x
                                    }), yn(e, vc(e), s), l && (s = Qr(s, 7, O_));
                                    for (var p = n.length; p--;) uc(s, n[p]);
                                    return s
                                }),
                                jb = Cn(function(e, n) {
                                    return null == e ? {} : function c_(e, n) {
                                        return hf(e, n, function(s, l) {
                                            return Dc(e, l)
                                        })
                                    }(e, n)
                                });

                            function wh(e, n) {
                                if (null == e) return {};
                                var s = Ot(vc(e), function(l) {
                                    return [l]
                                });
                                return n = De(n), hf(e, s, function(l, p) {
                                    return n(l, p[0])
                                })
                            }
                            var xh = Lf(gr),
                                Eh = Lf(jr);

                            function zi(e) {
                                return null == e ? [] : Ba(e, gr(e))
                            }
                            var kb = Fi(function(e, n, s) {
                                return n = n.toLowerCase(), e + (s ? Ih(n) : n)
                            });

                            function Ih(e) {
                                return Nc(at(e).toLowerCase())
                            }

                            function Ph(e) {
                                return (e = at(e)) && e.replace(Wy, Mv).replace(pv, "")
                            }
                            var Qb = Fi(function(e, n, s) {
                                    return e + (s ? "-" : "") + n.toLowerCase()
                                }),
                                Yb = Fi(function(e, n, s) {
                                    return e + (s ? " " : "") + n.toLowerCase()
                                }),
                                Xb = Rf("toLowerCase"),
                                ow = Fi(function(e, n, s) {
                                    return e + (s ? "_" : "") + n.toLowerCase()
                                }),
                                cw = Fi(function(e, n, s) {
                                    return e + (s ? " " : "") + Nc(n)
                                }),
                                _w = Fi(function(e, n, s) {
                                    return e + (s ? " " : "") + n.toUpperCase()
                                }),
                                Nc = Rf("toUpperCase");

                            function Sh(e, n, s) {
                                return e = at(e), (n = s ? t : n) === t ? function Uv(F) {
                                    return vv.test(F)
                                }(e) ? function Wv(F) {
                                    return F.match(gv) || []
                                }(e) : function Dv(F) {
                                    return F.match(qy) || []
                                }(e) : e.match(n) || []
                            }
                            var Oh = Ve(function(e, n) {
                                    try {
                                        return Mr(e, t, n)
                                    } catch (s) {
                                        return Ac(s) ? s : new Ze(s)
                                    }
                                }),
                                mw = Cn(function(e, n) {
                                    return Gr(n, function(s) {
                                        s = vn(s), Rn(e, s, Oc(e[s], e))
                                    }), e
                                });

                            function Lc(e) {
                                return function() {
                                    return e
                                }
                            }
                            var Ew = Cf(),
                                Iw = Cf(!0);

                            function Fr(e) {
                                return e
                            }

                            function jc(e) {
                                return of("function" == typeof e ? e : Qr(e, 1))
                            }
                            var Ow = Ve(function(e, n) {
                                    return function(s) {
                                        return ds(s, e, n)
                                    }
                                }),
                                Rw = Ve(function(e, n) {
                                    return function(s) {
                                        return ds(e, s, n)
                                    }
                                });

                            function Fc(e, n, s) {
                                var l = gr(n),
                                    p = po(n, l);
                                null == s && (!Ct(n) || !p.length && l.length) && (s = n, n = e, e = this, p = po(n, gr(n)));
                                var x = !(Ct(s) && "chain" in s && !s.chain),
                                    R = Dn(e);
                                return Gr(p, function(T) {
                                    var M = n[T];
                                    e[T] = M, R && (e.prototype[T] = function() {
                                        var Y = this.__chain__;
                                        if (x || Y) {
                                            var ee = e(this.__wrapped__);
                                            return (ee.__actions__ = Nr(this.__actions__)).push({
                                                func: M,
                                                args: arguments,
                                                thisArg: e
                                            }), ee.__chain__ = Y, ee
                                        }
                                        return M.apply(e, $n([this.value()], arguments))
                                    })
                                }), e
                            }

                            function Mc() {}
                            var Tw = pc(Ot),
                                Dw = pc(Cl),
                                Nw = pc(za);

                            function Rh(e) {
                                return wc(e) ? qa(vn(e)) : function u_(e) {
                                    return function(n) {
                                        return ci(n, e)
                                    }
                                }(e)
                            }
                            var jw = Df(),
                                Fw = Df(!0);

                            function Zc() {
                                return []
                            }

                            function zc() {
                                return !1
                            }
                            var Hw = bo(function(e, n) {
                                    return e + n
                                }, 0),
                                Bw = gc("ceil"),
                                Kw = bo(function(e, n) {
                                    return e / n
                                }, 1),
                                Vw = gc("floor"),
                                Xw = bo(function(e, n) {
                                    return e * n
                                }, 1),
                                ex = gc("round"),
                                tx = bo(function(e, n) {
                                    return e - n
                                }, 0);
                            return _.after = function P1(e, n) {
                                if ("function" != typeof n) throw new Wr(h);
                                return e = $e(e),
                                    function() {
                                        if (--e < 1) return n.apply(this, arguments)
                                    }
                            }, _.ary = sh, _.assign = hb, _.assignIn = mh, _.assignInWith = No, _.assignWith = db, _.at = pb, _.before = oh, _.bind = Oc, _.bindAll = mw, _.bindKey = ah, _.castArray = function M1() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return qe(e) ? e : [e]
                            }, _.chain = rh, _.chunk = function V_(e, n, s) {
                                n = (s ? Ar(e, n, s) : n === t) ? 1 : fr($e(n), 0);
                                var l = null == e ? 0 : e.length;
                                if (!l || n < 1) return [];
                                for (var p = 0, x = 0, R = q(oo(l / n)); p < l;) R[x++] = Yr(e, p, p += n);
                                return R
                            }, _.compact = function k_(e) {
                                for (var n = -1, s = null == e ? 0 : e.length, l = 0, p = []; ++n < s;) {
                                    var x = e[n];
                                    x && (p[l++] = x)
                                }
                                return p
                            }, _.concat = function G_() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var n = q(e - 1), s = arguments[0], l = e; l--;) n[l - 1] = arguments[l];
                                return $n(qe(s) ? Nr(s) : [s], mr(n, 1))
                            }, _.cond = function bw(e) {
                                var n = null == e ? 0 : e.length,
                                    s = De();
                                return e = n ? Ot(e, function(l) {
                                    if ("function" != typeof l[1]) throw new Wr(h);
                                    return [s(l[0]), l[1]]
                                }) : [], Ve(function(l) {
                                    for (var p = -1; ++p < n;) {
                                        var x = e[p];
                                        if (Mr(x[0], this, l)) return Mr(x[1], this, l)
                                    }
                                })
                            }, _.conforms = function ww(e) {
                                return function V0(e) {
                                    var n = gr(e);
                                    return function(s) {
                                        return Ql(s, e, n)
                                    }
                                }(Qr(e, 1))
                            }, _.constant = Lc, _.countBy = r1, _.create = function gb(e, n) {
                                var s = Li(e);
                                return null == n ? s : Jl(s, n)
                            }, _.curry = function ch(e, n, s) {
                                var l = An(e, 8, t, t, t, t, t, n = s ? t : n);
                                return l.placeholder = ch.placeholder, l
                            }, _.curryRight = function uh(e, n, s) {
                                var l = An(e, 16, t, t, t, t, t, n = s ? t : n);
                                return l.placeholder = uh.placeholder, l
                            }, _.debounce = lh, _.defaults = yb, _.defaultsDeep = vb, _.defer = S1, _.delay = O1, _.difference = W_, _.differenceBy = J_, _.differenceWith = Q_, _.drop = function Y_(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                return l ? Yr(e, (n = s || n === t ? 1 : $e(n)) < 0 ? 0 : n, l) : []
                            }, _.dropRight = function X_(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                return l ? Yr(e, 0, (n = l - (n = s || n === t ? 1 : $e(n))) < 0 ? 0 : n) : []
                            }, _.dropRightWhile = function em(e, n) {
                                return e && e.length ? vo(e, De(n, 3), !0, !0) : []
                            }, _.dropWhile = function tm(e, n) {
                                return e && e.length ? vo(e, De(n, 3), !0) : []
                            }, _.fill = function rm(e, n, s, l) {
                                var p = null == e ? 0 : e.length;
                                return p ? (s && "number" != typeof s && Ar(e, n, s) && (s = 0, l = p), function G0(e, n, s, l) {
                                    var p = e.length;
                                    for ((s = $e(s)) < 0 && (s = -s > p ? 0 : p + s), (l = l === t || l > p ? p : $e(l)) < 0 && (l += p), l = s > l ? 0 : vh(l); s < l;) e[s++] = n;
                                    return e
                                }(e, n, s, l)) : []
                            }, _.filter = function i1(e, n) {
                                return (qe(e) ? Un : ef)(e, De(n, 3))
                            }, _.flatMap = function a1(e, n) {
                                return mr(Oo(e, n), 1)
                            }, _.flatMapDeep = function c1(e, n) {
                                return mr(Oo(e, n), ri)
                            }, _.flatMapDepth = function u1(e, n, s) {
                                return s = s === t ? 1 : $e(s), mr(Oo(e, n), s)
                            }, _.flatten = Yf, _.flattenDeep = function nm(e) {
                                return null != e && e.length ? mr(e, ri) : []
                            }, _.flattenDepth = function im(e, n) {
                                return null != e && e.length ? mr(e, n = n === t ? 1 : $e(n)) : []
                            }, _.flip = function R1(e) {
                                return An(e, 512)
                            }, _.flow = Ew, _.flowRight = Iw, _.fromPairs = function sm(e) {
                                for (var n = -1, s = null == e ? 0 : e.length, l = {}; ++n < s;) {
                                    var p = e[n];
                                    l[p[0]] = p[1]
                                }
                                return l
                            }, _.functions = function Ib(e) {
                                return null == e ? [] : po(e, gr(e))
                            }, _.functionsIn = function Pb(e) {
                                return null == e ? [] : po(e, jr(e))
                            }, _.groupBy = l1, _.initial = function am(e) {
                                return null != e && e.length ? Yr(e, 0, -1) : []
                            }, _.intersection = cm, _.intersectionBy = um, _.intersectionWith = lm, _.invert = Ob, _.invertBy = Rb, _.invokeMap = h1, _.iteratee = jc, _.keyBy = d1, _.keys = gr, _.keysIn = jr, _.map = Oo, _.mapKeys = function Cb(e, n) {
                                var s = {};
                                return n = De(n, 3), gn(e, function(l, p, x) {
                                    Rn(s, n(l, p, x), l)
                                }), s
                            }, _.mapValues = function Tb(e, n) {
                                var s = {};
                                return n = De(n, 3), gn(e, function(l, p, x) {
                                    Rn(s, p, n(l, p, x))
                                }), s
                            }, _.matches = function Pw(e) {
                                return cf(Qr(e, 1))
                            }, _.matchesProperty = function Sw(e, n) {
                                return uf(e, Qr(n, 1))
                            }, _.memoize = Ao, _.merge = Db, _.mergeWith = bh, _.method = Ow, _.methodOf = Rw, _.mixin = Fc, _.negate = Co, _.nthArg = function Cw(e) {
                                return e = $e(e), Ve(function(n) {
                                    return lf(n, e)
                                })
                            }, _.omit = Nb, _.omitBy = function Lb(e, n) {
                                return wh(e, Co(De(n)))
                            }, _.once = function A1(e) {
                                return oh(2, e)
                            }, _.orderBy = function p1(e, n, s, l) {
                                return null == e ? [] : (qe(n) || (n = null == n ? [] : [n]), qe(s = l ? t : s) || (s = null == s ? [] : [s]), ff(e, n, s))
                            }, _.over = Tw, _.overArgs = C1, _.overEvery = Dw, _.overSome = Nw, _.partial = Rc, _.partialRight = fh, _.partition = g1, _.pick = jb, _.pickBy = wh, _.property = Rh, _.propertyOf = function Lw(e) {
                                return function(n) {
                                    return null == e ? t : ci(e, n)
                                }
                            }, _.pull = pm, _.pullAll = eh, _.pullAllBy = function gm(e, n, s) {
                                return e && e.length && n && n.length ? sc(e, n, De(s, 2)) : e
                            }, _.pullAllWith = function ym(e, n, s) {
                                return e && e.length && n && n.length ? sc(e, n, t, s) : e
                            }, _.pullAt = vm, _.range = jw, _.rangeRight = Fw, _.rearg = T1, _.reject = function _1(e, n) {
                                return (qe(e) ? Un : ef)(e, Co(De(n, 3)))
                            }, _.remove = function _m(e, n) {
                                var s = [];
                                if (!e || !e.length) return s;
                                var l = -1,
                                    p = [],
                                    x = e.length;
                                for (n = De(n, 3); ++l < x;) {
                                    var R = e[l];
                                    n(R, l, e) && (s.push(R), p.push(l))
                                }
                                return df(e, p), s
                            }, _.rest = function D1(e, n) {
                                if ("function" != typeof e) throw new Wr(h);
                                return Ve(e, n = n === t ? n : $e(n))
                            }, _.reverse = Pc, _.sampleSize = function b1(e, n, s) {
                                return n = (s ? Ar(e, n, s) : n === t) ? 1 : $e(n), (qe(e) ? $0 : h_)(e, n)
                            }, _.set = function Mb(e, n, s) {
                                return null == e ? e : gs(e, n, s)
                            }, _.setWith = function Zb(e, n, s, l) {
                                return l = "function" == typeof l ? l : t, null == e ? e : gs(e, n, s, l)
                            }, _.shuffle = function w1(e) {
                                return (qe(e) ? H0 : p_)(e)
                            }, _.slice = function mm(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                return l ? (s && "number" != typeof s && Ar(e, n, s) ? (n = 0, s = l) : (n = null == n ? 0 : $e(n), s = s === t ? l : $e(s)), Yr(e, n, s)) : []
                            }, _.sortBy = I1, _.sortedUniq = function Sm(e) {
                                return e && e.length ? gf(e) : []
                            }, _.sortedUniqBy = function Om(e, n) {
                                return e && e.length ? gf(e, De(n, 2)) : []
                            }, _.split = function aw(e, n, s) {
                                return s && "number" != typeof s && Ar(e, n, s) && (n = s = t), (s = s === t ? pn : s >>> 0) ? (e = at(e)) && ("string" == typeof n || null != n && !Cc(n)) && !(n = zr(n)) && Ri(e) ? Gn(an(e), 0, s) : e.split(n, s) : []
                            }, _.spread = function N1(e, n) {
                                if ("function" != typeof e) throw new Wr(h);
                                return n = null == n ? 0 : fr($e(n), 0), Ve(function(s) {
                                    var l = s[n],
                                        p = Gn(s, 0, n);
                                    return l && $n(p, l), Mr(e, this, p)
                                })
                            }, _.tail = function Rm(e) {
                                var n = null == e ? 0 : e.length;
                                return n ? Yr(e, 1, n) : []
                            }, _.take = function Am(e, n, s) {
                                return e && e.length ? Yr(e, 0, (n = s || n === t ? 1 : $e(n)) < 0 ? 0 : n) : []
                            }, _.takeRight = function Cm(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                return l ? Yr(e, (n = l - (n = s || n === t ? 1 : $e(n))) < 0 ? 0 : n, l) : []
                            }, _.takeRightWhile = function Tm(e, n) {
                                return e && e.length ? vo(e, De(n, 3), !1, !0) : []
                            }, _.takeWhile = function Dm(e, n) {
                                return e && e.length ? vo(e, De(n, 3)) : []
                            }, _.tap = function km(e, n) {
                                return n(e), e
                            }, _.throttle = function L1(e, n, s) {
                                var l = !0,
                                    p = !0;
                                if ("function" != typeof e) throw new Wr(h);
                                return Ct(s) && (l = "leading" in s ? !!s.leading : l, p = "trailing" in s ? !!s.trailing : p), lh(e, n, {
                                    leading: l,
                                    maxWait: n,
                                    trailing: p
                                })
                            }, _.thru = So, _.toArray = yh, _.toPairs = xh, _.toPairsIn = Eh, _.toPath = function Uw(e) {
                                return qe(e) ? Ot(e, vn) : qr(e) ? [e] : Nr(Gf(at(e)))
                            }, _.toPlainObject = _h, _.transform = function zb(e, n, s) {
                                var l = qe(e),
                                    p = l || Wn(e) || Zi(e);
                                if (n = De(n, 4), null == s) {
                                    var x = e && e.constructor;
                                    s = p ? l ? new x : [] : Ct(e) && Dn(x) ? Li(no(e)) : {}
                                }
                                return (p ? Gr : gn)(e, function(R, T, M) {
                                    return n(s, R, T, M)
                                }), s
                            }, _.unary = function j1(e) {
                                return sh(e, 1)
                            }, _.union = Nm, _.unionBy = Lm, _.unionWith = jm, _.uniq = function Fm(e) {
                                return e && e.length ? Vn(e) : []
                            }, _.uniqBy = function Mm(e, n) {
                                return e && e.length ? Vn(e, De(n, 2)) : []
                            }, _.uniqWith = function Zm(e, n) {
                                return n = "function" == typeof n ? n : t, e && e.length ? Vn(e, t, n) : []
                            }, _.unset = function qb(e, n) {
                                return null == e || uc(e, n)
                            }, _.unzip = Sc, _.unzipWith = th, _.update = function Ub(e, n, s) {
                                return null == e ? e : vf(e, n, hc(s))
                            }, _.updateWith = function $b(e, n, s, l) {
                                return l = "function" == typeof l ? l : t, null == e ? e : vf(e, n, hc(s), l)
                            }, _.values = zi, _.valuesIn = function Hb(e) {
                                return null == e ? [] : Ba(e, jr(e))
                            }, _.without = zm, _.words = Sh, _.wrap = function F1(e, n) {
                                return Rc(hc(n), e)
                            }, _.xor = qm, _.xorBy = Um, _.xorWith = $m, _.zip = Hm, _.zipObject = function Bm(e, n) {
                                return mf(e || [], n || [], fs)
                            }, _.zipObjectDeep = function Km(e, n) {
                                return mf(e || [], n || [], gs)
                            }, _.zipWith = Vm, _.entries = xh, _.entriesIn = Eh, _.extend = mh, _.extendWith = No, Fc(_, _), _.add = Hw, _.attempt = Oh, _.camelCase = kb, _.capitalize = Ih, _.ceil = Bw, _.clamp = function Bb(e, n, s) {
                                return s === t && (s = n, n = t), s !== t && (s = (s = en(s)) == s ? s : 0), n !== t && (n = (n = en(n)) == n ? n : 0), ai(en(e), n, s)
                            }, _.clone = function Z1(e) {
                                return Qr(e, 4)
                            }, _.cloneDeep = function q1(e) {
                                return Qr(e, 5)
                            }, _.cloneDeepWith = function U1(e, n) {
                                return Qr(e, 5, n = "function" == typeof n ? n : t)
                            }, _.cloneWith = function z1(e, n) {
                                return Qr(e, 4, n = "function" == typeof n ? n : t)
                            }, _.conformsTo = function $1(e, n) {
                                return null == n || Ql(e, n, gr(n))
                            }, _.deburr = Ph, _.defaultTo = function xw(e, n) {
                                return null == e || e != e ? n : e
                            }, _.divide = Kw, _.endsWith = function Gb(e, n, s) {
                                e = at(e), n = zr(n);
                                var l = e.length,
                                    p = s = s === t ? l : ai($e(s), 0, l);
                                return (s -= n.length) >= 0 && e.slice(s, p) == n
                            }, _.eq = un, _.escape = function Wb(e) {
                                return (e = at(e)) && Ay.test(e) ? e.replace(tl, Zv) : e
                            }, _.escapeRegExp = function Jb(e) {
                                return (e = at(e)) && jy.test(e) ? e.replace(Ra, "\\$&") : e
                            }, _.every = function n1(e, n, s) {
                                var l = qe(e) ? Cl : k0;
                                return s && Ar(e, n, s) && (n = t), l(e, De(n, 3))
                            }, _.find = s1, _.findIndex = Jf, _.findKey = function _b(e, n) {
                                return Tl(e, De(n, 3), gn)
                            }, _.findLast = o1, _.findLastIndex = Qf, _.findLastKey = function mb(e, n) {
                                return Tl(e, De(n, 3), Xa)
                            }, _.floor = Vw, _.forEach = nh, _.forEachRight = ih, _.forIn = function bb(e, n) {
                                return null == e ? e : Ya(e, De(n, 3), jr)
                            }, _.forInRight = function wb(e, n) {
                                return null == e ? e : tf(e, De(n, 3), jr)
                            }, _.forOwn = function xb(e, n) {
                                return e && gn(e, De(n, 3))
                            }, _.forOwnRight = function Eb(e, n) {
                                return e && Xa(e, De(n, 3))
                            }, _.get = Tc, _.gt = H1, _.gte = B1, _.has = function Sb(e, n) {
                                return null != e && zf(e, n, W0)
                            }, _.hasIn = Dc, _.head = Xf, _.identity = Fr, _.includes = function f1(e, n, s, l) {
                                e = Lr(e) ? e : zi(e), s = s && !l ? $e(s) : 0;
                                var p = e.length;
                                return s < 0 && (s = fr(p + s, 0)), Do(e) ? s <= p && e.indexOf(n, s) > -1 : !!p && Oi(e, n, s) > -1
                            }, _.indexOf = function om(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                if (!l) return -1;
                                var p = null == s ? 0 : $e(s);
                                return p < 0 && (p = fr(l + p, 0)), Oi(e, n, p)
                            }, _.inRange = function Kb(e, n, s) {
                                return n = Nn(n), s === t ? (s = n, n = 0) : s = Nn(s),
                                    function Q0(e, n, s) {
                                        return e >= Ir(n, s) && e < fr(n, s)
                                    }(e = en(e), n, s)
                            }, _.invoke = Ab, _.isArguments = fi, _.isArray = qe, _.isArrayBuffer = K1, _.isArrayLike = Lr, _.isArrayLikeObject = Gt, _.isBoolean = function V1(e) {
                                return !0 === e || !1 === e || Mt(e) && Rr(e) == Yi
                            }, _.isBuffer = Wn, _.isDate = k1, _.isElement = function G1(e) {
                                return Mt(e) && 1 === e.nodeType && !ms(e)
                            }, _.isEmpty = function W1(e) {
                                if (null == e) return !0;
                                if (Lr(e) && (qe(e) || "string" == typeof e || "function" == typeof e.splice || Wn(e) || Zi(e) || fi(e))) return !e.length;
                                var n = Pr(e);
                                if (n == sn || n == on) return !e.size;
                                if (vs(e)) return !nc(e).length;
                                for (var s in e)
                                    if (ut.call(e, s)) return !1;
                                return !0
                            }, _.isEqual = function J1(e, n) {
                                return ps(e, n)
                            }, _.isEqualWith = function Q1(e, n, s) {
                                var l = (s = "function" == typeof s ? s : t) ? s(e, n) : t;
                                return l === t ? ps(e, n, t, s) : !!l
                            }, _.isError = Ac, _.isFinite = function Y1(e) {
                                return "number" == typeof e && Kl(e)
                            }, _.isFunction = Dn, _.isInteger = hh, _.isLength = To, _.isMap = dh, _.isMatch = function X1(e, n) {
                                return e === n || rc(e, n, mc(n))
                            }, _.isMatchWith = function eb(e, n, s) {
                                return s = "function" == typeof s ? s : t, rc(e, n, mc(n), s)
                            }, _.isNaN = function tb(e) {
                                return ph(e) && e != +e
                            }, _.isNative = function rb(e) {
                                if (z_(e)) throw new Ze("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return sf(e)
                            }, _.isNil = function ib(e) {
                                return null == e
                            }, _.isNull = function nb(e) {
                                return null === e
                            }, _.isNumber = ph, _.isObject = Ct, _.isObjectLike = Mt, _.isPlainObject = ms, _.isRegExp = Cc, _.isSafeInteger = function sb(e) {
                                return hh(e) && e >= -qn && e <= qn
                            }, _.isSet = gh, _.isString = Do, _.isSymbol = qr, _.isTypedArray = Zi, _.isUndefined = function ob(e) {
                                return e === t
                            }, _.isWeakMap = function ab(e) {
                                return Mt(e) && Pr(e) == ns
                            }, _.isWeakSet = function cb(e) {
                                return Mt(e) && "[object WeakSet]" == Rr(e)
                            }, _.join = function fm(e, n) {
                                return null == e ? "" : a0.call(e, n)
                            }, _.kebabCase = Qb, _.last = Xr, _.lastIndexOf = function hm(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                if (!l) return -1;
                                var p = l;
                                return s !== t && (p = (p = $e(s)) < 0 ? fr(l + p, 0) : Ir(p, l - 1)), n == n ? function Kv(F, k, q) {
                                    for (var Ie = q + 1; Ie--;)
                                        if (F[Ie] === k) return Ie;
                                    return Ie
                                }(e, n, p) : Ws(e, Dl, p, !0)
                            }, _.lowerCase = Yb, _.lowerFirst = Xb, _.lt = ub, _.lte = lb, _.max = function kw(e) {
                                return e && e.length ? ho(e, Fr, ec) : t
                            }, _.maxBy = function Gw(e, n) {
                                return e && e.length ? ho(e, De(n, 2), ec) : t
                            }, _.mean = function Ww(e) {
                                return Nl(e, Fr)
                            }, _.meanBy = function Jw(e, n) {
                                return Nl(e, De(n, 2))
                            }, _.min = function Qw(e) {
                                return e && e.length ? ho(e, Fr, ic) : t
                            }, _.minBy = function Yw(e, n) {
                                return e && e.length ? ho(e, De(n, 2), ic) : t
                            }, _.stubArray = Zc, _.stubFalse = zc, _.stubObject = function Mw() {
                                return {}
                            }, _.stubString = function Zw() {
                                return ""
                            }, _.stubTrue = function zw() {
                                return !0
                            }, _.multiply = Xw, _.nth = function dm(e, n) {
                                return e && e.length ? lf(e, $e(n)) : t
                            }, _.noConflict = function Aw() {
                                return _r._ === this && (_r._ = t0), this
                            }, _.noop = Mc, _.now = Ro, _.pad = function ew(e, n, s) {
                                e = at(e);
                                var l = (n = $e(n)) ? Ai(e) : 0;
                                if (!n || l >= n) return e;
                                var p = (n - l) / 2;
                                return wo(ao(p), s) + e + wo(oo(p), s)
                            }, _.padEnd = function tw(e, n, s) {
                                e = at(e);
                                var l = (n = $e(n)) ? Ai(e) : 0;
                                return n && l < n ? e + wo(n - l, s) : e
                            }, _.padStart = function rw(e, n, s) {
                                e = at(e);
                                var l = (n = $e(n)) ? Ai(e) : 0;
                                return n && l < n ? wo(n - l, s) + e : e
                            }, _.parseInt = function nw(e, n, s) {
                                return s || null == n ? n = 0 : n && (n = +n), l0(at(e).replace(Aa, ""), n || 0)
                            }, _.random = function Vb(e, n, s) {
                                if (s && "boolean" != typeof s && Ar(e, n, s) && (n = s = t), s === t && ("boolean" == typeof n ? (s = n, n = t) : "boolean" == typeof e && (s = e, e = t)), e === t && n === t ? (e = 0, n = 1) : (e = Nn(e), n === t ? (n = e, e = 0) : n = Nn(n)), e > n) {
                                    var l = e;
                                    e = n, n = l
                                }
                                if (s || e % 1 || n % 1) {
                                    var p = Vl();
                                    return Ir(e + p * (n - e + Iv("1e-" + ((p + "").length - 1))), n)
                                }
                                return oc(e, n)
                            }, _.reduce = function y1(e, n, s) {
                                var l = qe(e) ? Za : Ll,
                                    p = arguments.length < 3;
                                return l(e, De(n, 4), s, p, Kn)
                            }, _.reduceRight = function v1(e, n, s) {
                                var l = qe(e) ? Av : Ll,
                                    p = arguments.length < 3;
                                return l(e, De(n, 4), s, p, Xl)
                            }, _.repeat = function iw(e, n, s) {
                                return n = (s ? Ar(e, n, s) : n === t) ? 1 : $e(n), ac(at(e), n)
                            }, _.replace = function sw() {
                                var e = arguments,
                                    n = at(e[0]);
                                return e.length < 3 ? n : n.replace(e[1], e[2])
                            }, _.result = function Fb(e, n, s) {
                                var l = -1,
                                    p = (n = kn(n, e)).length;
                                for (p || (p = 1, e = t); ++l < p;) {
                                    var x = null == e ? t : e[vn(n[l])];
                                    x === t && (l = p, x = s), e = Dn(x) ? x.call(e) : x
                                }
                                return e
                            }, _.round = ex, _.runInContext = F, _.sample = function m1(e) {
                                return (qe(e) ? Wl : f_)(e)
                            }, _.size = function x1(e) {
                                if (null == e) return 0;
                                if (Lr(e)) return Do(e) ? Ai(e) : e.length;
                                var n = Pr(e);
                                return n == sn || n == on ? e.size : nc(e).length
                            }, _.snakeCase = ow, _.some = function E1(e, n, s) {
                                var l = qe(e) ? za : g_;
                                return s && Ar(e, n, s) && (n = t), l(e, De(n, 3))
                            }, _.sortedIndex = function bm(e, n) {
                                return yo(e, n)
                            }, _.sortedIndexBy = function wm(e, n, s) {
                                return cc(e, n, De(s, 2))
                            }, _.sortedIndexOf = function xm(e, n) {
                                var s = null == e ? 0 : e.length;
                                if (s) {
                                    var l = yo(e, n);
                                    if (l < s && un(e[l], n)) return l
                                }
                                return -1
                            }, _.sortedLastIndex = function Em(e, n) {
                                return yo(e, n, !0)
                            }, _.sortedLastIndexBy = function Im(e, n, s) {
                                return cc(e, n, De(s, 2), !0)
                            }, _.sortedLastIndexOf = function Pm(e, n) {
                                if (null != e && e.length) {
                                    var l = yo(e, n, !0) - 1;
                                    if (un(e[l], n)) return l
                                }
                                return -1
                            }, _.startCase = cw, _.startsWith = function uw(e, n, s) {
                                return e = at(e), s = null == s ? 0 : ai($e(s), 0, e.length), n = zr(n), e.slice(s, s + n.length) == n
                            }, _.subtract = tx, _.sum = function rx(e) {
                                return e && e.length ? $a(e, Fr) : 0
                            }, _.sumBy = function nx(e, n) {
                                return e && e.length ? $a(e, De(n, 2)) : 0
                            }, _.template = function lw(e, n, s) {
                                var l = _.templateSettings;
                                s && Ar(e, n, s) && (n = t), e = at(e), n = No({}, n, l, jf);
                                var T, M, p = No({}, n.imports, l.imports, jf),
                                    x = gr(p),
                                    R = Ba(p, x),
                                    Y = 0,
                                    ee = n.interpolate || Ks,
                                    oe = "__p += '",
                                    me = Va((n.escape || Ks).source + "|" + ee.source + "|" + (ee === rl ? Hy : Ks).source + "|" + (n.evaluate || Ks).source + "|$", "g"),
                                    Se = "//# sourceURL=" + (ut.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++mv + "]") + "\n";
                                e.replace(me, function(je, Ge, Ye, Ur, Cr, $r) {
                                    return Ye || (Ye = Ur), oe += e.slice(Y, $r).replace(Jy, zv), Ge && (T = !0, oe += "' +\n__e(" + Ge + ") +\n'"), Cr && (M = !0, oe += "';\n" + Cr + ";\n__p += '"), Ye && (oe += "' +\n((__t = (" + Ye + ")) == null ? '' : __t) +\n'"), Y = $r + je.length, je
                                }), oe += "';\n";
                                var Le = ut.call(n, "variable") && n.variable;
                                if (Le) {
                                    if (Uy.test(Le)) throw new Ze("Invalid `variable` option passed into `_.template`")
                                } else oe = "with (obj) {\n" + oe + "\n}\n";
                                oe = (M ? oe.replace(Py, "") : oe).replace(Sy, "$1").replace(Oy, "$1;"), oe = "function(" + (Le || "obj") + ") {\n" + (Le ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (M ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + oe + "return __p\n}";
                                var Ke = Oh(function() {
                                    return st(x, Se + "return " + oe).apply(t, R)
                                });
                                if (Ke.source = oe, Ac(Ke)) throw Ke;
                                return Ke
                            }, _.times = function qw(e, n) {
                                if ((e = $e(e)) < 1 || e > qn) return [];
                                var s = pn,
                                    l = Ir(e, pn);
                                n = De(n), e -= pn;
                                for (var p = Ha(l, n); ++s < e;) n(s);
                                return p
                            }, _.toFinite = Nn, _.toInteger = $e, _.toLength = vh, _.toLower = function fw(e) {
                                return at(e).toLowerCase()
                            }, _.toNumber = en, _.toSafeInteger = function fb(e) {
                                return e ? ai($e(e), -qn, qn) : 0 === e ? e : 0
                            }, _.toString = at, _.toUpper = function hw(e) {
                                return at(e).toUpperCase()
                            }, _.trim = function dw(e, n, s) {
                                if ((e = at(e)) && (s || n === t)) return jl(e);
                                if (!e || !(n = zr(n))) return e;
                                var l = an(e),
                                    p = an(n);
                                return Gn(l, Fl(l, p), Ml(l, p) + 1).join("")
                            }, _.trimEnd = function pw(e, n, s) {
                                if ((e = at(e)) && (s || n === t)) return e.slice(0, zl(e) + 1);
                                if (!e || !(n = zr(n))) return e;
                                var l = an(e);
                                return Gn(l, 0, Ml(l, an(n)) + 1).join("")
                            }, _.trimStart = function gw(e, n, s) {
                                if ((e = at(e)) && (s || n === t)) return e.replace(Aa, "");
                                if (!e || !(n = zr(n))) return e;
                                var l = an(e);
                                return Gn(l, Fl(l, an(n))).join("")
                            }, _.truncate = function yw(e, n) {
                                var s = 30,
                                    l = "...";
                                if (Ct(n)) {
                                    var p = "separator" in n ? n.separator : p;
                                    s = "length" in n ? $e(n.length) : s, l = "omission" in n ? zr(n.omission) : l
                                }
                                var x = (e = at(e)).length;
                                if (Ri(e)) {
                                    var R = an(e);
                                    x = R.length
                                }
                                if (s >= x) return e;
                                var T = s - Ai(l);
                                if (T < 1) return l;
                                var M = R ? Gn(R, 0, T).join("") : e.slice(0, T);
                                if (p === t) return M + l;
                                if (R && (T += M.length - T), Cc(p)) {
                                    if (e.slice(T).search(p)) {
                                        var Y, ee = M;
                                        for (p.global || (p = Va(p.source, at(nl.exec(p)) + "g")), p.lastIndex = 0; Y = p.exec(ee);) var oe = Y.index;
                                        M = M.slice(0, oe === t ? T : oe)
                                    }
                                } else if (e.indexOf(zr(p), T) != T) {
                                    var me = M.lastIndexOf(p);
                                    me > -1 && (M = M.slice(0, me))
                                }
                                return M + l
                            }, _.unescape = function vw(e) {
                                return (e = at(e)) && Ry.test(e) ? e.replace(el, Vv) : e
                            }, _.uniqueId = function $w(e) {
                                var n = ++Xv;
                                return at(e) + n
                            }, _.upperCase = _w, _.upperFirst = Nc, _.each = nh, _.eachRight = ih, _.first = Xf, Fc(_, function() {
                                var e = {};
                                return gn(_, function(n, s) {
                                    ut.call(_.prototype, s) || (e[s] = n)
                                }), e
                            }(), {
                                chain: !1
                            }), _.VERSION = "4.17.21", Gr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                _[e].placeholder = _
                            }), Gr(["drop", "take"], function(e, n) {
                                Qe.prototype[e] = function(s) {
                                    s = s === t ? 1 : fr($e(s), 0);
                                    var l = this.__filtered__ && !n ? new Qe(this) : this.clone();
                                    return l.__filtered__ ? l.__takeCount__ = Ir(s, l.__takeCount__) : l.__views__.push({
                                        size: Ir(s, pn),
                                        type: e + (l.__dir__ < 0 ? "Right" : "")
                                    }), l
                                }, Qe.prototype[e + "Right"] = function(s) {
                                    return this.reverse()[e](s).reverse()
                                }
                            }), Gr(["filter", "map", "takeWhile"], function(e, n) {
                                var s = n + 1,
                                    l = 1 == s || 3 == s;
                                Qe.prototype[e] = function(p) {
                                    var x = this.clone();
                                    return x.__iteratees__.push({
                                        iteratee: De(p, 3),
                                        type: s
                                    }), x.__filtered__ = x.__filtered__ || l, x
                                }
                            }), Gr(["head", "last"], function(e, n) {
                                var s = "take" + (n ? "Right" : "");
                                Qe.prototype[e] = function() {
                                    return this[s](1).value()[0]
                                }
                            }), Gr(["initial", "tail"], function(e, n) {
                                var s = "drop" + (n ? "" : "Right");
                                Qe.prototype[e] = function() {
                                    return this.__filtered__ ? new Qe(this) : this[s](1)
                                }
                            }), Qe.prototype.compact = function() {
                                return this.filter(Fr)
                            }, Qe.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, Qe.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, Qe.prototype.invokeMap = Ve(function(e, n) {
                                return "function" == typeof e ? new Qe(this) : this.map(function(s) {
                                    return ds(s, e, n)
                                })
                            }), Qe.prototype.reject = function(e) {
                                return this.filter(Co(De(e)))
                            }, Qe.prototype.slice = function(e, n) {
                                e = $e(e);
                                var s = this;
                                return s.__filtered__ && (e > 0 || n < 0) ? new Qe(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)), n !== t && (s = (n = $e(n)) < 0 ? s.dropRight(-n) : s.take(n - e)), s)
                            }, Qe.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, Qe.prototype.toArray = function() {
                                return this.take(pn)
                            }, gn(Qe.prototype, function(e, n) {
                                var s = /^(?:filter|find|map|reject)|While$/.test(n),
                                    l = /^(?:head|last)$/.test(n),
                                    p = _[l ? "take" + ("last" == n ? "Right" : "") : n],
                                    x = l || /^find/.test(n);
                                p && (_.prototype[n] = function() {
                                    var R = this.__wrapped__,
                                        T = l ? [1] : arguments,
                                        M = R instanceof Qe,
                                        Y = T[0],
                                        ee = M || qe(R),
                                        oe = function(Ge) {
                                            var Ye = p.apply(_, $n([Ge], T));
                                            return l && me ? Ye[0] : Ye
                                        };
                                    ee && s && "function" == typeof Y && 1 != Y.length && (M = ee = !1);
                                    var me = this.__chain__,
                                        Le = x && !me,
                                        Ke = M && !this.__actions__.length;
                                    if (!x && ee) {
                                        R = Ke ? R : new Qe(this);
                                        var je = e.apply(R, T);
                                        return je.__actions__.push({
                                            func: So,
                                            args: [oe],
                                            thisArg: t
                                        }), new Jr(je, me)
                                    }
                                    return Le && Ke ? e.apply(this, T) : (je = this.thru(oe), Le ? l ? je.value()[0] : je.value() : je)
                                })
                            }), Gr(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var n = Qs[e],
                                    s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    l = /^(?:pop|shift)$/.test(e);
                                _.prototype[e] = function() {
                                    var p = arguments;
                                    if (l && !this.__chain__) {
                                        var x = this.value();
                                        return n.apply(qe(x) ? x : [], p)
                                    }
                                    return this[s](function(R) {
                                        return n.apply(qe(R) ? R : [], p)
                                    })
                                }
                            }), gn(Qe.prototype, function(e, n) {
                                var s = _[n];
                                if (s) {
                                    var l = s.name + "";
                                    ut.call(Ni, l) || (Ni[l] = []), Ni[l].push({
                                        name: n,
                                        func: s
                                    })
                                }
                            }), Ni[mo(t, 2).name] = [{
                                name: "wrapper",
                                func: t
                            }], Qe.prototype.clone = function v0() {
                                var e = new Qe(this.__wrapped__);
                                return e.__actions__ = Nr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Nr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Nr(this.__views__), e
                            }, Qe.prototype.reverse = function _0() {
                                if (this.__filtered__) {
                                    var e = new Qe(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else(e = this.clone()).__dir__ *= -1;
                                return e
                            }, Qe.prototype.value = function m0() {
                                var e = this.__wrapped__.value(),
                                    n = this.__dir__,
                                    s = qe(e),
                                    l = n < 0,
                                    p = s ? e.length : 0,
                                    x = function T_(e, n, s) {
                                        for (var l = -1, p = s.length; ++l < p;) {
                                            var x = s[l],
                                                R = x.size;
                                            switch (x.type) {
                                                case "drop":
                                                    e += R;
                                                    break;
                                                case "dropRight":
                                                    n -= R;
                                                    break;
                                                case "take":
                                                    n = Ir(n, e + R);
                                                    break;
                                                case "takeRight":
                                                    e = fr(e, n - R)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: n
                                        }
                                    }(0, p, this.__views__),
                                    R = x.start,
                                    T = x.end,
                                    M = T - R,
                                    Y = l ? T : R - 1,
                                    ee = this.__iteratees__,
                                    oe = ee.length,
                                    me = 0,
                                    Se = Ir(M, this.__takeCount__);
                                if (!s || !l && p == M && Se == M) return _f(e, this.__actions__);
                                var Le = [];
                                e: for (; M-- && me < Se;) {
                                    for (var Ke = -1, je = e[Y += n]; ++Ke < oe;) {
                                        var Ge = ee[Ke],
                                            Ur = Ge.type,
                                            Cr = (0, Ge.iteratee)(je);
                                        if (2 == Ur) je = Cr;
                                        else if (!Cr) {
                                            if (1 == Ur) continue e;
                                            break e
                                        }
                                    }
                                    Le[me++] = je
                                }
                                return Le
                            }, _.prototype.at = Gm, _.prototype.chain = function Wm() {
                                return rh(this)
                            }, _.prototype.commit = function Jm() {
                                return new Jr(this.value(), this.__chain__)
                            }, _.prototype.next = function Qm() {
                                this.__values__ === t && (this.__values__ = yh(this.value()));
                                var e = this.__index__ >= this.__values__.length;
                                return {
                                    done: e,
                                    value: e ? t : this.__values__[this.__index__++]
                                }
                            }, _.prototype.plant = function Xm(e) {
                                for (var n, s = this; s instanceof lo;) {
                                    var l = Wf(s);
                                    l.__index__ = 0, l.__values__ = t, n ? p.__wrapped__ = l : n = l;
                                    var p = l;
                                    s = s.__wrapped__
                                }
                                return p.__wrapped__ = e, n
                            }, _.prototype.reverse = function e1() {
                                var e = this.__wrapped__;
                                if (e instanceof Qe) {
                                    var n = e;
                                    return this.__actions__.length && (n = new Qe(this)), (n = n.reverse()).__actions__.push({
                                        func: So,
                                        args: [Pc],
                                        thisArg: t
                                    }), new Jr(n, this.__chain__)
                                }
                                return this.thru(Pc)
                            }, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = function t1() {
                                return _f(this.__wrapped__, this.__actions__)
                            }, _.prototype.first = _.prototype.head, os && (_.prototype[os] = function Ym() {
                                return this
                            }), _
                        }();
                    ni ? ((ni.exports = Ci)._ = Ci, ja._ = Ci) : _r._ = Ci
                }.call(Ji);
            var Rg = Object.defineProperty,
                Ag = Object.defineProperties,
                Cg = Object.getOwnPropertyDescriptors,
                zu = Object.getOwnPropertySymbols,
                Tg = Object.prototype.hasOwnProperty,
                Dg = Object.prototype.propertyIsEnumerable,
                qu = (f, r, t) => r in f ? Rg(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                Ls = (f, r) => {
                    for (var t in r || (r = {})) Tg.call(r, t) && qu(f, t, r[t]);
                    if (zu)
                        for (var t of zu(r)) Dg.call(r, t) && qu(f, t, r[t]);
                    return f
                },
                Ng = (f, r) => Ag(f, Cg(r));

            function Zn(f, r, t) {
                var o;
                const a = (0, m.DQ)(f);
                return (null == (o = r.rpcMap) ? void 0 : o[a.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${a.namespace}:${a.reference}&projectId=${t}`
            }

            function ti(f) {
                return f.includes(":") ? f.split(":")[1] : f
            }

            function Uu(f) {
                return f.map(r => `${r.split(":")[0]}:${r.split(":")[1]}`)
            }

            function $u(f) {
                var r, t, o, a;
                const u = {};
                if (!(0, m.L5)(f)) return u;
                for (const [h, b] of Object.entries(f)) {
                    const C = (0, m.gp)(h) ? [h] : b.chains,
                        O = b.methods || [],
                        N = b.events || [],
                        H = b.rpcMap || {},
                        Q = (0, m.M)(h);
                    u[Q] = Ng(Ls(Ls({}, u[Q]), b), {
                        chains: (0, m.eG)(C, null == (r = u[Q]) ? void 0 : r.chains),
                        methods: (0, m.eG)(O, null == (t = u[Q]) ? void 0 : t.methods),
                        events: (0, m.eG)(N, null == (o = u[Q]) ? void 0 : o.events),
                        rpcMap: Ls(Ls({}, H), null == (a = u[Q]) ? void 0 : a.rpcMap)
                    })
                }
                return u
            }

            function Fg(f) {
                return f.includes(":") ? f.split(":")[2] : f
            }

            function Mg(f) {
                const r = {};
                for (const [t, o] of Object.entries(f)) {
                    const a = o.methods || [],
                        u = o.events || [],
                        h = o.accounts || [],
                        b = (0, m.gp)(t) ? [t] : o.chains ? o.chains : Uu(o.accounts);
                    r[t] = {
                        chains: b,
                        methods: a,
                        events: u,
                        accounts: h
                    }
                }
                return r
            }

            function pa(f) {
                return "number" == typeof f ? f : f.includes("0x") ? parseInt(f, 16) : f.includes(":") ? Number(f.split(":")[1]) : Number(f)
            }
            const Hu = {},
                St = f => Hu[f],
                ga = (f, r) => {
                    Hu[f] = r
                };
            class Zg {
                constructor(r) {
                    this.name = "polkadot", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r && r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class zg {
                constructor(r) {
                    this.name = "eip155", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                request(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        switch (r.request.method) {
                            case "eth_requestAccounts":
                            case "eth_accounts":
                                return t.getAccounts();
                            case "wallet_switchEthereumChain":
                                return yield t.handleSwitchChain(r);
                            case "eth_chainId":
                                return parseInt(t.getDefaultChain())
                        }
                        return t.namespace.methods.includes(r.request.method) ? yield t.client.request(r): t.getHttpProvider().request(r.request)
                    })()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(parseInt(r), t), this.chainId = parseInt(r), this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new Fu(o, St("disableProviderPing")))
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = parseInt(ti(t));
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                getHttpProvider() {
                    const r = this.chainId,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                handleSwitchChain(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        var o, a;
                        let u = r.request.params ? null == (o = r.request.params[0]) ? void 0 : o.chainId : "0x0";
                        u = u.startsWith("0x") ? u : `0x${u}`;
                        const h = parseInt(u, 16);
                        if (t.isChainApproved(h)) t.setDefaultChain(`${h}`);
                        else {
                            if (!t.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${h}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                            yield t.client.request({
                                topic: r.topic,
                                request: {
                                    method: r.request.method,
                                    params: [{
                                        chainId: u
                                    }]
                                },
                                chainId: null == (a = t.namespace.chains) ? void 0 : a[0]
                            }), t.setDefaultChain(`${h}`)
                        }
                        return null
                    })()
                }
                isChainApproved(r) {
                    return this.namespace.chains.includes(`${this.name}:${r}`)
                }
            }
            class qg {
                constructor(r) {
                    this.name = "solana", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class Ug {
                constructor(r) {
                    this.name = "cosmos", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class $g {
                constructor(r) {
                    this.name = "cip34", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        const o = this.getCardanoRPCUrl(t),
                            a = ti(t);
                        r[a] = this.createHttpProvider(a, o)
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                getCardanoRPCUrl(r) {
                    const t = this.namespace.rpcMap;
                    if (t) return t[r]
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || this.getCardanoRPCUrl(r);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class Hg {
                constructor(r) {
                    this.name = "elrond", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class Bg {
                constructor(r) {
                    this.name = "multiversx", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class Kg {
                constructor(r) {
                    this.name = "near", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    if (this.chainId = r, !this.httpProviders[r]) {
                        const o = t || Zn(`${this.name}:${r}`, this.namespace);
                        if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                        this.setHttpProvider(r, o)
                    }
                    this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r && r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        r[t] = this.createHttpProvider(t, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace);
                    return typeof o > "u" ? void 0 : new ur(new ei(o, St("disableProviderPing")))
                }
            }
            var Vg = Object.defineProperty,
                kg = Object.defineProperties,
                Gg = Object.getOwnPropertyDescriptors,
                Bu = Object.getOwnPropertySymbols,
                Wg = Object.prototype.hasOwnProperty,
                Jg = Object.prototype.propertyIsEnumerable,
                Ku = (f, r, t) => r in f ? Vg(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                js = (f, r) => {
                    for (var t in r || (r = {})) Wg.call(r, t) && Ku(f, t, r[t]);
                    if (Bu)
                        for (var t of Bu(r)) Jg.call(r, t) && Ku(f, t, r[t]);
                    return f
                },
                ya = (f, r) => kg(f, Gg(r));
            class va {
                constructor(r) {
                    this.events = new(be()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = r, this.logger = typeof r ? .logger < "u" && "string" != typeof r ? .logger ? r.logger : (0, Te.pino)((0, Te.getDefaultLoggerOptions)({
                        level: r ? .logger || "error"
                    })), this.disableProviderPing = r ? .disableProviderPing || !1
                }
                static init(r) {
                    return (0, v.Z)(function*() {
                        const t = new va(r);
                        return yield t.initialize(), t
                    })()
                }
                request(r, t) {
                    var o = this;
                    return (0, v.Z)(function*() {
                        const [a, u] = o.validateChain(t);
                        if (!o.session) throw new Error("Please call connect() before request()");
                        return yield o.getProvider(a).request({
                            request: js({}, r),
                            chainId: `${a}:${u}`,
                            topic: o.session.topic
                        })
                    })()
                }
                sendAsync(r, t, o) {
                    const a = (new Date).getTime();
                    this.request(r, o).then(u => t(null, Xn(a, u))).catch(u => t(u, void 0))
                }
                enable() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        if (!r.client) throw new Error("Sign Client not initialized");
                        return r.session || (yield r.connect({
                            namespaces: r.namespaces,
                            optionalNamespaces: r.optionalNamespaces,
                            sessionProperties: r.sessionProperties
                        })), yield r.requestAccounts()
                    })()
                }
                disconnect() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        var t;
                        if (!r.session) throw new Error("Please call connect() before enable()");
                        yield r.client.disconnect({
                            topic: null == (t = r.session) ? void 0 : t.topic,
                            reason: (0, m.D6)("USER_DISCONNECTED")
                        }), yield r.cleanup()
                    })()
                }
                connect(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (!t.client) throw new Error("Sign Client not initialized");
                        if (t.setNamespaces(r), yield t.cleanupPendingPairings(), !r.skipPairing) return yield t.pair(r.pairingTopic)
                    })()
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                get isWalletConnect() {
                    return !0
                }
                pair(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        t.shouldAbortPairingAttempt = !1;
                        let o = 0;
                        do {
                            if (t.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                            if (o >= t.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                            const {
                                uri: a,
                                approval: u
                            } = yield t.client.connect({
                                pairingTopic: r,
                                requiredNamespaces: t.namespaces,
                                optionalNamespaces: t.optionalNamespaces,
                                sessionProperties: t.sessionProperties
                            });
                            a && (t.uri = a, t.events.emit("display_uri", a)), yield u().then(h => {
                                t.session = h, t.namespaces || (t.namespaces = Mg(h.namespaces), t.persist("namespaces", t.namespaces))
                            }).catch(h => {
                                if (h.message !== Cu) throw h;
                                o++
                            })
                        } while (!t.session);
                        return t.onConnect(), t.session
                    })()
                }
                setDefaultChain(r, t) {
                    try {
                        if (!this.session) return;
                        const [o, a] = this.validateChain(r);
                        this.getProvider(o).setDefaultChain(a, t)
                    } catch (o) {
                        if (!/Please call connect/.test(o.message)) throw o
                    }
                }
                cleanupPendingPairings(r = {}) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        t.logger.info("Cleaning up inactive pairings...");
                        const o = t.client.pairing.getAll();
                        if ((0, m.qt)(o)) {
                            for (const a of o) r.deletePairings ? t.client.core.expirer.set(a.topic, 0) : yield t.client.core.relayer.subscriber.unsubscribe(a.topic);
                            t.logger.info(`Inactive pairings cleared: ${o.length}`)
                        }
                    })()
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                checkStorage() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.namespaces = yield r.getFromStore("namespaces"), r.optionalNamespaces = (yield r.getFromStore("optionalNamespaces")) || {}, r.client.session.length && (r.session = r.client.session.get(r.client.session.keys[r.client.session.keys.length - 1]), r.createProviders())
                    })()
                }
                initialize() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.logger.trace("Initialized"), yield r.createClient(), yield r.checkStorage(), r.registerEventListeners()
                    })()
                }
                createClient() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.client = r.providerOpts.client || (yield ha.init({
                            logger: r.providerOpts.logger || "error",
                            relayUrl: r.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                            projectId: r.providerOpts.projectId,
                            metadata: r.providerOpts.metadata,
                            storageOptions: r.providerOpts.storageOptions,
                            storage: r.providerOpts.storage,
                            name: r.providerOpts.name
                        })), r.logger.trace("SignClient Initialized")
                    })()
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                    const r = [...new Set(Object.keys(this.session.namespaces).map(t => (0, m.M)(t)))];
                    ga("client", this.client), ga("events", this.events), ga("disableProviderPing", this.disableProviderPing), r.forEach(t => {
                        if (!this.session) return;
                        const o = function Lg(f, r) {
                                const t = Object.keys(r.namespaces).filter(a => a.includes(f));
                                if (!t.length) return [];
                                const o = [];
                                return t.forEach(a => {
                                    o.push(...r.namespaces[a].accounts)
                                }), o
                            }(t, this.session),
                            a = Uu(o),
                            u = function jg(f = {}, r = {}) {
                                const t = $u(f),
                                    o = $u(r);
                                return da.exports.merge(t, o)
                            }(this.namespaces, this.optionalNamespaces),
                            h = ya(js({}, u[t]), {
                                accounts: o,
                                chains: a
                            });
                        switch (t) {
                            case "eip155":
                                this.rpcProviders[t] = new zg({
                                    namespace: h
                                });
                                break;
                            case "solana":
                                this.rpcProviders[t] = new qg({
                                    namespace: h
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[t] = new Ug({
                                    namespace: h
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[t] = new Zg({
                                    namespace: h
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[t] = new $g({
                                    namespace: h
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[t] = new Hg({
                                    namespace: h
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[t] = new Bg({
                                    namespace: h
                                });
                                break;
                            case "near":
                                this.rpcProviders[t] = new Kg({
                                    namespace: h
                                })
                        }
                    })
                }
                registerEventListeners() {
                    var r = this;
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", t => {
                        this.events.emit("session_ping", t)
                    }), this.client.on("session_event", t => {
                        const {
                            params: o
                        } = t, {
                            event: a
                        } = o;
                        if ("accountsChanged" === a.name) {
                            const u = a.data;
                            u && (0, m.qt)(u) && this.events.emit("accountsChanged", u.map(Fg))
                        } else if ("chainChanged" === a.name) {
                            const u = o.chainId,
                                h = o.event.data,
                                b = (0, m.M)(u),
                                C = pa(u) !== pa(h) ? `${b}:${pa(h)}` : u;
                            this.onChainChanged(C)
                        } else this.events.emit(a.name, a.data);
                        this.events.emit("session_event", t)
                    }), this.client.on("session_update", ({
                        topic: t,
                        params: o
                    }) => {
                        var a;
                        const {
                            namespaces: u
                        } = o, h = null == (a = this.client) ? void 0 : a.session.get(t);
                        this.session = ya(js({}, h), {
                            namespaces: u
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: t,
                            params: o
                        })
                    }), this.client.on("session_delete", function() {
                        var t = (0, v.Z)(function*(o) {
                            yield r.cleanup(), r.events.emit("session_delete", o), r.events.emit("disconnect", ya(js({}, (0, m.D6)("USER_DISCONNECTED")), {
                                data: o.topic
                            }))
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }()), this.on("default_chain_changed", t => {
                        this.onChainChanged(t, !0)
                    })
                }
                getProvider(r) {
                    if (!this.rpcProviders[r]) throw new Error(`Provider not found: ${r}`);
                    return this.rpcProviders[r]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(r => {
                        var t;
                        this.getProvider(r).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[r])
                    })
                }
                setNamespaces(r) {
                    const {
                        namespaces: t,
                        optionalNamespaces: o,
                        sessionProperties: a
                    } = r;
                    t && Object.keys(t).length && (this.namespaces = t), o && Object.keys(o).length && (this.optionalNamespaces = o), this.sessionProperties = a, this.persist("namespaces", t), this.persist("optionalNamespaces", o)
                }
                validateChain(r) {
                    const [t, o] = r ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, o];
                    if (t && !Object.keys(this.namespaces || {}).map(h => (0, m.M)(h)).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && o) return [t, o];
                    const a = (0, m.M)(Object.keys(this.namespaces)[0]);
                    return [a, this.rpcProviders[a].getDefaultChain()]
                }
                requestAccounts() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        const [t] = r.validateChain();
                        return yield r.getProvider(t).requestAccounts()
                    })()
                }
                onChainChanged(r, t = !1) {
                    var o;
                    if (!this.namespaces) return;
                    const [a, u] = this.validateChain(r);
                    t || this.getProvider(a).setDefaultChain(u), (null != (o = this.namespaces[a]) ? o : this.namespaces[`${a}:${u}`]).defaultChain = u, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", u)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                cleanup() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.session = void 0, r.namespaces = void 0, r.optionalNamespaces = void 0, r.sessionProperties = void 0, r.persist("namespaces", void 0), r.persist("optionalNamespaces", void 0), r.persist("sessionProperties", void 0), yield r.cleanupPendingPairings({
                            deletePairings: !0
                        })
                    })()
                }
                persist(r, t) {
                    this.client.core.storage.setItem(`${Zu}/${r}`, t)
                }
                getFromStore(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        return yield t.client.core.storage.getItem(`${Zu}/${r}`)
                    })()
                }
            }
            const Qg = va,
                Fs = ["eth_sendTransaction", "personal_sign"],
                Vu = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                Ms = ["chainChanged", "accountsChanged"],
                ku = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var ry = Object.defineProperty,
                ny = Object.defineProperties,
                iy = Object.getOwnPropertyDescriptors,
                Gu = Object.getOwnPropertySymbols,
                sy = Object.prototype.hasOwnProperty,
                oy = Object.prototype.propertyIsEnumerable,
                Wu = (f, r, t) => r in f ? ry(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                Qi = (f, r) => {
                    for (var t in r || (r = {})) sy.call(r, t) && Wu(f, t, r[t]);
                    if (Gu)
                        for (var t of Gu(r)) oy.call(r, t) && Wu(f, t, r[t]);
                    return f
                },
                Ju = (f, r) => ny(f, iy(r));

            function Zs(f) {
                return Number(f[0].split(":")[1])
            }

            function _a(f) {
                return `0x${f.toString(16)}`
            }
            class zs {
                constructor() {
                    this.events = new ye.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (r, t) => (this.events.on(r, t), this), this.once = (r, t) => (this.events.once(r, t), this), this.removeListener = (r, t) => (this.events.removeListener(r, t), this), this.off = (r, t) => (this.events.off(r, t), this), this.parseAccount = r => this.isCompatibleChainId(r) ? this.parseAccountId(r).address : r, this.signer = {}, this.rpc = {}
                }
                static init(r) {
                    return (0, v.Z)(function*() {
                        const t = new zs;
                        return yield t.initialize(r), t
                    })()
                }
                request(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        return yield t.signer.request(r, t.formatChainId(t.chainId))
                    })()
                }
                sendAsync(r, t) {
                    this.signer.sendAsync(r, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                enable() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        return r.session || (yield r.connect()), yield r.request({
                            method: "eth_requestAccounts"
                        })
                    })()
                }
                connect(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (!t.signer.client) throw new Error("Provider not initialized. Call init() first");
                        t.loadConnectOpts(r);
                        const {
                            required: o,
                            optional: a
                        } = function ay(f) {
                            const {
                                chains: r,
                                optionalChains: t,
                                methods: o,
                                optionalMethods: a,
                                events: u,
                                optionalEvents: h,
                                rpcMap: b
                            } = f;
                            if (!(0, m.qt)(r)) throw new Error("Invalid chains");
                            const C = {
                                    chains: r,
                                    methods: o || Fs,
                                    events: u || Ms,
                                    rpcMap: Qi({}, r.length ? {
                                        [Zs(r)]: b[Zs(r)]
                                    } : {})
                                },
                                O = u ? .filter(ge => !Ms.includes(ge)),
                                N = o ? .filter(ge => !Fs.includes(ge));
                            if (!(t || h || a || null != O && O.length || null != N && N.length)) return {
                                required: r.length ? C : void 0
                            };
                            const Q = {
                                chains: [...new Set(O ? .length && N ? .length || !t ? C.chains.concat(t || []) : t)],
                                methods: [...new Set(C.methods.concat(null != a && a.length ? a : Vu))],
                                events: [...new Set(C.events.concat(null != h && h.length ? h : ku))],
                                rpcMap: b
                            };
                            return {
                                required: r.length ? C : void 0,
                                optional: t.length ? Q : void 0
                            }
                        }(t.rpc);
                        try {
                            const u = yield new Promise(function() {
                                var b = (0, v.Z)(function*(C, O) {
                                    var N;
                                    t.rpc.showQrModal && (null == (N = t.modal) || N.subscribeModal(H => {
                                        !H.open && !t.signer.session && (t.signer.abortPairingAttempt(), O(new Error("Connection request reset. Please try again.")))
                                    })), yield t.signer.connect(Ju(Qi({
                                        namespaces: Qi({}, o && {
                                            [t.namespace]: o
                                        })
                                    }, a && {
                                        optionalNamespaces: {
                                            [t.namespace]: a
                                        }
                                    }), {
                                        pairingTopic: r ? .pairingTopic
                                    })).then(H => {
                                        C(H)
                                    }).catch(H => {
                                        O(new Error(H.message))
                                    })
                                });
                                return function(C, O) {
                                    return b.apply(this, arguments)
                                }
                            }());
                            if (!u) return;
                            const h = (0, m.gu)(u.namespaces, [t.namespace]);
                            t.setChainIds(t.rpc.chains.length ? t.rpc.chains : h), t.setAccounts(h), t.events.emit("connect", {
                                chainId: _a(t.chainId)
                            })
                        } catch (u) {
                            throw t.signer.logger.error(u), u
                        } finally {
                            t.modal && t.modal.closeModal()
                        }
                    })()
                }
                disconnect() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        r.session && (yield r.signer.disconnect()), r.reset()
                    })()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", r => {
                        const {
                            params: t
                        } = r, {
                            event: o
                        } = t;
                        "accountsChanged" === o.name ? (this.accounts = this.parseAccounts(o.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === o.name ? this.setChainId(this.formatChainId(o.data)) : this.events.emit(o.name, o.data), this.events.emit("session_event", r)
                    }), this.signer.on("chainChanged", r => {
                        const t = parseInt(r);
                        this.chainId = t, this.events.emit("chainChanged", _a(this.chainId)), this.persist()
                    }), this.signer.on("session_update", r => {
                        this.events.emit("session_update", r)
                    }), this.signer.on("session_delete", r => {
                        this.reset(), this.events.emit("session_delete", r), this.events.emit("disconnect", Ju(Qi({}, (0, m.D6)("USER_DISCONNECTED")), {
                            data: r.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", r => {
                        var t, o;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (o = this.modal) || o.openModal({
                            uri: r
                        })), this.events.emit("display_uri", r)
                    })
                }
                switchEthereumChain(r) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: r.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(r) {
                    return "string" == typeof r && r.startsWith(`${this.namespace}:`)
                }
                formatChainId(r) {
                    return `${this.namespace}:${r}`
                }
                parseChainId(r) {
                    return Number(r.split(":")[1])
                }
                setChainIds(r) {
                    const t = r.filter(o => this.isCompatibleChainId(o)).map(o => this.parseChainId(o));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", _a(this.chainId)), this.persist())
                }
                setChainId(r) {
                    if (this.isCompatibleChainId(r)) {
                        const t = this.parseChainId(r);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(r) {
                    const [t, o, a] = r.split(":");
                    return {
                        chainId: `${t}:${o}`,
                        address: a
                    }
                }
                setAccounts(r) {
                    this.accounts = r.filter(t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(r) {
                    var t, o;
                    const a = null != (t = r ? .chains) ? t : [],
                        u = null != (o = r ? .optionalChains) ? o : [],
                        h = a.concat(u);
                    if (!h.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                    const b = a.length ? r ? .methods || Fs : [],
                        C = a.length ? r ? .events || Ms : [],
                        O = r ? .optionalMethods || [],
                        N = r ? .optionalEvents || [],
                        H = r ? .rpcMap || this.buildRpcMap(h, r.projectId),
                        Q = r ? .qrModalOptions || void 0;
                    return {
                        chains: a ? .map(ge => this.formatChainId(ge)),
                        optionalChains: u.map(ge => this.formatChainId(ge)),
                        methods: b,
                        events: C,
                        optionalMethods: O,
                        optionalEvents: N,
                        rpcMap: H,
                        showQrModal: !(null == r || !r.showQrModal),
                        qrModalOptions: Q,
                        projectId: r.projectId,
                        metadata: r.metadata
                    }
                }
                buildRpcMap(r, t) {
                    const o = {};
                    return r.forEach(a => {
                        o[a] = this.getRpcUrl(a, t)
                    }), o
                }
                initialize(r) {
                    var t = this;
                    return (0, v.Z)(function*() {
                        if (t.rpc = t.getRpcConfig(r), t.chainId = Zs(t.rpc.chains.length ? t.rpc.chains : t.rpc.optionalChains), t.signer = yield Qg.init({
                                projectId: t.rpc.projectId,
                                metadata: t.rpc.metadata,
                                disableProviderPing: r.disableProviderPing,
                                relayUrl: r.relayUrl,
                                storageOptions: r.storageOptions
                            }), t.registerEventListeners(), yield t.loadPersistedSession(), t.rpc.showQrModal) {
                            let o;
                            try {
                                const {
                                    WalletConnectModal: a
                                } = yield ie.e(301).then(ie.bind(ie, 3301));
                                o = a
                            } catch {
                                throw new Error("To use QR modal, please install @walletconnect/modal package")
                            }
                            if (o) try {
                                t.modal = new o(Qi({
                                    projectId: t.rpc.projectId
                                }, t.rpc.qrModalOptions))
                            } catch (a) {
                                throw t.signer.logger.error(a), new Error("Could not generate WalletConnectModal Instance")
                            }
                        }
                    })()
                }
                loadConnectOpts(r) {
                    if (!r) return;
                    const {
                        chains: t,
                        optionalChains: o,
                        rpcMap: a
                    } = r;
                    t && (0, m.qt)(t) && (this.rpc.chains = t.map(u => this.formatChainId(u)), t.forEach(u => {
                        this.rpc.rpcMap[u] = a ? .[u] || this.getRpcUrl(u)
                    })), o && (0, m.qt)(o) && (this.rpc.optionalChains = [], this.rpc.optionalChains = o ? .map(u => this.formatChainId(u)), o.forEach(u => {
                        this.rpc.rpcMap[u] = a ? .[u] || this.getRpcUrl(u)
                    }))
                }
                getRpcUrl(r, t) {
                    var o;
                    return (null == (o = this.rpc.rpcMap) ? void 0 : o[r]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${r}&projectId=${t||this.rpc.projectId}`
                }
                loadPersistedSession() {
                    var r = this;
                    return (0, v.Z)(function*() {
                        if (!r.session) return;
                        const t = yield r.signer.client.core.storage.getItem(`${r.STORAGE_KEY}/chainId`), o = r.session.namespaces[`${r.namespace}:${t}`] ? r.session.namespaces[`${r.namespace}:${t}`] : r.session.namespaces[r.namespace];
                        r.setChainIds(t ? [r.formatChainId(t)] : o ? .accounts), r.setAccounts(o ? .accounts)
                    })()
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(r) {
                    return "string" == typeof r || r instanceof String ? [this.parseAccount(r)] : r.map(t => this.parseAccount(t))
                }
            }
            const cy = zs
        },
        2108: (He, $, ie) => {
            "use strict";
            ie.d($, {
                q: () => v
            });
            class v {}
        },
        699: (He, $, ie) => {
            "use strict";
            ie.r($), ie.d($, {
                IEvents: () => v.q
            });
            var v = ie(2108)
        },
        4953: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            }), $.HEARTBEAT_EVENTS = $.HEARTBEAT_INTERVAL = void 0;
            const v = ie(5409);
            $.HEARTBEAT_INTERVAL = v.FIVE_SECONDS, $.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        5368: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            }), ie(9653).__exportStar(ie(4953), $)
        },
        9754: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            }), $.HeartBeat = void 0;
            const v = ie(9653),
                ye = ie(2016),
                be = ie(5409),
                m = ie(4083),
                te = ie(5368);
            class we extends m.IHeartBeat {
                constructor(ae) {
                    super(ae), this.events = new ye.EventEmitter, this.interval = te.HEARTBEAT_INTERVAL, this.interval = ae ? .interval || te.HEARTBEAT_INTERVAL
                }
                static init(ae) {
                    return v.__awaiter(this, void 0, void 0, function*() {
                        const le = new we(ae);
                        return yield le.init(), le
                    })
                }
                init() {
                    return v.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(ae, le) {
                    this.events.on(ae, le)
                }
                once(ae, le) {
                    this.events.once(ae, le)
                }
                off(ae, le) {
                    this.events.off(ae, le)
                }
                removeListener(ae, le) {
                    this.events.removeListener(ae, le)
                }
                initialize() {
                    return v.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), be.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(te.HEARTBEAT_EVENTS.pulse)
                }
            }
            $.HeartBeat = we
        },
        986: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            });
            const v = ie(9653);
            v.__exportStar(ie(9754), $), v.__exportStar(ie(4083), $), v.__exportStar(ie(5368), $)
        },
        7293: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            }), $.IHeartBeat = void 0;
            const v = ie(699);
            $.IHeartBeat = class ye extends v.IEvents {
                constructor(m) {
                    super()
                }
            }
        },
        4083: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            }), ie(9653).__exportStar(ie(7293), $)
        },
        6904: (He, $) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            }), $.PINO_CUSTOM_CONTEXT_KEY = $.PINO_LOGGER_DEFAULTS = void 0, $.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, $.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        2997: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            }), $.pino = void 0;
            const v = ie(7121),
                ye = v.__importDefault(ie(1590));
            Object.defineProperty($, "pino", {
                enumerable: !0,
                get: function() {
                    return ye.default
                }
            }), v.__exportStar(ie(6904), $), v.__exportStar(ie(2723), $)
        },
        2723: (He, $, ie) => {
            "use strict";
            Object.defineProperty($, "__esModule", {
                value: !0
            }), $.generateChildLogger = $.formatChildLoggerContext = $.getLoggerContext = $.setBrowserLoggerContext = $.getBrowserLoggerContext = $.getDefaultLoggerOptions = void 0;
            const v = ie(6904);

            function be(ae, le = v.PINO_CUSTOM_CONTEXT_KEY) {
                return ae[le] || ""
            }

            function m(ae, le, fe = v.PINO_CUSTOM_CONTEXT_KEY) {
                return ae[fe] = le, ae
            }

            function te(ae, le = v.PINO_CUSTOM_CONTEXT_KEY) {
                let fe = "";
                return fe = typeof ae.bindings > "u" ? be(ae, le) : ae.bindings().context || "", fe
            }

            function we(ae, le, fe = v.PINO_CUSTOM_CONTEXT_KEY) {
                const Ce = te(ae, fe);
                return Ce.trim() ? `${Ce}/${le}` : le
            }
            $.getDefaultLoggerOptions = function ye(ae) {
                return Object.assign(Object.assign({}, ae), {
                    level: ae ? .level || v.PINO_LOGGER_DEFAULTS.level
                })
            }, $.getBrowserLoggerContext = be, $.setBrowserLoggerContext = m, $.getLoggerContext = te, $.formatChildLoggerContext = we, $.generateChildLogger = function Re(ae, le, fe = v.PINO_CUSTOM_CONTEXT_KEY) {
                const Ce = we(ae, le, fe);
                return m(ae.child({
                    context: Ce
                }), Ce, fe)
            }
        },
        2768: () => {},
        2055: function(He, $) {
            var be, ie = typeof self < "u" ? self : this,
                v = function() {
                    function be() {
                        this.fetch = !1, this.DOMException = ie.DOMException
                    }
                    return be.prototype = ie, new be
                }();
            be = v,
                function(te) {
                    var we_searchParams = "URLSearchParams" in be,
                        we_iterable = "Symbol" in be && "iterator" in Symbol,
                        we_blob = "FileReader" in be && "Blob" in be && function() {
                            try {
                                return new Blob, !0
                            } catch {
                                return !1
                            }
                        }(),
                        we_formData = "FormData" in be,
                        we_arrayBuffer = "ArrayBuffer" in be;
                    if (we_arrayBuffer) var ae = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        le = ArrayBuffer.isView || function(w) {
                            return w && ae.indexOf(Object.prototype.toString.call(w)) > -1
                        };

                    function fe(w) {
                        if ("string" != typeof w && (w = String(w)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(w)) throw new TypeError("Invalid character in header field name");
                        return w.toLowerCase()
                    }

                    function Ce(w) {
                        return "string" != typeof w && (w = String(w)), w
                    }

                    function xe(w) {
                        var g = {
                            next: function() {
                                var I = w.shift();
                                return {
                                    done: void 0 === I,
                                    value: I
                                }
                            }
                        };
                        return we_iterable && (g[Symbol.iterator] = function() {
                            return g
                        }), g
                    }

                    function _e(w) {
                        this.map = {}, w instanceof _e ? w.forEach(function(g, I) {
                            this.append(I, g)
                        }, this) : Array.isArray(w) ? w.forEach(function(g) {
                            this.append(g[0], g[1])
                        }, this) : w && Object.getOwnPropertyNames(w).forEach(function(g) {
                            this.append(g, w[g])
                        }, this)
                    }

                    function de(w) {
                        if (w.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        w.bodyUsed = !0
                    }

                    function et(w) {
                        return new Promise(function(g, I) {
                            w.onload = function() {
                                g(w.result)
                            }, w.onerror = function() {
                                I(w.error)
                            }
                        })
                    }

                    function Ue(w) {
                        var g = new FileReader,
                            I = et(g);
                        return g.readAsArrayBuffer(w), I
                    }

                    function ce(w) {
                        if (w.slice) return w.slice(0);
                        var g = new Uint8Array(w.byteLength);
                        return g.set(new Uint8Array(w)), g.buffer
                    }

                    function re() {
                        return this.bodyUsed = !1, this._initBody = function(w) {
                            this._bodyInit = w, w ? "string" == typeof w ? this._bodyText = w : we_blob && Blob.prototype.isPrototypeOf(w) ? this._bodyBlob = w : we_formData && FormData.prototype.isPrototypeOf(w) ? this._bodyFormData = w : we_searchParams && URLSearchParams.prototype.isPrototypeOf(w) ? this._bodyText = w.toString() : we_arrayBuffer && we_blob && function Re(w) {
                                return w && DataView.prototype.isPrototypeOf(w)
                            }(w) ? (this._bodyArrayBuffer = ce(w.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : we_arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(w) || le(w)) ? this._bodyArrayBuffer = ce(w) : this._bodyText = w = Object.prototype.toString.call(w) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof w ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : we_searchParams && URLSearchParams.prototype.isPrototypeOf(w) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, we_blob && (this.blob = function() {
                            var w = de(this);
                            if (w) return w;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? de(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(Ue)
                        }), this.text = function() {
                            var w = de(this);
                            if (w) return w;
                            if (this._bodyBlob) return function We(w) {
                                var g = new FileReader,
                                    I = et(g);
                                return g.readAsText(w), I
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function Je(w) {
                                for (var g = new Uint8Array(w), I = new Array(g.length), G = 0; G < g.length; G++) I[G] = String.fromCharCode(g[G]);
                                return I.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, we_formData && (this.formData = function() {
                            return this.text().then(J)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    _e.prototype.append = function(w, g) {
                        w = fe(w), g = Ce(g);
                        var I = this.map[w];
                        this.map[w] = I ? I + ", " + g : g
                    }, _e.prototype.delete = function(w) {
                        delete this.map[fe(w)]
                    }, _e.prototype.get = function(w) {
                        return w = fe(w), this.has(w) ? this.map[w] : null
                    }, _e.prototype.has = function(w) {
                        return this.map.hasOwnProperty(fe(w))
                    }, _e.prototype.set = function(w, g) {
                        this.map[fe(w)] = Ce(g)
                    }, _e.prototype.forEach = function(w, g) {
                        for (var I in this.map) this.map.hasOwnProperty(I) && w.call(g, this.map[I], I, this)
                    }, _e.prototype.keys = function() {
                        var w = [];
                        return this.forEach(function(g, I) {
                            w.push(I)
                        }), xe(w)
                    }, _e.prototype.values = function() {
                        var w = [];
                        return this.forEach(function(g) {
                            w.push(g)
                        }), xe(w)
                    }, _e.prototype.entries = function() {
                        var w = [];
                        return this.forEach(function(g, I) {
                            w.push([I, g])
                        }), xe(w)
                    }, we_iterable && (_e.prototype[Symbol.iterator] = _e.prototype.entries);
                    var he = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function Z(w, g) {
                        var I = (g = g || {}).body;
                        if (w instanceof Z) {
                            if (w.bodyUsed) throw new TypeError("Already read");
                            this.url = w.url, this.credentials = w.credentials, g.headers || (this.headers = new _e(w.headers)), this.method = w.method, this.mode = w.mode, this.signal = w.signal, !I && null != w._bodyInit && (I = w._bodyInit, w.bodyUsed = !0)
                        } else this.url = String(w);
                        if (this.credentials = g.credentials || this.credentials || "same-origin", (g.headers || !this.headers) && (this.headers = new _e(g.headers)), this.method = function pe(w) {
                                var g = w.toUpperCase();
                                return he.indexOf(g) > -1 ? g : w
                            }(g.method || this.method || "GET"), this.mode = g.mode || this.mode || null, this.signal = g.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && I) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(I)
                    }

                    function J(w) {
                        var g = new FormData;
                        return w.trim().split("&").forEach(function(I) {
                            if (I) {
                                var G = I.split("="),
                                    ve = G.shift().replace(/\+/g, " "),
                                    D = G.join("=").replace(/\+/g, " ");
                                g.append(decodeURIComponent(ve), decodeURIComponent(D))
                            }
                        }), g
                    }

                    function y(w) {
                        var g = new _e;
                        return w.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(G) {
                            var ve = G.split(":"),
                                D = ve.shift().trim();
                            if (D) {
                                var W = ve.join(":").trim();
                                g.append(D, W)
                            }
                        }), g
                    }

                    function P(w, g) {
                        g || (g = {}), this.type = "default", this.status = void 0 === g.status ? 200 : g.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in g ? g.statusText : "OK", this.headers = new _e(g.headers), this.url = g.url || "", this._initBody(w)
                    }
                    Z.prototype.clone = function() {
                        return new Z(this, {
                            body: this._bodyInit
                        })
                    }, re.call(Z.prototype), re.call(P.prototype), P.prototype.clone = function() {
                        return new P(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new _e(this.headers),
                            url: this.url
                        })
                    }, P.error = function() {
                        var w = new P(null, {
                            status: 0,
                            statusText: ""
                        });
                        return w.type = "error", w
                    };
                    var E = [301, 302, 303, 307, 308];
                    P.redirect = function(w, g) {
                        if (-1 === E.indexOf(g)) throw new RangeError("Invalid status code");
                        return new P(null, {
                            status: g,
                            headers: {
                                location: w
                            }
                        })
                    }, te.DOMException = be.DOMException;
                    try {
                        new te.DOMException
                    } catch {
                        te.DOMException = function(g, I) {
                            this.message = g, this.name = I;
                            var G = Error(g);
                            this.stack = G.stack
                        }, te.DOMException.prototype = Object.create(Error.prototype), te.DOMException.prototype.constructor = te.DOMException
                    }

                    function A(w, g) {
                        return new Promise(function(I, G) {
                            var ve = new Z(w, g);
                            if (ve.signal && ve.signal.aborted) return G(new te.DOMException("Aborted", "AbortError"));
                            var D = new XMLHttpRequest;

                            function W() {
                                D.abort()
                            }
                            D.onload = function() {
                                var se = {
                                    status: D.status,
                                    statusText: D.statusText,
                                    headers: y(D.getAllResponseHeaders() || "")
                                };
                                se.url = "responseURL" in D ? D.responseURL : se.headers.get("X-Request-URL"), I(new P("response" in D ? D.response : D.responseText, se))
                            }, D.onerror = function() {
                                G(new TypeError("Network request failed"))
                            }, D.ontimeout = function() {
                                G(new TypeError("Network request failed"))
                            }, D.onabort = function() {
                                G(new te.DOMException("Aborted", "AbortError"))
                            }, D.open(ve.method, ve.url, !0), "include" === ve.credentials ? D.withCredentials = !0 : "omit" === ve.credentials && (D.withCredentials = !1), "responseType" in D && we_blob && (D.responseType = "blob"), ve.headers.forEach(function(se, B) {
                                D.setRequestHeader(B, se)
                            }), ve.signal && (ve.signal.addEventListener("abort", W), D.onreadystatechange = function() {
                                4 === D.readyState && ve.signal.removeEventListener("abort", W)
                            }), D.send(typeof ve._bodyInit > "u" ? null : ve._bodyInit)
                        })
                    }
                    A.polyfill = !0, be.fetch || (be.fetch = A, be.Headers = _e, be.Request = Z, be.Response = P), te.Headers = _e, te.Request = Z, te.Response = P, te.fetch = A, Object.defineProperty(te, "__esModule", {
                        value: !0
                    })
                }({}), v.fetch.ponyfill = !0, delete v.fetch.polyfill;
            var ye = v;
            ($ = ye.fetch).default = ye.fetch, $.fetch = ye.fetch, $.Headers = ye.Headers, $.Request = ye.Request, $.Response = ye.Response, He.exports = $
        },
        2016: He => {
            "use strict";
            var v, $ = "object" == typeof Reflect ? Reflect : null,
                ie = $ && "function" == typeof $.apply ? $.apply : function(re, he, pe) {
                    return Function.prototype.apply.call(re, he, pe)
                };
            v = $ && "function" == typeof $.ownKeys ? $.ownKeys : Object.getOwnPropertySymbols ? function(re) {
                return Object.getOwnPropertyNames(re).concat(Object.getOwnPropertySymbols(re))
            } : function(re) {
                return Object.getOwnPropertyNames(re)
            };
            var be = Number.isNaN || function(re) {
                return re != re
            };

            function m() {
                m.init.call(this)
            }
            He.exports = m, He.exports.once = function Ue(ce, re) {
                return new Promise(function(he, pe) {
                    function Z(y) {
                        ce.removeListener(re, J), pe(y)
                    }

                    function J() {
                        "function" == typeof ce.removeListener && ce.removeListener("error", Z), he([].slice.call(arguments))
                    }
                    Je(ce, re, J, {
                        once: !0
                    }), "error" !== re && function We(ce, re, he) {
                        "function" == typeof ce.on && Je(ce, "error", re, he)
                    }(ce, Z, {
                        once: !0
                    })
                })
            }, m.EventEmitter = m, m.prototype._events = void 0, m.prototype._eventsCount = 0, m.prototype._maxListeners = void 0;
            var te = 10;

            function we(ce) {
                if ("function" != typeof ce) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof ce)
            }

            function Re(ce) {
                return void 0 === ce._maxListeners ? m.defaultMaxListeners : ce._maxListeners
            }

            function ae(ce, re, he, pe) {
                var Z, J, y;
                if (we(he), void 0 === (J = ce._events) ? (J = ce._events = Object.create(null), ce._eventsCount = 0) : (void 0 !== J.newListener && (ce.emit("newListener", re, he.listener ? he.listener : he), J = ce._events), y = J[re]), void 0 === y) y = J[re] = he, ++ce._eventsCount;
                else if ("function" == typeof y ? y = J[re] = pe ? [he, y] : [y, he] : pe ? y.unshift(he) : y.push(he), (Z = Re(ce)) > 0 && y.length > Z && !y.warned) {
                    y.warned = !0;
                    var P = new Error("Possible EventEmitter memory leak detected. " + y.length + " " + String(re) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    P.name = "MaxListenersExceededWarning", P.emitter = ce, P.type = re, P.count = y.length,
                        function ye(ce) {
                            console && console.warn && console.warn(ce)
                        }(P)
                }
                return ce
            }

            function le() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function fe(ce, re, he) {
                var pe = {
                        fired: !1,
                        wrapFn: void 0,
                        target: ce,
                        type: re,
                        listener: he
                    },
                    Z = le.bind(pe);
                return Z.listener = he, pe.wrapFn = Z, Z
            }

            function Ce(ce, re, he) {
                var pe = ce._events;
                if (void 0 === pe) return [];
                var Z = pe[re];
                return void 0 === Z ? [] : "function" == typeof Z ? he ? [Z.listener || Z] : [Z] : he ? function et(ce) {
                    for (var re = new Array(ce.length), he = 0; he < re.length; ++he) re[he] = ce[he].listener || ce[he];
                    return re
                }(Z) : _e(Z, Z.length)
            }

            function xe(ce) {
                var re = this._events;
                if (void 0 !== re) {
                    var he = re[ce];
                    if ("function" == typeof he) return 1;
                    if (void 0 !== he) return he.length
                }
                return 0
            }

            function _e(ce, re) {
                for (var he = new Array(re), pe = 0; pe < re; ++pe) he[pe] = ce[pe];
                return he
            }

            function Je(ce, re, he, pe) {
                if ("function" == typeof ce.on) pe.once ? ce.once(re, he) : ce.on(re, he);
                else {
                    if ("function" != typeof ce.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof ce);
                    ce.addEventListener(re, function Z(J) {
                        pe.once && ce.removeEventListener(re, Z), he(J)
                    })
                }
            }
            Object.defineProperty(m, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return te
                },
                set: function(ce) {
                    if ("number" != typeof ce || ce < 0 || be(ce)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + ce + ".");
                    te = ce
                }
            }), m.init = function() {
                (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, m.prototype.setMaxListeners = function(re) {
                if ("number" != typeof re || re < 0 || be(re)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + re + ".");
                return this._maxListeners = re, this
            }, m.prototype.getMaxListeners = function() {
                return Re(this)
            }, m.prototype.emit = function(re) {
                for (var he = [], pe = 1; pe < arguments.length; pe++) he.push(arguments[pe]);
                var Z = "error" === re,
                    J = this._events;
                if (void 0 !== J) Z = Z && void 0 === J.error;
                else if (!Z) return !1;
                if (Z) {
                    var y;
                    if (he.length > 0 && (y = he[0]), y instanceof Error) throw y;
                    var P = new Error("Unhandled error." + (y ? " (" + y.message + ")" : ""));
                    throw P.context = y, P
                }
                var E = J[re];
                if (void 0 === E) return !1;
                if ("function" == typeof E) ie(E, this, he);
                else {
                    var A = E.length,
                        w = _e(E, A);
                    for (pe = 0; pe < A; ++pe) ie(w[pe], this, he)
                }
                return !0
            }, m.prototype.on = m.prototype.addListener = function(re, he) {
                return ae(this, re, he, !1)
            }, m.prototype.prependListener = function(re, he) {
                return ae(this, re, he, !0)
            }, m.prototype.once = function(re, he) {
                return we(he), this.on(re, fe(this, re, he)), this
            }, m.prototype.prependOnceListener = function(re, he) {
                return we(he), this.prependListener(re, fe(this, re, he)), this
            }, m.prototype.off = m.prototype.removeListener = function(re, he) {
                var pe, Z, J, y, P;
                if (we(he), void 0 === (Z = this._events)) return this;
                if (void 0 === (pe = Z[re])) return this;
                if (pe === he || pe.listener === he) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete Z[re], Z.removeListener && this.emit("removeListener", re, pe.listener || he));
                else if ("function" != typeof pe) {
                    for (J = -1, y = pe.length - 1; y >= 0; y--)
                        if (pe[y] === he || pe[y].listener === he) {
                            P = pe[y].listener, J = y;
                            break
                        }
                    if (J < 0) return this;
                    0 === J ? pe.shift() : function de(ce, re) {
                        for (; re + 1 < ce.length; re++) ce[re] = ce[re + 1];
                        ce.pop()
                    }(pe, J), 1 === pe.length && (Z[re] = pe[0]), void 0 !== Z.removeListener && this.emit("removeListener", re, P || he)
                }
                return this
            }, m.prototype.removeAllListeners = function(re) {
                var he, pe, Z;
                if (void 0 === (pe = this._events)) return this;
                if (void 0 === pe.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== pe[re] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete pe[re]), this;
                if (0 === arguments.length) {
                    var y, J = Object.keys(pe);
                    for (Z = 0; Z < J.length; ++Z) "removeListener" !== (y = J[Z]) && this.removeAllListeners(y);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(he = pe[re])) this.removeListener(re, he);
                else if (void 0 !== he)
                    for (Z = he.length - 1; Z >= 0; Z--) this.removeListener(re, he[Z]);
                return this
            }, m.prototype.listeners = function(re) {
                return Ce(this, re, !0)
            }, m.prototype.rawListeners = function(re) {
                return Ce(this, re, !1)
            }, m.listenerCount = function(ce, re) {
                return "function" == typeof ce.listenerCount ? ce.listenerCount(re) : xe.call(ce, re)
            }, m.prototype.listenerCount = xe, m.prototype.eventNames = function() {
                return this._eventsCount > 0 ? v(this._events) : []
            }
        },
        9557: (He, $, ie) => {
            He.exports = self.fetch || (self.fetch = ie(8456).default || ie(8456))
        },
        2650: (He, $, ie) => {
            He = ie.nmd(He);
            var ye = "__lodash_hash_undefined__",
                be = 1,
                m = 2,
                te = 9007199254740991,
                we = "[object Arguments]",
                Re = "[object Array]",
                ae = "[object AsyncFunction]",
                le = "[object Boolean]",
                fe = "[object Date]",
                Ce = "[object Error]",
                xe = "[object Function]",
                _e = "[object GeneratorFunction]",
                de = "[object Map]",
                et = "[object Number]",
                Ue = "[object Null]",
                We = "[object Object]",
                Je = "[object Promise]",
                ce = "[object Proxy]",
                re = "[object RegExp]",
                he = "[object Set]",
                pe = "[object String]",
                J = "[object Undefined]",
                y = "[object WeakMap]",
                P = "[object ArrayBuffer]",
                E = "[object DataView]",
                Pe = /^\[object .+?Constructor\]$/,
                ke = /^(?:0|[1-9]\d*)$/,
                Me = {};
            Me["[object Float32Array]"] = Me["[object Float64Array]"] = Me["[object Int8Array]"] = Me["[object Int16Array]"] = Me["[object Int32Array]"] = Me["[object Uint8Array]"] = Me["[object Uint8ClampedArray]"] = Me["[object Uint16Array]"] = Me["[object Uint32Array]"] = !0, Me[we] = Me[Re] = Me[P] = Me[le] = Me[E] = Me[fe] = Me[Ce] = Me[xe] = Me[de] = Me[et] = Me[We] = Me[re] = Me[he] = Me[pe] = Me[y] = !1;
            var Zt = "object" == typeof global && global && global.Object === Object && global,
                tn = "object" == typeof self && self && self.Object === Object && self,
                vt = Zt || tn || Function("return this")(),
                K = $ && !$.nodeType && $,
                V = K && He && !He.nodeType && He,
                z = V && V.exports === K,
                d = z && Zt.process,
                L = function() {
                    try {
                        return d && d.binding && d.binding("util")
                    } catch {}
                }(),
                Oe = L && L.isTypedArray;

            function bt(S, j) {
                for (var ne = -1, Ee = null == S ? 0 : S.length; ++ne < Ee;)
                    if (j(S[ne], ne, S)) return !0;
                return !1
            }

            function Jt(S, j) {
                return S.has(j)
            }

            function wt(S) {
                var j = -1,
                    ne = Array(S.size);
                return S.forEach(function(Ee, pt) {
                    ne[++j] = [pt, Ee]
                }), ne
            }

            function zt(S) {
                var j = -1,
                    ne = Array(S.size);
                return S.forEach(function(Ee) {
                    ne[++j] = Ee
                }), ne
            }
            var S, Dt = Array.prototype,
                ht = Object.prototype,
                dt = vt["__core-js_shared__"],
                ft = Function.prototype.toString,
                rt = ht.hasOwnProperty,
                Qt = (S = /[^.]+$/.exec(dt && dt.keys && dt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + S : "",
                sr = ht.toString,
                yr = RegExp("^" + ft.call(rt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                hr = z ? vt.Buffer : void 0,
                dr = vt.Symbol,
                Sr = vt.Uint8Array,
                Tr = ht.propertyIsEnumerable,
                br = Dt.splice,
                Te = dr ? dr.toStringTag : void 0,
                wr = Object.getOwnPropertySymbols,
                _n = hr ? hr.isBuffer : void 0,
                Jn = function ir(S, j) {
                    return function(ne) {
                        return S(j(ne))
                    }
                }(Object.keys, Object),
                mn = jn(vt, "DataView"),
                fn = jn(vt, "Map"),
                Nt = jn(vt, "Promise"),
                Lt = jn(vt, "Set"),
                jt = jn(vt, "WeakMap"),
                At = jn(Object, "create"),
                Yt = hn(mn),
                or = hn(fn),
                Xt = hn(Nt),
                ar = hn(Lt),
                er = hn(jt),
                qt = dr ? dr.prototype : void 0,
                Ut = qt ? qt.valueOf : void 0;

            function _t(S) {
                var j = -1,
                    ne = null == S ? 0 : S.length;
                for (this.clear(); ++j < ne;) {
                    var Ee = S[j];
                    this.set(Ee[0], Ee[1])
                }
            }

            function rn(S) {
                var j = -1,
                    ne = null == S ? 0 : S.length;
                for (this.clear(); ++j < ne;) {
                    var Ee = S[j];
                    this.set(Ee[0], Ee[1])
                }
            }

            function bn(S) {
                var j = -1,
                    ne = null == S ? 0 : S.length;
                for (this.clear(); ++j < ne;) {
                    var Ee = S[j];
                    this.set(Ee[0], Ee[1])
                }
            }

            function qi(S) {
                var j = -1,
                    ne = null == S ? 0 : S.length;
                for (this.__data__ = new bn; ++j < ne;) this.add(S[j])
            }

            function Hr(S) {
                var j = this.__data__ = new rn(S);
                this.size = j.size
            }

            function pi(S, j) {
                for (var ne = S.length; ne--;)
                    if (As(S[ne][0], j)) return ne;
                return -1
            }

            function gi(S) {
                return null == S ? void 0 === S ? J : Ue : Te && Te in Object(S) ? function Go(S) {
                    var j = rt.call(S, Te),
                        ne = S[Te];
                    try {
                        S[Te] = void 0;
                        var Ee = !0
                    } catch {}
                    var pt = sr.call(S);
                    return Ee && (j ? S[Te] = ne : delete S[Te]), pt
                }(S) : function Bc(S) {
                    return sr.call(S)
                }(S)
            }

            function Is(S) {
                return Kr(S) && gi(S) == we
            }

            function Ko(S, j, ne, Ee, pt) {
                return S === j || (null == S || null == j || !Kr(S) && !Kr(j) ? S != S && j != j : function Ps(S, j, ne, Ee, pt, ze) {
                    var xt = Yn(S),
                        Ht = Yn(j),
                        nr = xt ? Re : Br(S),
                        Et = Ht ? Re : Br(j),
                        xr = (nr = nr == we ? We : nr) == We,
                        Or = (Et = Et == we ? We : Et) == We,
                        Bt = nr == Et;
                    if (Bt && _i(S)) {
                        if (!_i(j)) return !1;
                        xt = !0, xr = !1
                    }
                    if (Bt && !xr) return ze || (ze = new Hr), xt || Xn(S) ? yi(S, j, ne, Ee, pt, ze) : function $c(S, j, ne, Ee, pt, ze, xt) {
                        switch (ne) {
                            case E:
                                if (S.byteLength != j.byteLength || S.byteOffset != j.byteOffset) return !1;
                                S = S.buffer, j = j.buffer;
                            case P:
                                return !(S.byteLength != j.byteLength || !ze(new Sr(S), new Sr(j)));
                            case le:
                            case fe:
                            case et:
                                return As(+S, +j);
                            case Ce:
                                return S.name == j.name && S.message == j.message;
                            case re:
                            case pe:
                                return S == j + "";
                            case de:
                                var Ht = wt;
                            case he:
                                if (Ht || (Ht = zt), S.size != j.size && !(Ee & be)) return !1;
                                var Et = xt.get(S);
                                if (Et) return Et == j;
                                Ee |= m, xt.set(S, j);
                                var xr = yi(Ht(S), Ht(j), Ee, pt, ze, xt);
                                return xt.delete(S), xr;
                            case "[object Symbol]":
                                if (Ut) return Ut.call(S) == Ut.call(j)
                        }
                        return !1
                    }(S, j, nr, ne, Ee, pt, ze);
                    if (!(ne & be)) {
                        var Ft = xr && rt.call(S, "__wrapped__"),
                            Pt = Or && rt.call(j, "__wrapped__");
                        if (Ft || Pt) {
                            var wn = Ft ? S.value() : S,
                                ur = Pt ? j.value() : j;
                            return ze || (ze = new Hr), pt(wn, ur, ne, Ee, ze)
                        }
                    }
                    return !!Bt && (ze || (ze = new Hr), function ko(S, j, ne, Ee, pt, ze) {
                        var xt = ne & be,
                            Ht = Ss(S),
                            nr = Ht.length;
                        if (nr != Ss(j).length && !xt) return !1;
                        for (var Or = nr; Or--;) {
                            var Bt = Ht[Or];
                            if (!(xt ? Bt in j : rt.call(j, Bt))) return !1
                        }
                        var Ft = ze.get(S);
                        if (Ft && ze.get(j)) return Ft == j;
                        var Pt = !0;
                        ze.set(S, j), ze.set(j, S);
                        for (var wn = xt; ++Or < nr;) {
                            var ur = S[Bt = Ht[Or]],
                                Fn = j[Bt];
                            if (Ee) var ea = xt ? Ee(Fn, ur, Bt, j, S, ze) : Ee(ur, Fn, Bt, S, j, ze);
                            if (!(void 0 === ea ? ur === Fn || pt(ur, Fn, ne, Ee, ze) : ea)) {
                                Pt = !1;
                                break
                            }
                            wn || (wn = "constructor" == Bt)
                        }
                        if (Pt && !wn) {
                            var wi = S.constructor,
                                xi = j.constructor;
                            wi != xi && "constructor" in S && "constructor" in j && !("function" == typeof wi && wi instanceof wi && "function" == typeof xi && xi instanceof xi) && (Pt = !1)
                        }
                        return ze.delete(S), ze.delete(j), Pt
                    }(S, j, ne, Ee, pt, ze))
                }(S, j, ne, Ee, Ko, pt))
            }

            function yi(S, j, ne, Ee, pt, ze) {
                var xt = ne & be,
                    Ht = S.length,
                    nr = j.length;
                if (Ht != nr && !(xt && nr > Ht)) return !1;
                var Et = ze.get(S);
                if (Et && ze.get(j)) return Et == j;
                var xr = -1,
                    Or = !0,
                    Bt = ne & m ? new qi : void 0;
                for (ze.set(S, j), ze.set(j, S); ++xr < Ht;) {
                    var Ft = S[xr],
                        Pt = j[xr];
                    if (Ee) var wn = xt ? Ee(Pt, Ft, xr, j, S, ze) : Ee(Ft, Pt, xr, S, j, ze);
                    if (void 0 !== wn) {
                        if (wn) continue;
                        Or = !1;
                        break
                    }
                    if (Bt) {
                        if (!bt(j, function(ur, Fn) {
                                if (!Jt(Bt, Fn) && (Ft === ur || pt(Ft, ur, ne, Ee, ze))) return Bt.push(Fn)
                            })) {
                            Or = !1;
                            break
                        }
                    } else if (Ft !== Pt && !pt(Ft, Pt, ne, Ee, ze)) {
                        Or = !1;
                        break
                    }
                }
                return ze.delete(S), ze.delete(j), Or
            }

            function Ss(S) {
                return function Bo(S, j, ne) {
                    var Ee = j(S);
                    return Yn(S) ? Ee : function nt(S, j) {
                        for (var ne = -1, Ee = j.length, pt = S.length; ++ne < Ee;) S[pt + ne] = j[ne];
                        return S
                    }(Ee, ne(S))
                }(S, bi, Os)
            }

            function vi(S, j) {
                var ne = S.__data__;
                return function Hc(S) {
                    var j = typeof S;
                    return "string" == j || "number" == j || "symbol" == j || "boolean" == j ? "__proto__" !== S : null === S
                }(j) ? ne["string" == typeof j ? "string" : "hash"] : ne.map
            }

            function jn(S, j) {
                var ne = function Tt(S, j) {
                    return S ? .[j]
                }(S, j);
                return function Vo(S) {
                    return !(!Hi(S) || function Qn(S) {
                        return !!Qt && Qt in S
                    }(S)) && (Qo(S) ? yr : Pe).test(hn(S))
                }(ne) ? ne : void 0
            }
            _t.prototype.clear = function cr() {
                this.__data__ = At ? At(null) : {}, this.size = 0
            }, _t.prototype.delete = function tr(S) {
                var j = this.has(S) && delete this.__data__[S];
                return this.size -= j ? 1 : 0, j
            }, _t.prototype.get = function $t(S) {
                var j = this.__data__;
                if (At) {
                    var ne = j[S];
                    return ne === ye ? void 0 : ne
                }
                return rt.call(j, S) ? j[S] : void 0
            }, _t.prototype.has = function rr(S) {
                var j = this.__data__;
                return At ? void 0 !== j[S] : rt.call(j, S)
            }, _t.prototype.set = function Ae(S, j) {
                var ne = this.__data__;
                return this.size += this.has(S) ? 0 : 1, ne[S] = At && void 0 === j ? ye : j, this
            }, rn.prototype.clear = function Lo() {
                this.__data__ = [], this.size = 0
            }, rn.prototype.delete = function bs(S) {
                var j = this.__data__,
                    ne = pi(j, S);
                return !(ne < 0 || (ne == j.length - 1 ? j.pop() : br.call(j, ne, 1), --this.size, 0))
            }, rn.prototype.get = function ws(S) {
                var j = this.__data__,
                    ne = pi(j, S);
                return ne < 0 ? void 0 : j[ne][1]
            }, rn.prototype.has = function jo(S) {
                return pi(this.__data__, S) > -1
            }, rn.prototype.set = function Fo(S, j) {
                var ne = this.__data__,
                    Ee = pi(ne, S);
                return Ee < 0 ? (++this.size, ne.push([S, j])) : ne[Ee][1] = j, this
            }, bn.prototype.clear = function Mo() {
                this.size = 0, this.__data__ = {
                    hash: new _t,
                    map: new(fn || rn),
                    string: new _t
                }
            }, bn.prototype.delete = function Zo(S) {
                var j = vi(this, S).delete(S);
                return this.size -= j ? 1 : 0, j
            }, bn.prototype.get = function xs(S) {
                return vi(this, S).get(S)
            }, bn.prototype.has = function zo(S) {
                return vi(this, S).has(S)
            }, bn.prototype.set = function qo(S, j) {
                var ne = vi(this, S),
                    Ee = ne.size;
                return ne.set(S, j), this.size += ne.size == Ee ? 0 : 1, this
            }, qi.prototype.add = qi.prototype.push = function Uo(S) {
                return this.__data__.set(S, ye), this
            }, qi.prototype.has = function $o(S) {
                return this.__data__.has(S)
            }, Hr.prototype.clear = function Ui() {
                this.__data__ = new rn, this.size = 0
            }, Hr.prototype.delete = function hi(S) {
                var j = this.__data__,
                    ne = j.delete(S);
                return this.size = j.size, ne
            }, Hr.prototype.get = function di(S) {
                return this.__data__.get(S)
            }, Hr.prototype.has = function Es(S) {
                return this.__data__.has(S)
            }, Hr.prototype.set = function qc(S, j) {
                var ne = this.__data__;
                if (ne instanceof rn) {
                    var Ee = ne.__data__;
                    if (!fn || Ee.length < 199) return Ee.push([S, j]), this.size = ++ne.size, this;
                    ne = this.__data__ = new bn(Ee)
                }
                return ne.set(S, j), this.size = ne.size, this
            };
            var Os = wr ? function(S) {
                    return null == S ? [] : (S = Object(S), function Fe(S, j) {
                        for (var ne = -1, Ee = null == S ? 0 : S.length, pt = 0, ze = []; ++ne < Ee;) {
                            var xt = S[ne];
                            j(xt, ne, S) && (ze[pt++] = xt)
                        }
                        return ze
                    }(wr(S), function(j) {
                        return Tr.call(S, j)
                    }))
                } : function Yo() {
                    return []
                },
                Br = gi;

            function Wo(S, j) {
                return !!(j = j ? ? te) && ("number" == typeof S || ke.test(S)) && S > -1 && S % 1 == 0 && S < j
            }

            function hn(S) {
                if (null != S) {
                    try {
                        return ft.call(S)
                    } catch {}
                    try {
                        return S + ""
                    } catch {}
                }
                return ""
            }

            function As(S, j) {
                return S === j || S != S && j != j
            }(mn && Br(new mn(new ArrayBuffer(1))) != E || fn && Br(new fn) != de || Nt && Br(Nt.resolve()) != Je || Lt && Br(new Lt) != he || jt && Br(new jt) != y) && (Br = function(S) {
                var j = gi(S),
                    ne = j == We ? S.constructor : void 0,
                    Ee = ne ? hn(ne) : "";
                if (Ee) switch (Ee) {
                    case Yt:
                        return E;
                    case or:
                        return de;
                    case Xt:
                        return Je;
                    case ar:
                        return he;
                    case er:
                        return y
                }
                return j
            });
            var Cs = Is(function() {
                    return arguments
                }()) ? Is : function(S) {
                    return Kr(S) && rt.call(S, "callee") && !Tr.call(S, "callee")
                },
                Yn = Array.isArray,
                _i = _n || function Xo() {
                    return !1
                };

            function Qo(S) {
                if (!Hi(S)) return !1;
                var j = gi(S);
                return j == xe || j == _e || j == ae || j == ce
            }

            function mi(S) {
                return "number" == typeof S && S > -1 && S % 1 == 0 && S <= te
            }

            function Hi(S) {
                var j = typeof S;
                return null != S && ("object" == j || "function" == j)
            }

            function Kr(S) {
                return null != S && "object" == typeof S
            }
            var Xn = Oe ? function lt(S) {
                return function(j) {
                    return S(j)
                }
            }(Oe) : function $i(S) {
                return Kr(S) && mi(S.length) && !!Me[gi(S)]
            };

            function bi(S) {
                return function Kc(S) {
                    return null != S && mi(S.length) && !Qo(S)
                }(S) ? function Ho(S, j) {
                    var ne = Yn(S),
                        Ee = !ne && Cs(S),
                        pt = !ne && !Ee && _i(S),
                        ze = !ne && !Ee && !pt && Xn(S),
                        xt = ne || Ee || pt || ze,
                        Ht = xt ? function ot(S, j) {
                            for (var ne = -1, Ee = Array(S); ++ne < S;) Ee[ne] = j(ne);
                            return Ee
                        }(S.length, String) : [],
                        nr = Ht.length;
                    for (var Et in S)(j || rt.call(S, Et)) && (!xt || !("length" == Et || pt && ("offset" == Et || "parent" == Et) || ze && ("buffer" == Et || "byteLength" == Et || "byteOffset" == Et) || Wo(Et, nr))) && Ht.push(Et);
                    return Ht
                }(S) : function Uc(S) {
                    if (! function Rs(S) {
                            var j = S && S.constructor;
                            return S === ("function" == typeof j && j.prototype || ht)
                        }(S)) return Jn(S);
                    var j = [];
                    for (var ne in Object(S)) rt.call(S, ne) && "constructor" != ne && j.push(ne);
                    return j
                }(S)
            }
            He.exports = function Jo(S, j) {
                return Ko(S, j)
            }
        },
        514: He => {
            "use strict";

            function $(v) {
                try {
                    return JSON.stringify(v)
                } catch {
                    return '"[Circular]"'
                }
            }
            He.exports = function ie(v, ye, be) {
                var m = be && be.stringify || $;
                if ("object" == typeof v && null !== v) {
                    var we = ye.length + 1;
                    if (1 === we) return v;
                    var Re = new Array(we);
                    Re[0] = m(v);
                    for (var ae = 1; ae < we; ae++) Re[ae] = m(ye[ae]);
                    return Re.join(" ")
                }
                if ("string" != typeof v) return v;
                var le = ye.length;
                if (0 === le) return v;
                for (var fe = "", Ce = 0, xe = -1, _e = v && v.length || 0, de = 0; de < _e;) {
                    if (37 === v.charCodeAt(de) && de + 1 < _e) {
                        switch (xe = xe > -1 ? xe : 0, v.charCodeAt(de + 1)) {
                            case 100:
                            case 102:
                                if (Ce >= le || null == ye[Ce]) break;
                                xe < de && (fe += v.slice(xe, de)), fe += Number(ye[Ce]), xe = de + 2, de++;
                                break;
                            case 105:
                                if (Ce >= le || null == ye[Ce]) break;
                                xe < de && (fe += v.slice(xe, de)), fe += Math.floor(Number(ye[Ce])), xe = de + 2, de++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (Ce >= le || void 0 === ye[Ce]) break;
                                xe < de && (fe += v.slice(xe, de));
                                var et = typeof ye[Ce];
                                if ("string" === et) {
                                    fe += "'" + ye[Ce] + "'", xe = de + 2, de++;
                                    break
                                }
                                if ("function" === et) {
                                    fe += ye[Ce].name || "<anonymous>", xe = de + 2, de++;
                                    break
                                }
                                fe += m(ye[Ce]), xe = de + 2, de++;
                                break;
                            case 115:
                                if (Ce >= le) break;
                                xe < de && (fe += v.slice(xe, de)), fe += String(ye[Ce]), xe = de + 2, de++;
                                break;
                            case 37:
                                xe < de && (fe += v.slice(xe, de)), fe += "%", xe = de + 2, de++, Ce--
                        }++Ce
                    }++de
                }
                return -1 === xe ? v : (xe < _e && (fe += v.slice(xe)), fe)
            }
        },
        8456: (He, $, ie) => {
            "use strict";

            function v(ye, be) {
                return be = be || {}, new Promise(function(m, te) {
                    var we = new XMLHttpRequest,
                        Re = [],
                        ae = [],
                        le = {},
                        fe = function() {
                            return {
                                ok: 2 == (we.status / 100 | 0),
                                statusText: we.statusText,
                                status: we.status,
                                url: we.responseURL,
                                text: function() {
                                    return Promise.resolve(we.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(we.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([we.response]))
                                },
                                clone: fe,
                                headers: {
                                    keys: function() {
                                        return Re
                                    },
                                    entries: function() {
                                        return ae
                                    },
                                    get: function(xe) {
                                        return le[xe.toLowerCase()]
                                    },
                                    has: function(xe) {
                                        return xe.toLowerCase() in le
                                    }
                                }
                            }
                        };
                    for (var Ce in we.open(be.method || "get", ye, !0), we.onload = function() {
                            we.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(xe, _e, de) {
                                Re.push(_e = _e.toLowerCase()), ae.push([_e, de]), le[_e] = le[_e] ? le[_e] + "," + de : de
                            }), m(fe())
                        }, we.onerror = te, we.withCredentials = "include" == be.credentials, be.headers) we.setRequestHeader(Ce, be.headers[Ce]);
                    we.send(be.body || null)
                })
            }
            ie.r($), ie.d($, {
                default: () => v
            })
        },
        3569: He => {
            "use strict";
            He.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        4308: (He, $, ie) => {
            "use strict";
            ie.r($), ie.d($, {
                __assign: () => be,
                __asyncDelegator: () => Je,
                __asyncGenerator: () => We,
                __asyncValues: () => ce,
                __await: () => Ue,
                __awaiter: () => ae,
                __classPrivateFieldGet: () => Z,
                __classPrivateFieldSet: () => J,
                __createBinding: () => fe,
                __decorate: () => te,
                __exportStar: () => Ce,
                __extends: () => ye,
                __generator: () => le,
                __importDefault: () => pe,
                __importStar: () => he,
                __makeTemplateObject: () => re,
                __metadata: () => Re,
                __param: () => we,
                __read: () => _e,
                __rest: () => m,
                __spread: () => de,
                __spreadArrays: () => et,
                __values: () => xe
            });
            var v = function(y, P) {
                return (v = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(E, A) {
                        E.__proto__ = A
                    } || function(E, A) {
                        for (var w in A) A.hasOwnProperty(w) && (E[w] = A[w])
                    })(y, P)
            };

            function ye(y, P) {
                function E() {
                    this.constructor = y
                }
                v(y, P), y.prototype = null === P ? Object.create(P) : (E.prototype = P.prototype, new E)
            }
            var be = function() {
                return be = Object.assign || function(P) {
                    for (var E, A = 1, w = arguments.length; A < w; A++)
                        for (var g in E = arguments[A]) Object.prototype.hasOwnProperty.call(E, g) && (P[g] = E[g]);
                    return P
                }, be.apply(this, arguments)
            };

            function m(y, P) {
                var E = {};
                for (var A in y) Object.prototype.hasOwnProperty.call(y, A) && P.indexOf(A) < 0 && (E[A] = y[A]);
                if (null != y && "function" == typeof Object.getOwnPropertySymbols) {
                    var w = 0;
                    for (A = Object.getOwnPropertySymbols(y); w < A.length; w++) P.indexOf(A[w]) < 0 && Object.prototype.propertyIsEnumerable.call(y, A[w]) && (E[A[w]] = y[A[w]])
                }
                return E
            }

            function te(y, P, E, A) {
                var I, w = arguments.length,
                    g = w < 3 ? P : null === A ? A = Object.getOwnPropertyDescriptor(P, E) : A;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(y, P, E, A);
                else
                    for (var G = y.length - 1; G >= 0; G--)(I = y[G]) && (g = (w < 3 ? I(g) : w > 3 ? I(P, E, g) : I(P, E)) || g);
                return w > 3 && g && Object.defineProperty(P, E, g), g
            }

            function we(y, P) {
                return function(E, A) {
                    P(E, A, y)
                }
            }

            function Re(y, P) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(y, P)
            }

            function ae(y, P, E, A) {
                return new(E || (E = Promise))(function(g, I) {
                    function G(W) {
                        try {
                            D(A.next(W))
                        } catch (se) {
                            I(se)
                        }
                    }

                    function ve(W) {
                        try {
                            D(A.throw(W))
                        } catch (se) {
                            I(se)
                        }
                    }

                    function D(W) {
                        W.done ? g(W.value) : function w(g) {
                            return g instanceof E ? g : new E(function(I) {
                                I(g)
                            })
                        }(W.value).then(G, ve)
                    }
                    D((A = A.apply(y, P || [])).next())
                })
            }

            function le(y, P) {
                var A, w, g, I, E = {
                    label: 0,
                    sent: function() {
                        if (1 & g[0]) throw g[1];
                        return g[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: G(0),
                    throw: G(1),
                    return: G(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function G(D) {
                    return function(W) {
                        return function ve(D) {
                            if (A) throw new TypeError("Generator is already executing.");
                            for (; E;) try {
                                if (A = 1, w && (g = 2 & D[0] ? w.return : D[0] ? w.throw || ((g = w.return) && g.call(w), 0) : w.next) && !(g = g.call(w, D[1])).done) return g;
                                switch (w = 0, g && (D = [2 & D[0], g.value]), D[0]) {
                                    case 0:
                                    case 1:
                                        g = D;
                                        break;
                                    case 4:
                                        return E.label++, {
                                            value: D[1],
                                            done: !1
                                        };
                                    case 5:
                                        E.label++, w = D[1], D = [0];
                                        continue;
                                    case 7:
                                        D = E.ops.pop(), E.trys.pop();
                                        continue;
                                    default:
                                        if (!(g = (g = E.trys).length > 0 && g[g.length - 1]) && (6 === D[0] || 2 === D[0])) {
                                            E = 0;
                                            continue
                                        }
                                        if (3 === D[0] && (!g || D[1] > g[0] && D[1] < g[3])) {
                                            E.label = D[1];
                                            break
                                        }
                                        if (6 === D[0] && E.label < g[1]) {
                                            E.label = g[1], g = D;
                                            break
                                        }
                                        if (g && E.label < g[2]) {
                                            E.label = g[2], E.ops.push(D);
                                            break
                                        }
                                        g[2] && E.ops.pop(), E.trys.pop();
                                        continue
                                }
                                D = P.call(y, E)
                            } catch (W) {
                                D = [6, W], w = 0
                            } finally {
                                A = g = 0
                            }
                            if (5 & D[0]) throw D[1];
                            return {
                                value: D[0] ? D[1] : void 0,
                                done: !0
                            }
                        }([D, W])
                    }
                }
            }

            function fe(y, P, E, A) {
                void 0 === A && (A = E), y[A] = P[E]
            }

            function Ce(y, P) {
                for (var E in y) "default" !== E && !P.hasOwnProperty(E) && (P[E] = y[E])
            }

            function xe(y) {
                var P = "function" == typeof Symbol && Symbol.iterator,
                    E = P && y[P],
                    A = 0;
                if (E) return E.call(y);
                if (y && "number" == typeof y.length) return {
                    next: function() {
                        return y && A >= y.length && (y = void 0), {
                            value: y && y[A++],
                            done: !y
                        }
                    }
                };
                throw new TypeError(P ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function _e(y, P) {
                var E = "function" == typeof Symbol && y[Symbol.iterator];
                if (!E) return y;
                var w, I, A = E.call(y),
                    g = [];
                try {
                    for (;
                        (void 0 === P || P-- > 0) && !(w = A.next()).done;) g.push(w.value)
                } catch (G) {
                    I = {
                        error: G
                    }
                } finally {
                    try {
                        w && !w.done && (E = A.return) && E.call(A)
                    } finally {
                        if (I) throw I.error
                    }
                }
                return g
            }

            function de() {
                for (var y = [], P = 0; P < arguments.length; P++) y = y.concat(_e(arguments[P]));
                return y
            }

            function et() {
                for (var y = 0, P = 0, E = arguments.length; P < E; P++) y += arguments[P].length;
                var A = Array(y),
                    w = 0;
                for (P = 0; P < E; P++)
                    for (var g = arguments[P], I = 0, G = g.length; I < G; I++, w++) A[w] = g[I];
                return A
            }

            function Ue(y) {
                return this instanceof Ue ? (this.v = y, this) : new Ue(y)
            }

            function We(y, P, E) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var w, A = E.apply(y, P || []),
                    g = [];
                return w = {}, I("next"), I("throw"), I("return"), w[Symbol.asyncIterator] = function() {
                    return this
                }, w;

                function I(B) {
                    A[B] && (w[B] = function(Pe) {
                        return new Promise(function(ke, Me) {
                            g.push([B, Pe, ke, Me]) > 1 || G(B, Pe)
                        })
                    })
                }

                function G(B, Pe) {
                    try {
                        ! function ve(B) {
                            B.value instanceof Ue ? Promise.resolve(B.value.v).then(D, W) : se(g[0][2], B)
                        }(A[B](Pe))
                    } catch (ke) {
                        se(g[0][3], ke)
                    }
                }

                function D(B) {
                    G("next", B)
                }

                function W(B) {
                    G("throw", B)
                }

                function se(B, Pe) {
                    B(Pe), g.shift(), g.length && G(g[0][0], g[0][1])
                }
            }

            function Je(y) {
                var P, E;
                return P = {}, A("next"), A("throw", function(w) {
                    throw w
                }), A("return"), P[Symbol.iterator] = function() {
                    return this
                }, P;

                function A(w, g) {
                    P[w] = y[w] ? function(I) {
                        return (E = !E) ? {
                            value: Ue(y[w](I)),
                            done: "return" === w
                        } : g ? g(I) : I
                    } : g
                }
            }

            function ce(y) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var E, P = y[Symbol.asyncIterator];
                return P ? P.call(y) : (y = xe(y), E = {}, A("next"), A("throw"), A("return"), E[Symbol.asyncIterator] = function() {
                    return this
                }, E);

                function A(g) {
                    E[g] = y[g] && function(I) {
                        return new Promise(function(G, ve) {
                            ! function w(g, I, G, ve) {
                                Promise.resolve(ve).then(function(D) {
                                    g({
                                        value: D,
                                        done: G
                                    })
                                }, I)
                            }(G, ve, (I = y[g](I)).done, I.value)
                        })
                    }
                }
            }

            function re(y, P) {
                return Object.defineProperty ? Object.defineProperty(y, "raw", {
                    value: P
                }) : y.raw = P, y
            }

            function he(y) {
                if (y && y.__esModule) return y;
                var P = {};
                if (null != y)
                    for (var E in y) Object.hasOwnProperty.call(y, E) && (P[E] = y[E]);
                return P.default = y, P
            }

            function pe(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }

            function Z(y, P) {
                if (!P.has(y)) throw new TypeError("attempted to get private field on non-instance");
                return P.get(y)
            }

            function J(y, P, E) {
                if (!P.has(y)) throw new TypeError("attempted to set private field on non-instance");
                return P.set(y, E), E
            }
        },
        9653: (He, $, ie) => {
            "use strict";
            ie.r($), ie.d($, {
                __assign: () => be,
                __asyncDelegator: () => Je,
                __asyncGenerator: () => We,
                __asyncValues: () => ce,
                __await: () => Ue,
                __awaiter: () => ae,
                __classPrivateFieldGet: () => Z,
                __classPrivateFieldSet: () => J,
                __createBinding: () => fe,
                __decorate: () => te,
                __exportStar: () => Ce,
                __extends: () => ye,
                __generator: () => le,
                __importDefault: () => pe,
                __importStar: () => he,
                __makeTemplateObject: () => re,
                __metadata: () => Re,
                __param: () => we,
                __read: () => _e,
                __rest: () => m,
                __spread: () => de,
                __spreadArrays: () => et,
                __values: () => xe
            });
            var v = function(y, P) {
                return (v = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(E, A) {
                        E.__proto__ = A
                    } || function(E, A) {
                        for (var w in A) A.hasOwnProperty(w) && (E[w] = A[w])
                    })(y, P)
            };

            function ye(y, P) {
                function E() {
                    this.constructor = y
                }
                v(y, P), y.prototype = null === P ? Object.create(P) : (E.prototype = P.prototype, new E)
            }
            var be = function() {
                return be = Object.assign || function(P) {
                    for (var E, A = 1, w = arguments.length; A < w; A++)
                        for (var g in E = arguments[A]) Object.prototype.hasOwnProperty.call(E, g) && (P[g] = E[g]);
                    return P
                }, be.apply(this, arguments)
            };

            function m(y, P) {
                var E = {};
                for (var A in y) Object.prototype.hasOwnProperty.call(y, A) && P.indexOf(A) < 0 && (E[A] = y[A]);
                if (null != y && "function" == typeof Object.getOwnPropertySymbols) {
                    var w = 0;
                    for (A = Object.getOwnPropertySymbols(y); w < A.length; w++) P.indexOf(A[w]) < 0 && Object.prototype.propertyIsEnumerable.call(y, A[w]) && (E[A[w]] = y[A[w]])
                }
                return E
            }

            function te(y, P, E, A) {
                var I, w = arguments.length,
                    g = w < 3 ? P : null === A ? A = Object.getOwnPropertyDescriptor(P, E) : A;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(y, P, E, A);
                else
                    for (var G = y.length - 1; G >= 0; G--)(I = y[G]) && (g = (w < 3 ? I(g) : w > 3 ? I(P, E, g) : I(P, E)) || g);
                return w > 3 && g && Object.defineProperty(P, E, g), g
            }

            function we(y, P) {
                return function(E, A) {
                    P(E, A, y)
                }
            }

            function Re(y, P) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(y, P)
            }

            function ae(y, P, E, A) {
                return new(E || (E = Promise))(function(g, I) {
                    function G(W) {
                        try {
                            D(A.next(W))
                        } catch (se) {
                            I(se)
                        }
                    }

                    function ve(W) {
                        try {
                            D(A.throw(W))
                        } catch (se) {
                            I(se)
                        }
                    }

                    function D(W) {
                        W.done ? g(W.value) : function w(g) {
                            return g instanceof E ? g : new E(function(I) {
                                I(g)
                            })
                        }(W.value).then(G, ve)
                    }
                    D((A = A.apply(y, P || [])).next())
                })
            }

            function le(y, P) {
                var A, w, g, I, E = {
                    label: 0,
                    sent: function() {
                        if (1 & g[0]) throw g[1];
                        return g[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: G(0),
                    throw: G(1),
                    return: G(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function G(D) {
                    return function(W) {
                        return function ve(D) {
                            if (A) throw new TypeError("Generator is already executing.");
                            for (; E;) try {
                                if (A = 1, w && (g = 2 & D[0] ? w.return : D[0] ? w.throw || ((g = w.return) && g.call(w), 0) : w.next) && !(g = g.call(w, D[1])).done) return g;
                                switch (w = 0, g && (D = [2 & D[0], g.value]), D[0]) {
                                    case 0:
                                    case 1:
                                        g = D;
                                        break;
                                    case 4:
                                        return E.label++, {
                                            value: D[1],
                                            done: !1
                                        };
                                    case 5:
                                        E.label++, w = D[1], D = [0];
                                        continue;
                                    case 7:
                                        D = E.ops.pop(), E.trys.pop();
                                        continue;
                                    default:
                                        if (!(g = (g = E.trys).length > 0 && g[g.length - 1]) && (6 === D[0] || 2 === D[0])) {
                                            E = 0;
                                            continue
                                        }
                                        if (3 === D[0] && (!g || D[1] > g[0] && D[1] < g[3])) {
                                            E.label = D[1];
                                            break
                                        }
                                        if (6 === D[0] && E.label < g[1]) {
                                            E.label = g[1], g = D;
                                            break
                                        }
                                        if (g && E.label < g[2]) {
                                            E.label = g[2], E.ops.push(D);
                                            break
                                        }
                                        g[2] && E.ops.pop(), E.trys.pop();
                                        continue
                                }
                                D = P.call(y, E)
                            } catch (W) {
                                D = [6, W], w = 0
                            } finally {
                                A = g = 0
                            }
                            if (5 & D[0]) throw D[1];
                            return {
                                value: D[0] ? D[1] : void 0,
                                done: !0
                            }
                        }([D, W])
                    }
                }
            }

            function fe(y, P, E, A) {
                void 0 === A && (A = E), y[A] = P[E]
            }

            function Ce(y, P) {
                for (var E in y) "default" !== E && !P.hasOwnProperty(E) && (P[E] = y[E])
            }

            function xe(y) {
                var P = "function" == typeof Symbol && Symbol.iterator,
                    E = P && y[P],
                    A = 0;
                if (E) return E.call(y);
                if (y && "number" == typeof y.length) return {
                    next: function() {
                        return y && A >= y.length && (y = void 0), {
                            value: y && y[A++],
                            done: !y
                        }
                    }
                };
                throw new TypeError(P ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function _e(y, P) {
                var E = "function" == typeof Symbol && y[Symbol.iterator];
                if (!E) return y;
                var w, I, A = E.call(y),
                    g = [];
                try {
                    for (;
                        (void 0 === P || P-- > 0) && !(w = A.next()).done;) g.push(w.value)
                } catch (G) {
                    I = {
                        error: G
                    }
                } finally {
                    try {
                        w && !w.done && (E = A.return) && E.call(A)
                    } finally {
                        if (I) throw I.error
                    }
                }
                return g
            }

            function de() {
                for (var y = [], P = 0; P < arguments.length; P++) y = y.concat(_e(arguments[P]));
                return y
            }

            function et() {
                for (var y = 0, P = 0, E = arguments.length; P < E; P++) y += arguments[P].length;
                var A = Array(y),
                    w = 0;
                for (P = 0; P < E; P++)
                    for (var g = arguments[P], I = 0, G = g.length; I < G; I++, w++) A[w] = g[I];
                return A
            }

            function Ue(y) {
                return this instanceof Ue ? (this.v = y, this) : new Ue(y)
            }

            function We(y, P, E) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var w, A = E.apply(y, P || []),
                    g = [];
                return w = {}, I("next"), I("throw"), I("return"), w[Symbol.asyncIterator] = function() {
                    return this
                }, w;

                function I(B) {
                    A[B] && (w[B] = function(Pe) {
                        return new Promise(function(ke, Me) {
                            g.push([B, Pe, ke, Me]) > 1 || G(B, Pe)
                        })
                    })
                }

                function G(B, Pe) {
                    try {
                        ! function ve(B) {
                            B.value instanceof Ue ? Promise.resolve(B.value.v).then(D, W) : se(g[0][2], B)
                        }(A[B](Pe))
                    } catch (ke) {
                        se(g[0][3], ke)
                    }
                }

                function D(B) {
                    G("next", B)
                }

                function W(B) {
                    G("throw", B)
                }

                function se(B, Pe) {
                    B(Pe), g.shift(), g.length && G(g[0][0], g[0][1])
                }
            }

            function Je(y) {
                var P, E;
                return P = {}, A("next"), A("throw", function(w) {
                    throw w
                }), A("return"), P[Symbol.iterator] = function() {
                    return this
                }, P;

                function A(w, g) {
                    P[w] = y[w] ? function(I) {
                        return (E = !E) ? {
                            value: Ue(y[w](I)),
                            done: "return" === w
                        } : g ? g(I) : I
                    } : g
                }
            }

            function ce(y) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var E, P = y[Symbol.asyncIterator];
                return P ? P.call(y) : (y = xe(y), E = {}, A("next"), A("throw"), A("return"), E[Symbol.asyncIterator] = function() {
                    return this
                }, E);

                function A(g) {
                    E[g] = y[g] && function(I) {
                        return new Promise(function(G, ve) {
                            ! function w(g, I, G, ve) {
                                Promise.resolve(ve).then(function(D) {
                                    g({
                                        value: D,
                                        done: G
                                    })
                                }, I)
                            }(G, ve, (I = y[g](I)).done, I.value)
                        })
                    }
                }
            }

            function re(y, P) {
                return Object.defineProperty ? Object.defineProperty(y, "raw", {
                    value: P
                }) : y.raw = P, y
            }

            function he(y) {
                if (y && y.__esModule) return y;
                var P = {};
                if (null != y)
                    for (var E in y) Object.hasOwnProperty.call(y, E) && (P[E] = y[E]);
                return P.default = y, P
            }

            function pe(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }

            function Z(y, P) {
                if (!P.has(y)) throw new TypeError("attempted to get private field on non-instance");
                return P.get(y)
            }

            function J(y, P, E) {
                if (!P.has(y)) throw new TypeError("attempted to set private field on non-instance");
                return P.set(y, E), E
            }
        },
        7121: (He, $, ie) => {
            "use strict";
            ie.r($), ie.d($, {
                __assign: () => be,
                __asyncDelegator: () => Je,
                __asyncGenerator: () => We,
                __asyncValues: () => ce,
                __await: () => Ue,
                __awaiter: () => ae,
                __classPrivateFieldGet: () => Z,
                __classPrivateFieldSet: () => J,
                __createBinding: () => fe,
                __decorate: () => te,
                __exportStar: () => Ce,
                __extends: () => ye,
                __generator: () => le,
                __importDefault: () => pe,
                __importStar: () => he,
                __makeTemplateObject: () => re,
                __metadata: () => Re,
                __param: () => we,
                __read: () => _e,
                __rest: () => m,
                __spread: () => de,
                __spreadArrays: () => et,
                __values: () => xe
            });
            var v = function(y, P) {
                return (v = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(E, A) {
                        E.__proto__ = A
                    } || function(E, A) {
                        for (var w in A) A.hasOwnProperty(w) && (E[w] = A[w])
                    })(y, P)
            };

            function ye(y, P) {
                function E() {
                    this.constructor = y
                }
                v(y, P), y.prototype = null === P ? Object.create(P) : (E.prototype = P.prototype, new E)
            }
            var be = function() {
                return be = Object.assign || function(P) {
                    for (var E, A = 1, w = arguments.length; A < w; A++)
                        for (var g in E = arguments[A]) Object.prototype.hasOwnProperty.call(E, g) && (P[g] = E[g]);
                    return P
                }, be.apply(this, arguments)
            };

            function m(y, P) {
                var E = {};
                for (var A in y) Object.prototype.hasOwnProperty.call(y, A) && P.indexOf(A) < 0 && (E[A] = y[A]);
                if (null != y && "function" == typeof Object.getOwnPropertySymbols) {
                    var w = 0;
                    for (A = Object.getOwnPropertySymbols(y); w < A.length; w++) P.indexOf(A[w]) < 0 && Object.prototype.propertyIsEnumerable.call(y, A[w]) && (E[A[w]] = y[A[w]])
                }
                return E
            }

            function te(y, P, E, A) {
                var I, w = arguments.length,
                    g = w < 3 ? P : null === A ? A = Object.getOwnPropertyDescriptor(P, E) : A;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(y, P, E, A);
                else
                    for (var G = y.length - 1; G >= 0; G--)(I = y[G]) && (g = (w < 3 ? I(g) : w > 3 ? I(P, E, g) : I(P, E)) || g);
                return w > 3 && g && Object.defineProperty(P, E, g), g
            }

            function we(y, P) {
                return function(E, A) {
                    P(E, A, y)
                }
            }

            function Re(y, P) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(y, P)
            }

            function ae(y, P, E, A) {
                return new(E || (E = Promise))(function(g, I) {
                    function G(W) {
                        try {
                            D(A.next(W))
                        } catch (se) {
                            I(se)
                        }
                    }

                    function ve(W) {
                        try {
                            D(A.throw(W))
                        } catch (se) {
                            I(se)
                        }
                    }

                    function D(W) {
                        W.done ? g(W.value) : function w(g) {
                            return g instanceof E ? g : new E(function(I) {
                                I(g)
                            })
                        }(W.value).then(G, ve)
                    }
                    D((A = A.apply(y, P || [])).next())
                })
            }

            function le(y, P) {
                var A, w, g, I, E = {
                    label: 0,
                    sent: function() {
                        if (1 & g[0]) throw g[1];
                        return g[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: G(0),
                    throw: G(1),
                    return: G(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function G(D) {
                    return function(W) {
                        return function ve(D) {
                            if (A) throw new TypeError("Generator is already executing.");
                            for (; E;) try {
                                if (A = 1, w && (g = 2 & D[0] ? w.return : D[0] ? w.throw || ((g = w.return) && g.call(w), 0) : w.next) && !(g = g.call(w, D[1])).done) return g;
                                switch (w = 0, g && (D = [2 & D[0], g.value]), D[0]) {
                                    case 0:
                                    case 1:
                                        g = D;
                                        break;
                                    case 4:
                                        return E.label++, {
                                            value: D[1],
                                            done: !1
                                        };
                                    case 5:
                                        E.label++, w = D[1], D = [0];
                                        continue;
                                    case 7:
                                        D = E.ops.pop(), E.trys.pop();
                                        continue;
                                    default:
                                        if (!(g = (g = E.trys).length > 0 && g[g.length - 1]) && (6 === D[0] || 2 === D[0])) {
                                            E = 0;
                                            continue
                                        }
                                        if (3 === D[0] && (!g || D[1] > g[0] && D[1] < g[3])) {
                                            E.label = D[1];
                                            break
                                        }
                                        if (6 === D[0] && E.label < g[1]) {
                                            E.label = g[1], g = D;
                                            break
                                        }
                                        if (g && E.label < g[2]) {
                                            E.label = g[2], E.ops.push(D);
                                            break
                                        }
                                        g[2] && E.ops.pop(), E.trys.pop();
                                        continue
                                }
                                D = P.call(y, E)
                            } catch (W) {
                                D = [6, W], w = 0
                            } finally {
                                A = g = 0
                            }
                            if (5 & D[0]) throw D[1];
                            return {
                                value: D[0] ? D[1] : void 0,
                                done: !0
                            }
                        }([D, W])
                    }
                }
            }

            function fe(y, P, E, A) {
                void 0 === A && (A = E), y[A] = P[E]
            }

            function Ce(y, P) {
                for (var E in y) "default" !== E && !P.hasOwnProperty(E) && (P[E] = y[E])
            }

            function xe(y) {
                var P = "function" == typeof Symbol && Symbol.iterator,
                    E = P && y[P],
                    A = 0;
                if (E) return E.call(y);
                if (y && "number" == typeof y.length) return {
                    next: function() {
                        return y && A >= y.length && (y = void 0), {
                            value: y && y[A++],
                            done: !y
                        }
                    }
                };
                throw new TypeError(P ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function _e(y, P) {
                var E = "function" == typeof Symbol && y[Symbol.iterator];
                if (!E) return y;
                var w, I, A = E.call(y),
                    g = [];
                try {
                    for (;
                        (void 0 === P || P-- > 0) && !(w = A.next()).done;) g.push(w.value)
                } catch (G) {
                    I = {
                        error: G
                    }
                } finally {
                    try {
                        w && !w.done && (E = A.return) && E.call(A)
                    } finally {
                        if (I) throw I.error
                    }
                }
                return g
            }

            function de() {
                for (var y = [], P = 0; P < arguments.length; P++) y = y.concat(_e(arguments[P]));
                return y
            }

            function et() {
                for (var y = 0, P = 0, E = arguments.length; P < E; P++) y += arguments[P].length;
                var A = Array(y),
                    w = 0;
                for (P = 0; P < E; P++)
                    for (var g = arguments[P], I = 0, G = g.length; I < G; I++, w++) A[w] = g[I];
                return A
            }

            function Ue(y) {
                return this instanceof Ue ? (this.v = y, this) : new Ue(y)
            }

            function We(y, P, E) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var w, A = E.apply(y, P || []),
                    g = [];
                return w = {}, I("next"), I("throw"), I("return"), w[Symbol.asyncIterator] = function() {
                    return this
                }, w;

                function I(B) {
                    A[B] && (w[B] = function(Pe) {
                        return new Promise(function(ke, Me) {
                            g.push([B, Pe, ke, Me]) > 1 || G(B, Pe)
                        })
                    })
                }

                function G(B, Pe) {
                    try {
                        ! function ve(B) {
                            B.value instanceof Ue ? Promise.resolve(B.value.v).then(D, W) : se(g[0][2], B)
                        }(A[B](Pe))
                    } catch (ke) {
                        se(g[0][3], ke)
                    }
                }

                function D(B) {
                    G("next", B)
                }

                function W(B) {
                    G("throw", B)
                }

                function se(B, Pe) {
                    B(Pe), g.shift(), g.length && G(g[0][0], g[0][1])
                }
            }

            function Je(y) {
                var P, E;
                return P = {}, A("next"), A("throw", function(w) {
                    throw w
                }), A("return"), P[Symbol.iterator] = function() {
                    return this
                }, P;

                function A(w, g) {
                    P[w] = y[w] ? function(I) {
                        return (E = !E) ? {
                            value: Ue(y[w](I)),
                            done: "return" === w
                        } : g ? g(I) : I
                    } : g
                }
            }

            function ce(y) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var E, P = y[Symbol.asyncIterator];
                return P ? P.call(y) : (y = xe(y), E = {}, A("next"), A("throw"), A("return"), E[Symbol.asyncIterator] = function() {
                    return this
                }, E);

                function A(g) {
                    E[g] = y[g] && function(I) {
                        return new Promise(function(G, ve) {
                            ! function w(g, I, G, ve) {
                                Promise.resolve(ve).then(function(D) {
                                    g({
                                        value: D,
                                        done: G
                                    })
                                }, I)
                            }(G, ve, (I = y[g](I)).done, I.value)
                        })
                    }
                }
            }

            function re(y, P) {
                return Object.defineProperty ? Object.defineProperty(y, "raw", {
                    value: P
                }) : y.raw = P, y
            }

            function he(y) {
                if (y && y.__esModule) return y;
                var P = {};
                if (null != y)
                    for (var E in y) Object.hasOwnProperty.call(y, E) && (P[E] = y[E]);
                return P.default = y, P
            }

            function pe(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }

            function Z(y, P) {
                if (!P.has(y)) throw new TypeError("attempted to get private field on non-instance");
                return P.get(y)
            }

            function J(y, P, E) {
                if (!P.has(y)) throw new TypeError("attempted to set private field on non-instance");
                return P.set(y, E), E
            }
        },
        1590: (He, $, ie) => {
            "use strict";
            const v = ie(514);
            He.exports = te;
            const ye = function pe() {
                    function Z(J) {
                        return typeof J < "u" && J
                    }
                    try {
                        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch {
                        return Z(self) || Z(window) || Z(this) || {}
                    }
                }().console || {},
                be = {
                    mapHttpRequest: et,
                    mapHttpResponse: et,
                    wrapRequestSerializer: Ue,
                    wrapResponseSerializer: Ue,
                    wrapErrorSerializer: Ue,
                    req: et,
                    res: et,
                    err: function _e(Z) {
                        const J = {
                            type: Z.constructor.name,
                            msg: Z.message,
                            stack: Z.stack
                        };
                        for (const y in Z) void 0 === J[y] && (J[y] = Z[y]);
                        return J
                    }
                };

            function te(Z) {
                (Z = Z || {}).browser = Z.browser || {};
                const J = Z.browser.transmit;
                if (J && "function" != typeof J.send) throw Error("pino: transmit option must have a send function");
                const y = Z.browser.write || ye;
                Z.browser.write && (Z.browser.asObject = !0);
                const P = Z.serializers || {},
                    E = function m(Z, J) {
                        return Array.isArray(Z) ? Z.filter(function(P) {
                            return "!stdSerializers.err" !== P
                        }) : !0 === Z && Object.keys(J)
                    }(Z.browser.serialize, P);
                let A = Z.browser.serialize;
                Array.isArray(Z.browser.serialize) && Z.browser.serialize.indexOf("!stdSerializers.err") > -1 && (A = !1), "function" == typeof y && (y.error = y.fatal = y.warn = y.info = y.debug = y.trace = y), !1 === Z.enabled && (Z.level = "silent");
                const g = Z.level || "info",
                    I = Object.create(y);
                I.log || (I.log = We), Object.defineProperty(I, "levelVal", {
                    get: function ve() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(I, "level", {
                    get: function D() {
                        return this._level
                    },
                    set: function W(B) {
                        if ("silent" !== B && !this.levels.values[B]) throw Error("unknown level " + B);
                        this._level = B, we(G, I, "error", "log"), we(G, I, "fatal", "error"), we(G, I, "warn", "error"), we(G, I, "info", "log"), we(G, I, "debug", "log"), we(G, I, "trace", "log")
                    }
                });
                const G = {
                    transmit: J,
                    serialize: E,
                    asObject: Z.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: de(Z)
                };
                return I.levels = te.levels, I.level = g, I.setMaxListeners = I.getMaxListeners = I.emit = I.addListener = I.on = I.prependListener = I.once = I.prependOnceListener = I.removeListener = I.removeAllListeners = I.listeners = I.listenerCount = I.eventNames = I.write = I.flush = We, I.serializers = P, I._serialize = E, I._stdErrSerialize = A, I.child = function se(B, Pe) {
                    if (!B) throw new Error("missing bindings for child Pino");
                    Pe = Pe || {}, E && B.serializers && (Pe.serializers = B.serializers);
                    const ke = Pe.serializers;
                    if (E && ke) {
                        var Me = Object.assign({}, P, ke),
                            Zt = !0 === Z.browser.serialize ? Object.keys(Me) : E;
                        delete B.serializers, le([B], Zt, Me, this._stdErrSerialize)
                    }

                    function tn(vt) {
                        this._childLevel = 1 + (0 | vt._childLevel), this.error = fe(vt, B, "error"), this.fatal = fe(vt, B, "fatal"), this.warn = fe(vt, B, "warn"), this.info = fe(vt, B, "info"), this.debug = fe(vt, B, "debug"), this.trace = fe(vt, B, "trace"), Me && (this.serializers = Me, this._serialize = Zt), J && (this._logEvent = xe([].concat(vt._logEvent.bindings, B)))
                    }
                    return tn.prototype = this, new tn(this)
                }, J && (I._logEvent = xe()), I
            }

            function we(Z, J, y, P) {
                const E = Object.getPrototypeOf(J);
                J[y] = J.levelVal > J.levels.values[y] ? We : E[y] ? E[y] : ye[y] || ye[P] || We,
                    function Re(Z, J, y) {
                        !Z.transmit && J[y] === We || (J[y] = function(P) {
                            return function() {
                                const A = Z.timestamp(),
                                    w = new Array(arguments.length),
                                    g = Object.getPrototypeOf && Object.getPrototypeOf(this) === ye ? ye : this;
                                for (var I = 0; I < w.length; I++) w[I] = arguments[I];
                                if (Z.serialize && !Z.asObject && le(w, this._serialize, this.serializers, this._stdErrSerialize), Z.asObject ? P.call(g, function ae(Z, J, y, P) {
                                        Z._serialize && le(y, Z._serialize, Z.serializers, Z._stdErrSerialize);
                                        const E = y.slice();
                                        let A = E[0];
                                        const w = {};
                                        P && (w.time = P), w.level = te.levels.values[J];
                                        let g = 1 + (0 | Z._childLevel);
                                        if (g < 1 && (g = 1), null !== A && "object" == typeof A) {
                                            for (; g-- && "object" == typeof E[0];) Object.assign(w, E.shift());
                                            A = E.length ? v(E.shift(), E) : void 0
                                        } else "string" == typeof A && (A = v(E.shift(), E));
                                        return void 0 !== A && (w.msg = A), w
                                    }(this, y, w, A)) : P.apply(g, w), Z.transmit) {
                                    const G = Z.transmit.level || J.level,
                                        D = te.levels.values[y];
                                    if (D < te.levels.values[G]) return;
                                    ! function Ce(Z, J, y) {
                                        const P = J.send,
                                            E = J.ts,
                                            A = J.methodLevel,
                                            w = J.methodValue,
                                            g = J.val,
                                            I = Z._logEvent.bindings;
                                        le(y, Z._serialize || Object.keys(Z.serializers), Z.serializers, void 0 === Z._stdErrSerialize || Z._stdErrSerialize), Z._logEvent.ts = E, Z._logEvent.messages = y.filter(function(G) {
                                            return -1 === I.indexOf(G)
                                        }), Z._logEvent.level.label = A, Z._logEvent.level.value = w, P(A, Z._logEvent, g), Z._logEvent = xe(I)
                                    }(this, {
                                        ts: A,
                                        methodLevel: y,
                                        methodValue: D,
                                        transmitLevel: G,
                                        transmitValue: te.levels.values[Z.transmit.level || J.level],
                                        send: Z.transmit.send,
                                        val: J.levelVal
                                    }, w)
                                }
                            }
                        }(J[y]))
                    }(Z, J, y)
            }

            function le(Z, J, y, P) {
                for (const E in Z)
                    if (P && Z[E] instanceof Error) Z[E] = te.stdSerializers.err(Z[E]);
                    else if ("object" == typeof Z[E] && !Array.isArray(Z[E]))
                    for (const A in Z[E]) J && J.indexOf(A) > -1 && A in y && (Z[E][A] = y[A](Z[E][A]))
            }

            function fe(Z, J, y) {
                return function() {
                    const P = new Array(1 + arguments.length);
                    P[0] = J;
                    for (var E = 1; E < P.length; E++) P[E] = arguments[E - 1];
                    return Z[y].apply(this, P)
                }
            }

            function xe(Z) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: Z || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function de(Z) {
                return "function" == typeof Z.timestamp ? Z.timestamp : !1 === Z.timestamp ? Je : ce
            }

            function et() {
                return {}
            }

            function Ue(Z) {
                return Z
            }

            function We() {}

            function Je() {
                return !1
            }

            function ce() {
                return Date.now()
            }
            te.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, te.stdSerializers = be, te.stdTimeFunctions = Object.assign({}, {
                nullTime: Je,
                epochTime: ce,
                unixTime: function re() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function he() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);