from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'app/index.html',
                  {'title': 'Главная'})


def work_in_progress(request):
    return render(request, 'app/wip.html', {'title':'Работа в процессе'})

