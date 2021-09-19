from django.shortcuts import render


def index(request):
    return render(request, 'index.html', {})

def category_detateil(request,id):
    return render(request, 'index.html', {})

def recip_detateil(request,id):
    return render(request, 'index.html', {})
