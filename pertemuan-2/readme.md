# Pertemuan 2 | 13-09-2023 | GIT SCM

## GIT CLI

### Membuat local repository

1. Membuka directory (working directory)

pilih folder dan ketik cmd pada search explorer, pastikan sudah masuk didalam folder, lalu enter

2. Membuat local repository : git init (inisialisasi local repository)

### Inisialisasi user dan email sebelum commit ke repository

- git config user.name"Adhitya Hasan"
- git config user.email"adhityahasan16@mhs.mdp.ac.id"

- Memasukkan (working directory) ke dalam staging area

- Menghapus folder .git untuk menghapus inisialisasi local repository

Tracking status working directory :

- git status

Merekam file yang ingin di tracking :

- git add namaFile / git add . (menangkap semua perubahan)

- Setelah masuk kedalam staging area, lakukan commit (submit) ke local repository :
  cara 1 | git commit -m "pesan commit"
  cara 2 | git commit -a -m "add dan langsung commit"

- git show | untuk melihat status last commit

- git log | melihat history beserta id commit

Melakukan push ke branch :
- git push origin namaBranch

// git diff
cara 1 | git diff idBefore idAfter | untuk memeriksa perbandingan commit before and after

contoh :

- git diff abc123 def456
- git diff nama_file

cara 2 | diff --git nameFileBefore nameFileAfter

## Branch

master : branch utama yang diatur oleh Git, jika membuat repository dari Git CLI
main : branch utama yang diatur oleh GitHub, jika membuat repository dari GitHub

Cek listing branch
cara 1 | git branch
cara 2 | git branch --list

Membuat Branch baru
cara 1 | git branch namaBranch
cara 2 | git checkout -b namaBranch

Berpindah ke branch lain
git checkout namaBranch

Menggabungkan hasil commit branch cabang ke branch utama

- Chekcout ke branch utama | git checkout master
- Kemudian lakukan merging | git merge branchCabang
