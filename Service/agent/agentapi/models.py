# models.py
from django.db import models

class Company(models.Model):
  name = models.CharField(max_length=30)
  code = models.CharField(max_length=30)
  status = models.BooleanField(default=True)
  created_date = models.DateField()
  def __str__(self):
        return self.name

class Vendor(models.Model):
  company = models.ForeignKey(Company, on_delete=models.CASCADE)
  name = models.CharField(max_length=100)
  created_date = models.DateField()
  status = models.BooleanField(default=True)
  def __str__(self):
        return self.name

class Project(models.Model):
  name = models.CharField(max_length=100)
  company = models.ForeignKey(Company, on_delete=models.CASCADE)
  vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
  created_date = models.DateField()
  def __str__(self):
      return self.name

class Job(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE)
  number = models.IntegerField
  desc = models.CharField(max_length=300)
  def __str__(self):
    return self.name




